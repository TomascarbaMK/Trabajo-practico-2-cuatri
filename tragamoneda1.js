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
exports.TragamonedasClasico = void 0;
var juego_1 = require("./juego");
var readlineSync = require("readline-sync");
var TragamonedasClasico = /** @class */ (function (_super) {
    __extends(TragamonedasClasico, _super);
    function TragamonedasClasico(nombre, descripcion, reglas, apuestaMinima, saldo, probabilidad, ganancias, nuevaApuesta, premio, fruta1, fruta2, fruta3, seleccionDeJuego) {
        var _this = _super.call(this, nombre, descripcion, reglas, apuestaMinima, probabilidad, ganancias, nuevaApuesta, saldo, premio) || this;
        _this.fruta1 = fruta1;
        _this.fruta2 = fruta2;
        _this.fruta3 = fruta3;
        _this.seleccionDeJuego = seleccionDeJuego;
        var readlineSync = require("readline-sync");
        return _this;
    }
    TragamonedasClasico.prototype.salir = function () {
        var salir = readlineSync.question("\u00BFDesea abandonar el casino? Presione \"Y\" para salir \"N\" para volver al inicio \n");
        if (salir == "Y".toLowerCase()) {
            console.log("GRACIAS POR JUGAR!");
            process.exit();
        }
        else {
            console.clear();
            this.inicioJuego();
        }
    };
    TragamonedasClasico.prototype.getNombre = function () {
        return this.nombre;
    };
    TragamonedasClasico.prototype.getGanancias = function () {
        return this.ganancias;
    };
    TragamonedasClasico.prototype.setApuestaMinima = function (apuestaMinima) {
        this.apuestaMinima = apuestaMinima;
    };
    TragamonedasClasico.prototype.setSaldo = function (saldo) {
        this.saldo = saldo;
    };
    TragamonedasClasico.prototype.getSaldo = function () {
        return this.saldo;
    };
    TragamonedasClasico.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    ;
    TragamonedasClasico.prototype.setNuevaApuesta = function (nuevaApuesta) {
        this.nuevaApuesta = nuevaApuesta;
    };
    TragamonedasClasico.prototype.getNuevaApuesta = function () {
        return this.nuevaApuesta;
    };
    TragamonedasClasico.prototype.seleccionarJuego = function () {
        return ["Tragamoedas Clasico", "Tragamonedas Incremetal", "dados", ""];
    };
    TragamonedasClasico.prototype.getPremio = function () {
        return this.premio;
    };
    TragamonedasClasico.prototype.inicioJuego = function () {
        var inicioJuego = readlineSync.question("Presione \"Y\" para jugar \n");
        while (inicioJuego == "y".toLocaleLowerCase()) {
            this.seleccionarJuego();
            var elija = readlineSync.questionInt("PARA ELEGIR TRAGAMONEDAS CLASICO PRESIONE:   0  \n  PARA ELEGIR TRAGAMONEDAS INCREMENTAL:  1 \n PARA ELEGIR DADOS: 2  \n  PARA ELEGIR RULETA:3 \n");
            if (elija === 0) {
                console.log(this.descripcion);
                console.log(this.reglas);
                console.log(this.probabilidad);
                return this.jugar();
            }
            if (elija === 1) {
                console.log(this.descripcion);
                console.log(this.reglas);
                console.log(this.probabilidad);
                console.log(this.ganancias);
                return this.jugar();
            }
        }
    };
    TragamonedasClasico.prototype.cargarSaldo = function () {
        var cargarSaldo = readlineSync.question("Para cargar saldo presione la tecla \"Y \n Para salir presione la tecla \"N\" \n");
        if (cargarSaldo === "y".toLocaleLowerCase()) {
            console.log("El saldo ingresado debe ser mayor o igual a la apuesta minima: ".concat(this.apuestaMinima));
            do {
                this.saldo = readlineSync.questionInt("Igrese el saldo que desee \n");
                if (this.saldo < this.apuestaMinima) {
                    console.log("El saldo ingresado $ ".concat(this.saldo, " es menor a la apuesta minima: ").concat(this.apuestaMinima, " \n Por favor ingrese un monto que supere la apuesta minima: ").concat(this.apuestaMinima));
                }
                else {
                    this.inicioJuego();
                    this.jugar();
                }
            } while (this.saldo < this.apuestaMinima);
        }
        else if (cargarSaldo == "N".toLocaleLowerCase()) {
            this.salir();
        }
    };
    TragamonedasClasico.prototype.generarApuesta = function () {
        var apostar = readlineSync.question("Para ingresar una nueva apuesta presione la tecla \"Y\". \n Para seleccionar la apuesta minima de $ ".concat(this.apuestaMinima, ",  presione la tecla \"O\". \n Para salir presione la tecla \"n\" \n"));
        if (apostar === "y") {
            this.nuevaApuesta = readlineSync.questionInt("Por favor ingrese su nueva apuesta \n");
            do {
                if (this.nuevaApuesta <= this.apuestaMinima) {
                    console.log("Por favor verifique que la apuesta ingresada sea mayor a la apuesta minima $ ".concat(this.apuestaMinima, ", y la nueva apuesta ingresado debe ser menor o igual al saldo disponible. Su saldo disponible es de:$ ").concat(this.saldo, " \n"));
                    this.nuevaApuesta = readlineSync.questionInt("ingrese su apuesta \n");
                }
                else {
                    this.saldo -= this.nuevaApuesta;
                }
            } while (this.nuevaApuesta <= this.apuestaMinima && this.nuevaApuesta > this.saldo);
        }
        //CUANDO LA APUESTA ES MINIMA
        else if ((apostar == "o")) {
            if (this.saldo < this.apuestaMinima) {
                do {
                    console.log("Su saldo: S ".concat(this.saldo, " es insuficiente \n"));
                    var ingresarNuevoSaldo = readlineSync.question("Desea cargar mas saldo? \n Si es asi presione la tecla \"Y\", si no, presione la tecla \"N\" \n");
                    if (ingresarNuevoSaldo === "Y".toLocaleLowerCase()) {
                        this.cargarSaldo();
                    }
                    else {
                    }
                } while (this.saldo < this.apuestaMinima);
            }
            this.saldo -= this.apuestaMinima;
        }
        else if (apostar == "N".toLocaleLowerCase()) {
            this.salir();
        }
    };
    TragamonedasClasico.prototype.jugar = function () {
        ;
        do {
            this.generarApuesta();
            var a = this.fruta1[Math.floor(Math.random() * this.fruta1.length)];
            var b = this.fruta2[Math.floor(Math.random() * this.fruta2.length)];
            var c = this.fruta3[Math.floor(Math.random() * this.fruta3.length)];
            if (this.fruta1 === this.fruta2 && this.fruta1 === this.fruta3) {
                this.getPremio();
                console.log(" ".concat(a, ", ").concat(b, ",").concat(c));
                console.log("FELICIDADES HAS GANADO: ".concat(this.getPremio()));
                this.saldo = this.saldo + this.premio;
                console.log("SU SALDO ACTUAL ES:".concat(this.getSaldo(), "}"));
            }
            else { /*/
                if(this.nuevaApuesta<this.saldo){
            console.log(`tu saldo: ${this.saldo} es insuficiente para poder realizar una apuesta por favor recargue saldo para poder jugar`)
                
            }else{/*/
                console.log("".concat(a, ", ").concat(b, ",").concat(c));
                console.log("PERDISTE");
                console.log("TU SALDO ACTUAL ES ".concat(this.getSaldo()));
                if (this.saldo == 0) {
                    this.cargarSaldo();
                }
            }
        } while (this.saldo >= this.apuestaMinima);
    };
    TragamonedasClasico.prototype.getInfo = function () {
        return console.log("\n    \n--------------------------------------------------------------------------------------------------------------------------------------\n--                                   ".concat(this.getNombre(), " \n-- \n--                 VALOR DE APUESTA: ").concat(this.generarApuesta(), "                                       \n--                 GANANCIAS:").concat(this.getGanancias(), "\n--                 SALDO:").concat(this.getSaldo(), "\n--                 APUESTA MINIMA:").concat(this.getApuestaMinima(), " \n--\n    \n    "));
    };
    return TragamonedasClasico;
}(juego_1.Juego));
exports.TragamonedasClasico = TragamonedasClasico;
