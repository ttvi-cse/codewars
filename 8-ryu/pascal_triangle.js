var printPascal = function(n) {
	var arr = [];
	for (var line = 1; line <= n; line++) {
		var c = 1;
		for (var i = 1; i <= line; i++) {
			arr.push(c);
			c = c * (line - i) /i;
		}
	}

	return arr;
}

console.log(printPascal(4));