//print sum of command line arguments

var summed = 0;

for (var i = 2; i < process.argv.length; i++) {
	summed += Number(process.argv[i]);
};

console.log(summed);
