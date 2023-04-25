import * as readlineSync from "readline-sync";
import { TragamonedasClasico } from "./tragamoneda1";
import { TragamonedasIncremental } from "./tragamoneda2";




const nombreTragamonedasClasico:string="TRAGAMONEDAS CLASICO";
const descripcionTragamonedasClasico= "tragamonedas clasico genial";
const reglasTragamonedasClasico="juga bien";
const apuestaMinimaTragammonedasClasico=50;
const probabilidadTragamonedasClasico=`La probilida de conseguir  una conbinacion completa es de 0,06`;
const gananciasTragamonedasClasico=0;
const nuevaApuestaTragamonedasClasico=0;
const  fruta1=["manzana","banana","pera","uva","sandia"];
const fruta2=["manzana","banana","pera","uva","sandia"];
const  fruta3=["manzana","banana","pera","uva","sandia"];
const saldoTragamonedasClasico=0;
const premioTragamonedasClasico=1000;
const elegirJuegoTragamonedasClasico=[0,1,2,3]

const tragamonedas1:TragamonedasClasico=new TragamonedasClasico (nombreTragamonedasClasico,descripcionTragamonedasClasico,reglasTragamonedasClasico,apuestaMinimaTragammonedasClasico,saldoTragamonedasClasico,probabilidadTragamonedasClasico, gananciasTragamonedasClasico,nuevaApuestaTragamonedasClasico,premioTragamonedasClasico,fruta1,fruta2,fruta3,elegirJuegoTragamonedasClasico)


console.log(tragamonedas1.cargarSaldo());
console.log(tragamonedas1.inicioJuego());
console.log(tragamonedas1.generarApuesta());
console.log(tragamonedas1.jugar())
const nombreTragamonedasincremental:string="TRAGAMONEDAS INCREMENTAL";
const descripcionTragamonedasincremental= "tragamonedas INCREMENTAL genial";
const reglasTragamonedasincremental="juga bien";
const apuestaMinimaTragammonedasincremental=50;
const probabilidadTragamonedasincremental=`La probilida de conseguir  una conbinacion completa es de 0,06`;
let gananciasTragamonedasincremental=0;
const nuevaApuestaTragamonedasincremental=0;
const  linea1=["manzana","banana","pera","uva","sandia"];
const linea2=["manzana","banana","pera","uva","sandia"];
const  linea3=["manzana","banana","pera","uva","sandia"];
const saldoTragamonedasincremental=0;
const premioTragamonedasincremental=0;
const elegirJuegoTragamonedasincremental=[0,1,2,3]
const tragamonedas2:TragamonedasIncremental=new TragamonedasIncremental(nombreTragamonedasincremental,descripcionTragamonedasincremental,reglasTragamonedasincremental,apuestaMinimaTragammonedasincremental,probabilidadTragamonedasincremental,saldoTragamonedasincremental, gananciasTragamonedasincremental,nuevaApuestaTragamonedasincremental,premioTragamonedasincremental,linea1,linea2,linea3,elegirJuegoTragamonedasincremental)
console.log(tragamonedas2.cargarSaldo());
console.log(tragamonedas2.inicioJuego());
console.log(tragamonedas2.generarApuesta());
console.log(tragamonedas2.jugar())


