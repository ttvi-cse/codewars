/*
 Atoms: General
 */
//Special characters
console.log('\ ^ $ . * + ? ( ) [ ] { } |');
console.log(/^(ab)$/.test('(ab)'));
console.log(/^\(ab\)$/.test('(ab)'));
console.log(/./.test('\n')) // match any character except line terminators (newline, carriage return, etc.).
console.log(/[\s\S]/.test('\n'))
//Pattern characters
//      . (dot)
//      Character escapes (match single characters)
console.log(/\f\n\r\t\v/.test('\n'));
console.log(/\0/.test('\u0000'));
console.log(/[\cA\cZ]/.test('\n'));
//      Character class escapes (match one of a set of characters)
console.log(/[0-9]/.test((0)));
console.log(/\d/.test((0)));
console.log(/\D/.test((0)));
console.log(/[A-Za-z0-9_]/.test('1'));
console.log(/\w/.test('1'));
console.log(/\W/.test('1'));
console.log(/\s/.test(' '));

/*
 Atoms: Character Classes
 - [«charSpecs»] matches any single character that matches at least one of the charSpecs.
 - [^«charSpecs»] matches any single character that does not match any of the charSpecs.
 */
function parseIsoDate(str) {
    var match = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(str);

    // Other ways of writing the regular expression:
    // /^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$/
    // /^(\d\d\d\d)-(\d\d)-(\d\d)$/

    if (!match) {
        throw new Error('Not an ISO date: '+str);
    }
    console.log('Year: '  + match[1]);
    console.log('Month: ' + match[2]);
    console.log('Day: '   + match[3]);
}
parseIsoDate('2001-12-24');
/*
 Atoms: Groups
 - («pattern») is a capturing group. Whatever is matched by pattern can be accessed via backreferences or as the result of a match operation.
 - (?:«pattern») is a noncapturing group. pattern is still matched against the input, but not saved as a capture. Therefore, the group does not have a number you can refer to (e.g., via a backreference).
 - \1, \2, and so on are known as backreferences; they refer back to a previously matched group
 */
console.log(/^(a+)-\1$/.test('a-a')); //true
console.log(/^(a+)-\1$/.test('aaa-aaa')); //true
console.log(/^(a+)-\1$/.test('aa-a')); //false
var tagName = /<([^>]+)>[^<]*<\/\1>/;
tagName.exec('<b>bold</b>')[1];
tagName.exec('<strong>text</strong>')[1];
tagName.exec('<strong>text</stron>');
/*
 Quantifiers
 Any atom (including character classes and groups) can be followed by a quantifier:
 - ? means match never or once.
 - * means match zero or more times.
 - + means match one or more times.
 - {n} means match exactly n times.
 - {n,} means match n or more times.
 - {n,m} means match at least n, at most m, times.
 */
console.log('<a> <strong>'.match(/^<(.*)>/)[1]);  // greedy
console.log('<a> <strong>'.match(/^<(.*?)>/)[1])  // reluctant
/*
 Assertions
 ^ - Matches only at the beginning of the input.
 $ - Matches only at the end of the input.
 \b - Matches only at a word boundary. Don’t confuse with [\b], which matches a backspace.
 \B - Matches only if not at a word boundary.
 (?=«pattern») - Positive lookahead: Matches only if pattern matches what comes next. pattern is used only to look ahead, but otherwise ignored.
 (?!«pattern») - Negative lookahead: Matches only if pattern does not match what comes next. pattern is used only to look ahead, but otherwise ignored.
 */
console.log(/\bell\b/.test('hello'));
console.log(/\bell\b/.test('ello'));
console.log(/\bell\b/.test('ell'));
/*
 Disjunction
 */
//all strings that either start with aa or end with bb:
console.log(/^aa|bb$/.test('aaxx'));
console.log(/^aa|bb$/.test('xxbb'));
// note:  the disjunction binds more weakly than even ^ and $



/*
 II. Creating a Regular Expression
 */
/*
 Literal Versus Constructor
 */
/*
 Flags
 g - global - The given regular expression is matched multiple times. Influences several methods, especially replace().
 i - ignoreCase - Case is ignored when trying to match the given regular expression.
 m - multiline - In multiline mode, the begin operator ^ and the end operator $ match each line, instead of the complete input string.
 */

/*
 III. RegExp.prototype.test: Is There a Match?
 */

/*
Exercise:
 */
console.log(/^(http|https):\/\/[\w\d.]+(.com|.net)$/gi.test('https://vnexpres.net'));