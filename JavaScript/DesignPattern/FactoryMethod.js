var Shape = function() {};

var Circle = function() {
    Shape.call(this);
    this.name = "Circle";
}

var Rectangle = function() {
    Shape.call(this);
    this.name = "Rectangle";
};

var ShapeFactory = function() {};

var CircleFactory = function() {
    ShapeFactory.call(this);
};

CircleFactory.prototype.createShape = function() {
    return new Circle();
};

var RectangleFactory = function() {
    ShapeFactory.call(this);
};

RectangleFactory.prototype.createShape = function() {
    return new Rectangle();
}

// var shapeFactory = new CircleFactory();
var shapeFactory = new RectangleFactory();
var shape = shapeFactory.createShape();
console.log(shape.name);
