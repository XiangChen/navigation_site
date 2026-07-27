const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('aixzd_ai排行表(1).xlsx');

console.log('Sheet names:', workbook.SheetNames);

workbook.SheetNames.forEach(sheetName => {
  console.log('\n=== Sheet:', sheetName, '===');
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  console.log('Row count:', data.length);
  if (data.length > 0) {
    console.log('First row:', JSON.stringify(data[0], null, 2));
    console.log('First 7 rows:');
    data.slice(0, 7).forEach((row, index) => {
      console.log(`${index + 1}:`, JSON.stringify(row));
    });
  }
});
