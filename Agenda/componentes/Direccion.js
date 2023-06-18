"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(id, nombreCalle, numero, codigoPostal, poblacion, provincia, piso, letra) {
        this.id = id;
        this.nombreCalle = nombreCalle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
        this.piso = piso;
        this.letra = letra;
    }
    Direccion.prototype.getId = function () {
        return this.id;
    };
    Direccion.prototype.setId = function (id) {
        this.id = id;
    };
    Direccion.prototype.getNombreCalle = function () {
        return this.nombreCalle;
    };
    Direccion.prototype.setNombreCalle = function (nombreCalle) {
        this.nombreCalle = nombreCalle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Direccion.prototype.getCodigoPostal = function () {
        return this.codigoPostal;
    };
    Direccion.prototype.setCodigoPostal = function (codigoPostal) {
        this.codigoPostal = codigoPostal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.setPoblacion = function (poblacion) {
        this.poblacion = poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    Direccion.prototype.setProvincia = function (provincia) {
        this.provincia = provincia;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.setPiso = function (piso) {
        this.piso = piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
