const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const baseDir = __dirname;
const assistantDir = path.join(baseDir, 'assistant');

// Get all HTML files
const files = fs.readdirSync(assistantDir).filter(f => f.endsWith('.html'));

// Collect all image URLs
const imageUrls = [];
files.forEach(file => {
  const filePath = path.join(assistantDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const imgMatch = content.match(/src="(https:\/\/image\.uisdc\.com\/[^"]*)"/);
  if (imgMatch) {
    imageUrls.push({ file, url: imgMatch[1] });
  }
});

// Test URL with follow redirects
async function testUrl(url, redirectCount = 0) {
  if (redirectCount > 5) return { status: 'redirect_loop', ok: false };
  
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.uisdc.com/'
      },
      timeout: 8000
    }, (res) => {
      const status = res.statusCode;
      
      // Follow redirects
      if (status >= 300 && status < 400 && res.headers.location) {
        res.destroy();
        // Handle relative or absolute redirect
        let newUrl = res.headers.location;
        if (newUrl.startsWith('/')) {
          const urlObj = new URL(url);
          newUrl = urlObj.origin + newUrl;
        }
        testUrl(newUrl, redirectCount + 1).then(result => resolve(result));
      } else {
        resolve({ status, ok: status === 200, contentType: res.headers['content-type'] });
        res.destroy();
      }
    });
    req.on('error', (e) => resolve({ status: 'error', ok: false, error: e.message }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 'timeout', ok: false });
    });
  });
}

// Test all URLs
async function testAll() {
  console.log(`Testing ${imageUrls.length} image URLs...\n`);
  
  const results = { ok: [], failed: [], error: [] };
  
  // Test in batches to avoid overwhelming
  const batchSize = 10;
  for (let i = 0; i < imageUrls.length; i += batchSize) {
    const batch = imageUrls.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(async ({ file, url }) => {
      const result = await testUrl(url);
      return { file, url, ...result };
    }));
    
    batchResults.forEach(r => {
      if (r.ok) {
        results.ok.push(r);
      } else if (r.status === 'error' || r.status === 'timeout') {
        results.error.push(r);
      } else {
        results.failed.push(r);
      }
    });
    
    console.log(`Progress: ${Math.min(i + batchSize, imageUrls.length)}/${imageUrls.length}`);
  }
  
  console.log('\n========================================');
  console.log('RESULTS');
  console.log('========================================');
  console.log(`Total: ${imageUrls.length}`);
  console.log(`OK (status 200): ${results.ok.length}`);
  console.log(`Failed (other status): ${results.failed.length}`);
  console.log(`Error/Timeout: ${results.error.length}`);
  
  if (results.failed.length > 0 || results.error.length > 0) {
    console.log('\n========================================');
    console.log('FAILED/ERROR FILES:');
    console.log('========================================');
    
    [...results.failed, ...results.error].forEach((r, idx) => {
      console.log(`${idx + 1}. ${r.file}`);
      console.log(`   Status: ${r.status} | Content-Type: ${r.contentType || 'N/A'}`);
      console.log(`   URL: ${r.url.substring(0, 80)}...`);
      console.log('');
    });
  }
  
  // Write results to file
  const reportPath = path.join(baseDir, 'image_check_report.txt');
  let report = `Image Check Report\nGenerated: ${new Date().toISOString()}\n\n`;
  report += `Total files: ${imageUrls.length}\n`;
  report += `OK: ${results.ok.length}\n`;
  report += `Failed: ${results.failed.length}\n`;
  report += `Error: ${results.error.length}\n\n`;
  
  if (results.failed.length > 0 || results.error.length > 0) {
    report += 'FAILED/ERROR FILES:\n';
    [...results.failed, ...results.error].forEach((r, idx) => {
      report += `${idx + 1}. ${r.file} | Status: ${r.status}\n`;
    });
  }
  
  fs.writeFileSync(reportPath, report);
  console.log(`\nReport saved to: ${reportPath}`);
}

testAll();
