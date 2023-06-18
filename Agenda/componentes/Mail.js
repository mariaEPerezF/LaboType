"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarTipoEmail = exports.Mail = exports.EmailType = void 0;
var EmailType;
(function (EmailType) {
    EmailType[EmailType["PERSONAL"] = 0] = "PERSONAL";
    EmailType[EmailType["EMPRESA"] = 1] = "EMPRESA";
})(EmailType = exports.EmailType || (exports.EmailType = {}));
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    return Mail;
}());
exports.Mail = Mail;

function validarTipoEmail(tipo) {
    var tipoEmail;
    if (tipo === "MOVIL") {
        tipoEmail = EmailType.EMPRESA;
    }
    
    else if (tipo === "FIJO") {
        tipoEmail = EmailType.PERSONAL;
    }
    return tipoEmail;
}

exports.validarTipoEmail = validarTipoEmail;
