function test() {
    try {
        console.log("try1");
        console.log("try2");
        return 1;
        throw "error"; // not executed
    } catch {
        console.log("catch");
        return 2;
    } finally {
        console.log("finally");
        // return 3; // this take precedences over return in try block 
    }
}

console.log(test());