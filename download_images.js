const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const baseDir = __dirname;
const imagesDir = path.join(baseDir, 'images');

// Create images directory
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Get all HTML files and extract image URLs
const categories = ['assistant', 'audio', 'chat', 'coding', 'creative', 'design', 'drawing', 'image', 'learning', 'marketing', 'office', 'toolbox', 'translation', 'video', 'writing'];

const allImages = new Map(); // filename -> url

categories.forEach(cat => {
  const dir = path.join(baseDir, cat);
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const imgMatch = content.match(/src="(https:\/\/image\.uisdc\.com\/[^"]*)"/);
    if (imgMatch) {
      const url = imgMatch[1];
      // Extract filename from URL
      const urlPath = new URL(url).pathname;
      const filename = path.basename(urlPath);
      if (!allImages.has(filename)) {
        allImages.set(filename, url);
      }
    }
  });
});

console.log(`Found ${allImages.size} unique images to download`);

// Download function with better error handling
function downloadImage(url, destPath, retries = 0) {
  return new Promise((resolve) => {
    const maxRetries = 2;
    const protocol = url.startsWith('https') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 10000
    };
    
    const req = protocol.get(url, options, (res) => {
      if (res.statusCode === 200) {
        // Write to temp file first, then rename
        const tempPath = destPath + '.tmp';
        const fileStream = fs.createWriteStream(tempPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          try {
            if (fs.existsSync(tempPath) && fs.statSync(tempPath).size > 0) {
              // Rename temp file to final path
              fs.renameSync(tempPath, destPath);
              resolve({ success: true });
            } else {
              if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
              resolve({ success: false, error: 'empty file' });
            }
          } catch (err) {
            resolve({ success: false, error: err.message });
          }
        });
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && retries < maxRetries) {
        // Follow redirect
        let newUrl = res.headers.location;
        if (newUrl.startsWith('/')) {
          newUrl = new URL(url).origin + newUrl;
        }
        res.destroy();
        downloadImage(newUrl, destPath, retries + 1).then(resolve);
      } else if (retries < maxRetries) {
        res.destroy();
        setTimeout(() => {
          downloadImage(url, destPath, retries + 1).then(resolve);
        }, 1000 * (retries + 1));
      } else {
        resolve({ success: false, status: res.statusCode });
        res.destroy();
      }
    });
    
    req.on('error', (e) => {
      if (retries < maxRetries) {
        setTimeout(() => {
          downloadImage(url, destPath, retries + 1).then(resolve);
        }, 1000 * (retries + 1));
      } else {
        resolve({ success: false, error: e.message });
      }
    });
    
    req.on('timeout', () => {
      req.destroy();
      if (retries < maxRetries) {
        setTimeout(() => {
          downloadImage(url, destPath, retries + 1).then(resolve);
        }, 1000 * (retries + 1));
      } else {
        resolve({ success: false, error: 'timeout' });
      }
    });
  });
}

// Download all images sequentially
async function downloadAll() {
  let success = 0;
  let failed = 0;
  let skipped = 0;
  
  const entries = Array.from(allImages.entries());
  const total = entries.length;
  
  for (let i = 0; i < total; i++) {
    const [filename, url] = entries[i];
    const destPath = path.join(imagesDir, filename);
    
    // Remove any existing temp files
    const tempPath = destPath + '.tmp';
    if (fs.existsSync(tempPath)) {
      try { fs.unlinkSync(tempPath); } catch (e) {}
    }
    
    // Skip if file already exists and has content
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
      skipped++;
      continue;
    }
    
    const result = await downloadImage(url, destPath);
    if (result.success) {
      success++;
    } else {
      failed++;
      if (failed <= 10) {
        console.log(`  FAILED ${filename}: ${result.error || result.status}`);
      }
    }
    
    if ((i + 1) % 100 === 0 || i === total - 1) {
      console.log(`Progress: ${i + 1}/${total} (OK: ${success}, Failed: ${failed}, Skipped: ${skipped})`);
    }
  }
  
  console.log(`\nDownload complete!`);
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);
  console.log(`Skipped (already exist): ${skipped}`);
  
  // List failed files
  if (failed > 0) {
    console.log('\nNote: Some images failed to download. They will show as broken images.');
  }
}

// Update all HTML files to use local paths
function updateHtmlFiles() {
  console.log('\nUpdating HTML files...');
  
  let count = 0;
  categories.forEach(cat => {
    const dir = path.join(baseDir, cat);
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // Replace remote image URLs with local paths
      content = content.replace(
        /src="(https:\/\/image\.uisdc\.com\/wp-content\/uploads\/[^"]*)"/g,
        (match, url) => {
          const filename = path.basename(new URL(url).pathname);
          return `src="../images/${filename}"`;
        }
      );
      
      fs.writeFileSync(filePath, content, 'utf-8');
      count++;
    });
  });
  
  console.log(`Updated ${count} HTML files to use local image paths`);
}

// Main
async function main() {
  console.log(`Starting download of ${allImages.size} images...`);
  console.log(`Save location: ${imagesDir}\n`);
  
  await downloadAll();
  updateHtmlFiles();
  
  console.log('\n✅ Done! All images downloaded and HTML files updated.');
  console.log('You can now open any HTML file to verify the images load correctly.');
}

main().catch(console.error);
