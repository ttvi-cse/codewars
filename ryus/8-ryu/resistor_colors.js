function decodeResistorColors(bands) {
  const colors = {black: '0', brown: '1', red: '2', orange: '3', yellow: '4', green: '5', blue: '6', violet: '7', gray: '8', white: '9'};
  const fourths = {gold: '5', silver: '10'}
  var num = +(colors[bands.split(' ')[0]] + colors[bands.split(' ')[1]]);
  var power = +colors[bands.split(' ')[2]];
  var plus = +fourths[bands.split(' ')[3]] || 0;
  var ohms = num * Math.pow(10, power);

  if (ohms < 1000)  {
  	return plus? ohms + `ohms, ${plus}%`: ohms + ' ohms, 20%';
  } else if (ohms >=1000 && ohms < 1000000) {
  	return plus? `${ohms/1000}k` + ` ohms, ${plus}%`: ohms + ' ohms, 20%';
  } else {
  	return plus? `${ohms/1000000}M` + ` ohms, ${plus}%`: ohms + ' ohms, 20%';
  }

  return '';
}

console.log(decodeResistorColors("brown black green silver"));