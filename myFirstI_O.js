//print number of lines with synchronous filesystem operation

var fs = require('fs');
var result = fs.readFileSync(process.argv[2]);
var prepData = result.toString().split("\n");

console.log(prepData.length - 1);
