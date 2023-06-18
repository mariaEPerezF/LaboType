"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarNumeroTelefono = exports.validarTipoTelefono = exports.Telefono = exports.PhoneType = void 0;
var PhoneType;
(function (PhoneType) {
    PhoneType[PhoneType["MOVIL"] = 0] = "MOVIL";
    PhoneType[PhoneType["FIJO"] = 1] = "FIJO";
})(PhoneType = exports.PhoneType || (exports.PhoneType = {}));
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    return Telefono;
}());
exports.Telefono = Telefono;

function validarTipoTelefono(tipo) {
    var tipoTelefono;
    if (tipo === "MOVIL") {
        tipoTelefono = PhoneType.MOVIL;
    }
    else if (tipo === "FIJO") {
        tipoTelefono = PhoneType.FIJO;
    }
    return tipoTelefono;
}
exports.validarTipoTelefono = validarTipoTelefono;

function validarNumeroTelefono(numero) {
    var num;
    var telefonoRegex = /^\+\d{1,3}\s?\(\d{1,4}\)\s?\d{1,}-?\d{1,}$/;
    numero !== undefined ? num = numero.toString() : num = undefined;
    if (num !== undefined) {
        if (!telefonoRegex.test(num)) {
            numero = undefined;
        }
    }
    return numero;
}

exports.validarNumeroTelefono = validarNumeroTelefono;
