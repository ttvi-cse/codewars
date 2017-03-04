function toCamelCase(str){
  var arr = str.split('');

  arr[0] = arr[0].toUpperCase();

  for (var i = 0; i < arr.length; i++) {
  	if (arr[i] == '-' || arr[i] == '_') {
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }

  return arr.join('');
}

console.log(toCamelCase('the-stealth-warrior'));