const fs = require('fs');

let colorArrays = fs.readFileSync('colorArrays.json', 'utf-8');
let processingArrays = colorArrays.replace(/\[/g, '{').replace(/\]/g, '}');

fs.writeFileSync('./processingArrays.txt', processingArrays);

