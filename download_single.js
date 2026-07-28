const https = require('https');
const fs = require('fs');

function downloadImage(url, destPath, retries = 0) {
  return new Promise((resolve) => {
    const maxRetries = 2;
    const protocol = url.startsWith('https') ? https : require('http');
    
    const req = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.uisdc.com/',
        'Origin': 'https://www.uisdc.com'
      },
      timeout: 15000
    }, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve({ success: true, size: fs.statSync(destPath).size });
        });
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && retries < maxRetries) {
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
        setTimeout(() => downloadImage(url, destPath, retries + 1).then(resolve), 1000);
      } else {
        resolve({ success: false, error: e.message });
      }
    });
    req.on('timeout', () => {
      req.destroy();
      if (retries < maxRetries) {
        setTimeout(() => downloadImage(url, destPath, retries + 1).then(resolve), 1000);
      } else {
        resolve({ success: false, error: 'timeout' });
      }
    });
  });
}

// Download the image
const url = 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-AnyEnhancer.webp';
const dest = 'images/nav-logo-AnyEnhancer.webp';

downloadImage(url, dest).then(result => {
  if (result.success) {
    console.log('✅ Downloaded successfully!');
    console.log('File size:', result.size, 'bytes');
    
    // Update HTML file
    const fs = require('fs');
    const path = require('path');
    const htmlPath = 'video/AnyEnhancer.html';
    let content = fs.readFileSync(htmlPath, 'utf-8');
    
    // Replace URL
    content = content.replace(
      /src="https:\/\/image\.uisdc\.com\/wp-content\/uploads\/2025\/09\/nav-logo-AnyEnhancer\.webp"/,
      'src="../images/nav-logo-AnyEnhancer.webp"'
    );
    
    fs.writeFileSync(htmlPath, content, 'utf-8');
    console.log('✅ HTML file updated!');
    console.log('You can now refresh the page to see the icon.');
  } else {
    console.log('❌ Failed:', result.error || result.status);
  }
});
