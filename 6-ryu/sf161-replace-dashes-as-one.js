function replaceDashesAsOne(str) {
    console.log(str.match(/-+|((-\s)(-\s)*)/));
}
console.log(replaceDashesAsOne('we-are- - - code----warriors.-'));