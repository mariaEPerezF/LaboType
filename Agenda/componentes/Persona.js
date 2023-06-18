"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {


    function Persona(nombre, apellidos, dni, edad, cumple, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.dni = dni;
        this.apellidos = apellidos;
        this.edad = edad;
        this.cumple = cumple;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }

    Persona.prototype.getNombre = function () {
        return this.nombre;
    };

    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };

    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };

    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };

    Persona.prototype.getEdad = function () {
        return this.edad;
    };

    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };

    Persona.prototype.getDni = function () {
        return this.dni;
    };

    Persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };

    Persona.prototype.getcumple = function () {
        return this.cumple;
    };

    Persona.prototype.setcumple = function (cumpleanos) {
        this.cumple = cumpleanos;
    };
    
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };

    Persona.prototype.setColorFavorito = function (colorFavorito) {
        this.colorFavorito = colorFavorito;
    };

    Persona.prototype.getSexo = function () {
        return this.sexo;
    };

    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };

    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };

    Persona.prototype.setDirecciones = function (direcciones) {
        this.direcciones = direcciones;
    };

    Persona.prototype.getMails = function () {
        return this.mails;
    };

    Persona.prototype.setMails = function (mails) {
        this.mails = mails;
    };

    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };

    Persona.prototype.setTelefonos = function (telefonos) {
        this.telefonos = telefonos;
    };

    Persona.prototype.getNotas = function () {
        return this.notas;
    };

    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };

    return Persona;
}());

exports.Persona = Persona;
