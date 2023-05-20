// named export 
export const f1 = () => {
    console.log("f1");
};

export const f2 = () => {
    console.log("f2");
};

export const f3 = () => {
    console.log("f3");
};


const f4 = () => {
        console.log("f4");
};

// default export, there can be only 1 default export per file
export default f4;

console.log("module loaded");