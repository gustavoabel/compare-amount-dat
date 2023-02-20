const fs = require('fs');

const file1 = JSON.parse(fs.readFileSync('./file1.json', 'utf8'));
const file2 = JSON.parse(fs.readFileSync('./file2.json', 'utf8'));

const data1 = JSON.parse(file1);
const data2 = JSON.parse(file2);
const ids1 = data1.map(obj => obj.id);
const ids2 = data2.map(obj => obj.id);

