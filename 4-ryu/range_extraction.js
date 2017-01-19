function solution(list) {
	var counter = 0;
	var arr = [];
	for(var i = 0; i < list.length; i++){
		if (list[i + 1] == list[i] + 1) {
			counter++;
		} else {
			if (counter > 1) {
				arr.push(`${list[i-counter]}` + '-' + `${list[i]}`);
				counter = 0;
			} else if (counter > 0) {
				arr.push(list[i-1].toString());
				arr.push(list[i].toString());
				counter = 0;
			} else {
				arr.push(list[i].toString());
				counter = 0;
			}
			
		}
	}
	return arr.join(',');
}

var list = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

console.log(solution(list));