const sayHey1 = (callback) => setTimeout(() => callback(), 1000);
const greet1 = (callback) => {
   sayHey1(() => {
       callback("hey in 1s")
       sayHey1(() => {
           callback("hey in 2s")
           sayHey1(callback.bind(null, "hey in 3s"));
       });
   }); 
};

// greet1(console.log);


const sayHey2 = () => new Promise((callback) => {setTimeout(()=> callback(), 1000)});
const greet2 = (callback) => {
      sayHey2()
        .then(() => {
            callback("hey in 1s");
        })
        .then(() => callback("hey in 2s") )
};

greet2(console.log);


const sayHey3 = (delay) => new Promise((resolved) => setTimeout(resolved, delay));
const greet3 = async (callback) => {
    // use the await to pause the execution of the code until the Promise is resolved
    await sayHey3(1000);
    callback("hey in 1s");

    await sayHey3(1000);
    callback("hey in 2s");

    await sayHey3(1000);
    callback("hey in 3s");
};

// greet3(text => console.log(text));
