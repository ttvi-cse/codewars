var person1 = new Object();

// add properties and methods to this object using dot or bracket notation as desired
person1.name = 'Chris';
person1['age'] = 39;
person1.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
}

var person2 = new Object({
    name: 'Chris',
    age: 39,
    greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
    }
})

person1.greeting();
var person3 = Object.create(person1);
person2.greeting();