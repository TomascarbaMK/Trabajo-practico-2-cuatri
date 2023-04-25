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
exports.TragamonedasIncremental = void 0;
var tragamoneda1_1 = require("./tragamoneda1");
var readlineSync = require("readline-sync");
var TragamonedasIncremental = /** @class */ (function (_super) {
    __extends(TragamonedasIncremental, _super);
    function TragamonedasIncremental(nombre, descripcion, reglas, apuestaMinima, ganancias, saldo, probabilidad, nuevaApuesta, premio, fruta1, fruta2, fruta3, seleccionDeJuego) {
        return _super.call(this, nombre, descripcion, reglas, apuestaMinima, probabilidad, ganancias, nuevaApuesta, saldo, premio, fruta1, fruta2, fruta3, seleccionDeJuego) || this;
    }
    TragamonedasIncremental.prototype.generarApuesta = function () {
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
            this.ganancias + this.apuestaMinima;
        }
        else if (apostar == "N".toLocaleLowerCase()) {
            this.salir();
        }
    };
    TragamonedasIncremental.prototype.jugar = function () {
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
                console.log("TU SALDO ACTUAL ES ".concat(this.getSaldo(), ",").concat(this.getGanancias()));
                this.ganancias += this.apuestaMinima + this.nuevaApuesta;
                console.log("pozo acumulado al momento ");
                if (this.saldo == 0) {
                    this.cargarSaldo();
                }
            }
        } while (this.saldo >= this.apuestaMinima);
    };
    return TragamonedasIncremental;
}(tragamoneda1_1.TragamonedasClasico));
exports.TragamonedasIncremental = TragamonedasIncremental;
