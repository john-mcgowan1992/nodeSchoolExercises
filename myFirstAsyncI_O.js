var fs = require('fs');
var lineCount = 0;
var fileName = process.argv[2];

fs.readFile(fileName, function (err, data) {
	if (err) {throw err.message}
	else {
		lineCount = data.toString().split("\n").length - 1;
		console.log(lineCount);
	}
});

