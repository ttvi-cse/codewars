var regex=/[*+?.|(){}]/g;
console.log("(a*b+c?)|(.)".match(regex))
/*
 \\   matches \
 \^   matches ^
 \f   matches Form-feed character.
 \n   matches Newline character.
 \r   matches Carriage-return character.
 \t   matches Tab character.
 \v   matches Vertical tab character.
 */
function isPair(s){
    var r=/\(\)|\[\]|\{\}/g;
    while (r.test(s)) {
        console.log(s);
        s=s.replace(r,"");
    }
    return s=="";
}
// console.log( isPair("()") )     //output: true
console.log( isPair("((()))") ) //output: true
// console.log( isPair("({[]})") ) //output: true
// console.log( isPair("([]{})") ) //output: true
// console.log( isPair(")(") )     //output: false
// console.log( isPair(")()(") )   //output: false
// console.log( isPair(")(") )     //output: false
// console.log( isPair("({[})") )  //output: false

/*
 \d   Matches a digit character.                    Equivalent to [0-9].
 \D   Matches a nondigit character.                 Equivalent to [^0-9].
 \w   Matches any letters, numbers and underscore.  Equivalent to [A-Za-z0-9_].
 \W   Matches any character except lettes, numbers and underscore.
 Equivalent to [^A-Za-z0-9_].
 \s   Matches any whitespace character.             Equivalent to [\f\n\r\t\v].
 \S   Matches any non-whitespace character.         Equivalent to [^\f\n\r\t\v].
 \b   Matches a word boundary; that is, the position between a word and a whitespace.
 \B   Matches a word non-boundary.
 */
//old example1: a function used for verify username
function verify(username){
    //return /^[a-z][a-z0-9_]{5,15}$/i.test(username);  ---original regular expression
    return /^[a-z]\w{5,15}$/i.test(username);           //---use \w
}
console.log( verify("myjinxin2015"))  //output: true
console.log( verify("smile67"))       //output: true
console.log( verify("GiacomoSorbi"))  //output: true
console.log( verify("jhoffner"))      //output: true
console.log( verify("g964") )         //output: false     username too short
console.log( verify("matt c") )       //output: false     username contains space
console.log( verify("My_name_is_ZozoFouchtra") )  //output: false   username too long

//old example2: a function used for capitalize words in string
function capIt(str){              //   ----original function
    return str.split(/ /)
        .map(s=>s.replace(/^./,x=>x.toUpperCase()))
        .join(" ")
}
function capIt(str){              //   ----use \b to matches word boundary
    return str.replace(/\b\w/g,x=>x.toUpperCase())
}
console.log( capIt("hello world!"))  //output: Hello World!
console.log( capIt("my name is John."))  //output: My Name Is John.

// matches any two identical consecutive characters
var str="good wood food foot green glass roof";
var reg=/(.)\1/g //using only /.\1/g is wrong
console.log( str.match(reg))
//output: [ 'oo', 'oo', 'oo', 'oo', 'ee', 'ss', 'oo' ]

var str="abba baab green glass roof";
var reg=/(.)(.)\2\1/g
console.log( str.match(reg))  //output: [ 'abba', 'baab' ]

var regex=/\b(\w)(\w)?(\w)?\w?\3\2\1\b/g/
//^((.)(?1)\2|.?)$
console.log(regex.test('bbbb'));