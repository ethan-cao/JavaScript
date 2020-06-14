/*
The Proxy object is used to define custom behavior for fundamental operations 
(e.g. property lookup, assignment, enumeration, function invocation, etc).

var p = new Proxy(target, handler);
    target :  Object which the proxy virtualizes.
    handler : Placeholder object which contains traps.
    traps : The methods that provide property access. 
*/

let obj = {
    location: "Amsterdam",
    age : 28
};

let handler = {
    get : (obj, prop) => (prop in obj ? obj[prop] : "no such property"),
    set : (obj, propName, propValue) =>  {
        if (propName === "age"){
            if ( Number.isInteger(propValue) && propValue >=0 && propValue <= 200 ){
                obj[propName] = propValue;
                return true;
            } else {
                throw Error("age must be valid number");
            }
        }
    }
};

let p = new Proxy(obj, handler);

console.log(p.location);
console.log(p.location1);

p.age = 12313;