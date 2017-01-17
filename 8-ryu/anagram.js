function anagrams(word, words) {
  var tranform = word.split('').sort().join('');

  return words.filter(function(w) {
  	// console.log(w)
  	// console.log(w.split('').sort().join(''));
  	// console.log(tranform);
    if (w.split('').sort().join('') === tranform)
      return w;
  })
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))