const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const categories = ['assistant', 'audio', 'chat', 'coding', 'creative', 'design', 'drawing', 'image', 'learning', 'marketing', 'office', 'toolbox', 'translation', 'video', 'writing'];

let count = 0;
let errors = 0;

categories.forEach(cat => {
  const dir = path.join(baseDir, cat);
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    try {
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // 1. Change grid from 12-column to single column
      content = content.replace(
        'grid-cols-1 lg:grid-cols-12 gap-8',
        'grid-cols-1 gap-8'
      );
      
      // 2. Remove lg:col-span-8 from left column
      content = content.replace(
        'lg:col-span-8 space-y-stack-lg',
        'w-full space-y-stack-lg'
      );
      
      // 3. Remove the right column block
      // Find the comment marking the right column
      const rightColComment = '<!-- Right Column: Meta & Recommendations -->';
      const rightColStart = content.indexOf(rightColComment);
      if (rightColStart === -1) {
        console.log(`Warning: No right column in ${filePath}`);
        errors++;
        return;
      }
      
      // The right column div starts right after the comment
      const rightColDivStart = content.indexOf('<div class="lg:col-span-4 space-y-stack-lg">', rightColStart);
      if (rightColDivStart === -1) {
        console.log(`Warning: No right col div in ${filePath}`);
        errors++;
        return;
      }
      
      // Find the matching </div> by tracking div depth
      let depth = 0;
      let pos = rightColDivStart;
      let rightColDivEnd = -1;
      
      while (pos < content.length) {
        const nextOpen = content.indexOf('<div', pos);
        const nextClose = content.indexOf('</div>', pos);
        
        if (nextClose === -1) {
          break;
        }
        
        if (nextOpen !== -1 && nextOpen < nextClose) {
          depth++;
          pos = nextOpen + 4;
        } else {
          depth--;
          if (depth === 0) {
            rightColDivEnd = nextClose + 6; // include the </div>
            break;
          }
          pos = nextClose + 6;
        }
      }
      
      if (rightColDivEnd === -1) {
        console.log(`Warning: No matching close in ${filePath}`);
        errors++;
        return;
      }
      
      // Check if the closing </div> is followed by </div>\n</main>
      // rightColDivEnd points right after the right column's </div>
      // The next thing should be </div>\n</main> (grid close + main close)
      const afterRight = content.substring(rightColDivEnd, rightColDivEnd + 50);
      // Should contain </div>\n</main>
      
      // Remove from rightColComment start to rightColDivEnd
      content = content.substring(0, rightColStart) + content.substring(rightColDivEnd);
      
      fs.writeFileSync(filePath, content, 'utf-8');
      count++;
    } catch (err) {
      console.log(`Error: ${filePath}: ${err.message}`);
      errors++;
    }
  });
});

console.log(`Done! Processed ${count} files, ${errors} errors.`);
