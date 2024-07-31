"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var dev = /** @class */ (function (_super) {
    __extends(dev, _super);
    function dev(_name, _age, _dept, _project) {
        var _this = _super.call(this, _name, _age, _dept) || this;
        _this.project = _project;
        return _this;
    }
    dev.prototype.write = function () {
        console.log("write code");
    };
    dev.prototype.saveRegister = function () {
        console.log("saved the register");
    };
    return dev;
}(class_1.emp));
var d = new dev("hari", 31, "ece", "metlife");
d.write();
d.print();
d.saveRegister();
