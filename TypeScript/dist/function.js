// good pratice: just let TS infer the return type
function add(n1, n2) {
    return n1 + n2;
}
// with void as return type, no need to have return sentence, better than undefined 
function print1(n) {
    console.log(n);
}
// with undefined as return type, there must be return sentence
function print2(n) {
    return;
}
// Function type
var f = function () { return console.log("f"); };
var printList = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return console.log();
};
var printOutput = function (output) { return console.log(output); };
var combine;
combine = add;
console.log(combine(10, 20)); // 30
// void callback function type   does not force no return, mererly indicate return is useless
function combineAndPrint(a, b, callback) {
    if (b === void 0) { b = 1; }
    var n = callback(a + b);
    return n;
}
var result = combineAndPrint(1, 2, function (x) {
    console.log(x); // 3
    // callback can return anything, even if the function type has void return
    return "s";
});
console.log(result); // s
//# sourceMappingURL=function.js.map