function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
        console.log('Hi! I\'m ' + this.name + '.');
    };
    return obj;
}

/**
 *
 * @param name
 * @constructor
 */
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last +
                        ' is ' + this.age + ' years old. He likes ' +
                        this.interests[0] + ' and ' + this.interests[1] + '.' );

    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    }
}

// var salva = createNewPerson('Salva');
// salva.name;
// salva.greeting();

// var person1 = new Person('Bob');
// var person2 = new Person('Sarah');
//
// person1.name;
// person1.greeting();
// person2.name;
// person2.greeting();


var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
person1['age'];
person1.interests[1];
console.log(person1.bio());

