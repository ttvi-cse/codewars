function vowel2index(str) {
   return str.replace(/[aeiou]/ig,(m,i)=>{console.log(m,i);return i+1});
}
console.log(vowel2index('this is my string'));
