// Layer 1
var jane={
    name:'Jane',
    sayHelloTo: function(otherName) {
        // 'use strict';
        console.log(this.name+' says hello to '+ otherName);
    }
}
console.log('-------call(thisValue,arg1?,..,argN?)--------')
jane.sayHelloTo('Tarzan');
jane.sayHelloTo.call(jane,'Tarzan');

console.log('-------apply(thisValue,argArray)--------')
jane.sayHelloTo.apply(jane, ['Tarzan']);

console.log('-------bind(thisValue,arg1?,..,argN?)--------')
function func() {
    console.log('this:' + this);
    console.log('arguments: '+Array.prototype.slice.call(arguments));
}
var bound = func.bind('abc', 1 , 2);
bound(3);

console.log('-------apply() for Constructors--------')

console.log('-------Pitfall: Losing this When Extracting a Method--------')

console.log('-------Pitfall: Functions Inside Methods Shadow this--------')
var obj= {
    name: 'Jane',
    friends: ['Tarzan', 'Cheeta'],
    loop: function() {
        'use strict';
        this.friends.forEach(
            function (friend) { // function has its own this -> error
                console.log(this.name+' knows '+ friend);
            }
        )
    },
    loop1: function() {
        'use strict';
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name+' knows '+friend);
        })
    },
    loop2:function() {
        'use strict';
        this.friends.forEach(function (friend) {
            console.log(this.name + ' knows ' + friend);
        }.bind(this))
    },
    loop3: function() {
        'use strict';
        this.friends.forEach(function(friend) {
            console.log(this.name+' knows '+friend);
        }, this);
    }
}
// obj.loop();
obj.loop1();
obj.loop2();
obj.loop3();




// Layer 2
console.log('-------Layer2: The Prototype Relationship Between Objects--------')
var proto = {
    describe: function() {
        return 'name: '+this.name;
    }
};
var obj = {
    __proto__:proto,
    name: 'obj'
}
obj.describe = function() {return 'overriden'};
console.log(obj.describe());

console.log('-------Sharing Data Between Objects via a Prototype--------')
var jane = {
    name: 'Jane',
    describe: function() {
        return 'Person named '+this.name;
    }
};
var tarzan = {
    name: 'Tarzan',
    describe: function() {
        return 'Person named '+this.name;
    }
};
var PersonProto = {
    describe: function() {
        console.log('Person named '+this.name);
    }
}
var jane={
    __proto__:PersonProto,
    name: 'Jane'
}
var tarzan={
    __proto__:PersonProto,
    name: 'Tarzan'
}
jane.describe();
tarzan.describe();

console.log('-------Getting and Setting the Prototype--------')

var jane = Object.create(PersonProto, {
    name: {value: 'Jane', writable: true}
})

var jane = Object.create(PersonProto);
jane.name = 'Jane';

Object.getPrototypeOf(jane) === PersonProto;

console.log('-------Checking whether one object a prototype of another one--------')
var A={};
var B=Object.create(A);
var C=Object.create(B);
console.log(A.isPrototypeOf(C));
console.log(C.isPrototypeOf(A));

function getDefiningObject(obj, propKey) {
    obj=Object(obj);
    while(obj&&!{}.hasOwnProperty.call(obj,propKey)) {
        obj=Object.getPrototypeOf(obj);
    }
    return obj;
}

console.log('-------The Special Property __proto__--------')
var obj={};
console.log(obj.__proto__===Object.prototype);
obj.__proto__=Array.prototype
console.log(Object.getPrototypeOf(obj)===Array.prototype);

console.log('-------Setting and Deleting Affects Only Own Properties--------')
var proto = {foo: 'a'};
var obj = Object.create(proto);
console.log(obj.foo);
console.log(obj.hasOwnProperty('foo'));
obj.foo='b';
console.log(obj.foo);
console.log(obj.hasOwnProperty('foo'));
console.log(proto.foo);
delete obj.foo;
console.log(obj.foo);
delete getDefiningObject(obj,'foo').foo;
console.log(obj.foo);

console.log('-------Iteration and Detection of Properties--------')
var proto = Object.defineProperties({}, {
    protoEnumTrue: {value:1, enumerable:true},
    protoEnumFalse: {value: 2, enumerable:false}
});
var obj = Object.create(proto, {
    objEnumTrue: {value:1, enumerable:true},
    objEnumFalse: {value: 2, enumerable:false}
});
for (var x in obj) console.log(x);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

console.log('-------Best Practices: Iterating over Own Properties--------')
for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj,key)) {
        console.log(key);
    }
}
var obj={first:'John',last:'Doe'};
Object.keys(obj).forEach(function(key){
    console.log(key);
})

console.log('-------Accessors (Getters and Setters)--------')
var obj={
    get foo() {
        return 'getter';
    },
    set foo(value) {
        console.log('setter: '+value);
    }
}
obj.foo='bla';
console.log(obj.foo);

console.log('-------Property Attributes and Property Descriptors--------')

console.log('-------Protecting Objects--------')
var obj={foo:'a'};
Object.preventExtensions(obj);
obj.bar='b';
console.log(obj.bar);
console.log(Object.isExtensible(obj));

console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
Object.seal(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
obj.foo='b';
console.log(obj.foo);
try {
    Object.defineProperty(obj, 'foo', {enumerable:false});
} catch (TypeError) {
    console.log('TypeError!!!')
}

Object.seal(obj);





// Layer 3
console.log('-------Layer 3: Constructors—Factories for Instances--------')





// Layer 4
