/*  Builder Pattern is used to created made from a bunch of other objects
 *  For creating an elements of a complex aggregate.
 *  When you want to the creation of different to be independent of the main object
 *  Hide the creation of each part, only the builder only how to build everything
 */


var Car = function () {
    this.wheels = 0;
    this.color = "";
};

Car.prototype.setWheels = function(wheels) {
    this.wheels = wheels;
};

Car.prototype.setColor = function(color) {
    this.color = color;
};


var RedCarBuilder = function () {
    this.car = new Car();
};

RedCarBuilder.prototype.setWheels = function (){
    this.car.setWheels(4);
};

RedCarBuilder.prototype.setColor = function(){
    this.car.setColor("red");
};


BuildDirector = function () {
    this.builder = new RedCarBuilder();
};

BuildDirector.prototype.makeCar = function() {
    this.builder.setWheels();
    this.builder.setColor();

    return this.builder.car;
};


var redCarBuilder = new RedCarBuilder();
var buildDirector = new BuildDirector(redCarBuilder);
var car = buildDirector.makeCar();
console.log(car.wheels);
console.log(car.color);
