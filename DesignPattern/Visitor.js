/*
The Visitor pattern is less important in JavaScript as it offers the ability to add and remove 
methods at runtime but it is still useful to have that pattern in mind.
*/

// Visitor could also be a function
var ColorVisitor = {
	visit:  function(car){
		car.color = "green";
	}
}

function Car(){
}

Car.prototype.run = function(){
	console.log("it is running");
}


///////////////////

var car1 = new Car();


ColorVisitor.visit(car1);
