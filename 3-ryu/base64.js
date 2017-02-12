String.prototype.toBase64 = function() {
    // the result/encoded string, the padding string, and the pad count
    var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var r = "";
    var p = "";
    var c = this.length % 3;

    // add a right zero pad to make this string a multiple of 3 characters
    if (c > 0) {
        for (; c < 3; c++) {
            p += '=';
            this.val += "\0";
        }
    }

    // increment over the length of the string, three characters at a time
    for (c = 0; c < this.length; c += 3) {

        // we add newlines after every 76 output characters, according to the MIME specs
        if (c > 0 && (c / 3 * 4) % 76 == 0) {
            r += "\r\n";
        }

        // these three 8-bit (ASCII) characters become one 24-bit number
        var n = (this.charCodeAt(c) << 16) + (this.charCodeAt(c + 1) << 8) + this.charCodeAt(c + 2);

        // this 24-bit number gecls
        // ts separated into four 6-bit numbers
        n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>> 6) & 63, n & 63];

        // those four 6-bit numbers are used as indices into the base64 character list
        r += base64chars[n[0]] + base64chars[n[1]] + base64chars[n[2]] + base64chars[n[3]];
    }
    // add the actual padding string, after removing the zero pad
    return r.substring(0, r.length - p.length) + p;
}

String.prototype.fromBase64 = function()
{
    var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");

    var base64inv = {};
    for (var i = 0; i < base64chars.length; i++)
    {
        base64inv[base64chars[i]] = i;
    }

    // remove/ignore any characters not in the base64 characters list
    //  or the pad character -- particularly newlines
    s = this.replace(new RegExp('[^'+base64chars.join("")+'=]', 'g'), "");

    // replace any incoming padding with a zero pad (the 'A' character is zero)
    var p = (this.charAt(this.length-1) == '=' ?
        (this.charAt(this.length-2) == '=' ? 'AA' : 'A') : "");
    var r = "";
    this.val = this.substr(0, this.length - p.length) + p;

    // increment over the length of this encoded string, four characters at a time
    for (var c = 0; c < s.length; c += 4) {

        // each of these four characters represents a 6-bit index in the base64 characters list
        //  which, when concatenated, will give the 24-bit number for the original 3 characters
        var n = (base64inv[this.charAt(c)] << 18) + (base64inv[this.charAt(c+1)] << 12) +
            (base64inv[this.charAt(c+2)] << 6) + base64inv[this.charAt(c+3)];

        // split the 24-bit number into the original three 8-bit (ASCII) characters
        r += String.fromCharCode((n >>> 16) & 255, (n >>> 8) & 255, n & 255);
    }
    // remove any zero pad that was added to make this a multiple of 24 bits
    return r.substring(0, r.length - p.length);
}

// console.log('adb'.toBase64());

console.log('adb'.toBase64().fromBase64());