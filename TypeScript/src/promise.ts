const sayHey1 = (callback) => setTimeout(() => callback("hey"), 1000);

great1();

// const greet1 = () => {
//     sayHey1(() => {
//         sayHey1(() => {
//             sayHey1(() => {
//                 console
//             });
//         });
//     });
// };

// const sayHey1 = (callback) => {
//     setTimeout(() => {
//         callback("Hey in 1s");
//         setTimeout(() => {
//             callback("Hey in 2s");
//             setTimeout(() => {
//                 callback("Hey in 3s");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// };

// hey1(console.log);


const wait = (delay) => new Promise((resolved) => setTimeout(resolved, delay));
const sayHey3 = async (callback) => {
    await wait(1000);
    callback("hey in 1s");

    await wait(1000);
    callback("hey in 2s");

    await wait(1000);
    callback("hey in 3s");
};

// sayHey3(text => console.log(text));
