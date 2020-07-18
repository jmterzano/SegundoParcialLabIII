var General;
(function (General) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(marca, modelo, precio) {
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
        return Vehiculo;
    }());
    General.Vehiculo = Vehiculo;
})(General || (General = {}));
