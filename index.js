const fs = require('fs');

const file1 = JSON.parse(fs.readFileSync('./file1.json', 'utf8'));
const file2 = JSON.parse(fs.readFileSync('./file2.json', 'utf8'));
