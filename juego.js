"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(nombre, descripcion, reglas, apuestaMinima, probabilidad, ganancias, nuevaApuesta, saldo, premio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.reglas = reglas;
        this.apuestaMinima = apuestaMinima;
        this.probabilidad = probabilidad;
        this.ganancias = ganancias;
        this.nuevaApuesta = nuevaApuesta;
        this.saldo = saldo;
        this.premio = premio;
    }
    //metodos set
    Juego.prototype.setNombre = function (nombre) {
    };
    Juego.prototype.setDescripcion = function () {
    };
    Juego.prototype.setReglas = function () {
    };
    Juego.prototype.setApuestaMinima = function (apuestaMinima) {
    };
    Juego.prototype.setProbabilidad = function () {
    };
    Juego.prototype.setGanancias = function () { };
    ;
    Juego.prototype.setNuevaApuesta = function (nuevaApuesta) { };
    ;
    Juego.prototype.setSaldo = function (saldo) {
    };
    //metodos get
    Juego.prototype.getNombre = function (nombre) {
    };
    Juego.prototype.getDescripcion = function () {
    };
    Juego.prototype.getNReglas = function () {
    };
    Juego.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    Juego.prototype.getProbabilidad = function () {
    };
    Juego.prototype.getNuevaApuesta = function () {
    };
    Juego.prototype.getPremio = function () { };
    //funciones
    Juego.prototype.probabilidadDeGanar = function () { };
    Juego.prototype.generarApuesta = function () {
    };
    Juego.prototype.jugar = function () { };
    Juego.prototype.getSaldo = function () {
    };
    Juego.prototype.getInfo = function () {
    };
    Juego.prototype.getGanancias = function () {
    };
    Juego.prototype.seleccionarJuego = function () {
    };
    return Juego;
}());
exports.Juego = Juego;
