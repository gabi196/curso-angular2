var myVAr = 'my var';
function myFunc(x, y) {
    return x + y;
}
var num = 12;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) { return valor * 2; });
var Soma = /** @class */ (function () {
    function Soma() {
    }
    Soma.prototype.soma = function (x, y) {
        return x + y;
    };
    return Soma;
}());
