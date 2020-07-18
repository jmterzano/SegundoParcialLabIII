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
var General;
(function (General) {
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(marca, modelo, precio, cantPuertas) {
            var _this = _super.call(this, marca, modelo, precio) || this;
            _this.cantPuertas = 3;
            _this.cantPuertas = cantPuertas;
            return _this;
        }
        Auto.prototype.getCantPuertas = function () {
            return this.cantPuertas;
        };
        Auto.prototype.setCantVidas = function (cantPuertas) {
            this.cantPuertas = cantPuertas;
        };
        return Auto;
    }(General.Vehiculo));
    General.Auto = Auto;
})(General || (General = {}));
