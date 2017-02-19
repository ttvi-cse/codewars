// class Reactangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
//
// var Rectangle = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
//
// var Rectangle = class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width  = width;
//     }
// }

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = height;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);

console.log(square.area);

