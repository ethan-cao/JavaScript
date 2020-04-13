var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Department = /** @class */ (function () {
    // property alias set in constructor param is also the class proerty
    // shorten way to initialize property
    function Department(id, name, alias) {
        this.alias = alias;
        this.id = id;
        this.name = name;
    }
    Object.defineProperty(Department.prototype, "departmentName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    // restrict this must be of type Department
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id) {
        var admins = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            admins[_i - 1] = arguments[_i];
        }
        var _this = 
        // super() must be invoked in the very beginning of child constructor
        _super.call(this, id, "IT", "IT Department") || this;
        _this.admins = __spreadArrays(admins);
        _this.employees = __spreadArrays(admins);
        return _this;
    }
    return ITDepartment;
}(Department));
var it = new ITDepartment("1", "Ethan");
it.departmentName = "new IT"; // setter
console.log(it.departmentName); // getter
//# sourceMappingURL=class.js.map