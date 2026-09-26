const fs = require('fs');

function readCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8').trim();
  if (!content) return [];

  const [headerLine, ...rows] = content.split(/\r?\n/);
  const headers = headerLine.split(',').map(h => h.trim());

  return rows.map(row => {
    const values = row.split(',').map(v => v.trim());
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index] ?? '';
      return obj;
    }, {});
  });
}

module.exports = { readCSV };
