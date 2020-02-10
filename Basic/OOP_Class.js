// ES6 function constructors
// equalvalent to ES5 function Shape(name) {}
class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
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
  static name = "Rectangle";

  static defaultRectangle() {
    return new Rectangle("default", 0, 0, 100, 100);
  }

  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  }

  move(newX, newY) {
    newX += 10;
    super.move(newX, newY);
  }
}

Rectangle.staticFiled = 1;
