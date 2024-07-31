"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emp = void 0;
var emp = /** @class */ (function () {
    function emp(_name, _age, _dept) {
        this.name = _name;
        this.age = _age;
        this.dept = _dept;
    }
    emp.prototype.print = function () {
        console.log("name is :" + this.name);
    };
    return emp;
}());
exports.emp = emp;
var em = new emp("gopi", 31, "ece");
//em.print();
