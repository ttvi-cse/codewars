String.prototype.delete=function() {
  for(var e in arguments) {
    console.log(typeof arguments[e]);
    this.replace(arguments[e],'');
    console.log(this);
  }
  return this.valueOf();
}
console.log("Hello World123".delete(/h/gi, /[0-9]/g));