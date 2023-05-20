/*
 * 	Simple Factory Pattern
 *  it is used to generate instances that is sub type of or implementation of a specific type
 *  Pick specific class at runtime
 */


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

ShapeFactory.prototype.createShape = function(shapeName) {
    var shape;

    if ("Circle" == shapeName) {
        shape = new Circle();
    } else if ("Rectangle" == shapeName) {
        shape = new Rectangle();
    }

    // if we need to add more shapes, we have to modify here
    // This is against open for extension, but closed for modification.
    // That is why Factory Method comes to here 

    return shape;
}


var shapeFactory = new ShapeFactory();
var shape;
shape = shapeFactory.createShape("Circle");
console.log(shape.name);
shape = shapeFactory.createShape("Rectangle");
console.log(shape.name);
