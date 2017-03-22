function flipNumber(string) {
    let out = [];
    let chars = string.split('');
    while (chars.length) {
        out.push(chars.reverse().shift());
    }
    return out.join('');
}
console.log(flipNumber('012345'));