import xlsx from 'xlsx';
import fs from 'fs';

const workbook = xlsx.readFile('aixzd_ai排行表(1).xlsx');

console.log('Sheet names:', workbook.SheetNames);

const allData = {};

workbook.SheetNames.forEach(sheetName => {
  console.log('\n=== Sheet:', sheetName, '===');
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  console.log('Row count:', data.length);
  if (data.length > 0) {
    console.log('First row:', JSON.stringify(data[0], null, 2));
    console.log('First 7 rows:');
    const top7 = data.slice(0, 7);
    top7.forEach((row, index) => {
      console.log(`${index + 1}:`, JSON.stringify(row));
    });
    allData[sheetName] = top7;
  }
});

fs.writeFileSync('excel-data.json', JSON.stringify(allData, null, 2));
console.log('\nData saved to excel-data.json');
