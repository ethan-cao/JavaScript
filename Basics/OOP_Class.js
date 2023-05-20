// ES6 function constructors
// equivalent to ES5 function Shape(name) {}
class Shape {
  #privateField;

  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;

    this.#privateField = 1;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

/**
 Internally, extends keyword sets Rectangle.prototype.[[Prototype]] to Shape.prototype.
 [[Prototype]] usually is __proto__
 */
class Rectangle extends Shape {
  #subPrivateField;

  static name = "Rectangle";

  static defaultRectangle() {
    return new Rectangle("default", 0, 0, 100, 100);
  }

  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;

    this.#subPrivateField = 2;
  }

  move(newX, newY) {
    newX += 10;
    super.move(newX, newY);
  }

  // binds an object property to a function that will be called when that property is looked up.
  // getter is not enumerable property, will not be serialized with JSON.stringify or shown in for...in
  // getter will not be inherited by child class
  get color() {
    return 'red'
  }
}

Rectangle.staticFiled = 1;

const r = new Rectangle();
console.log(r.#privateField)



console.log(1)