function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
}
var n = new NamedOne('John', 'Doe');
n.firstName='Bill';
console.log('test for: '+ 'Bill');
console.log('------');
console.log(n.firstName);
console.log(n.lastName);
console.log(n.fullName);
