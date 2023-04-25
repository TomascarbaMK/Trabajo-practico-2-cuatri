import { TragamonedasIncremental } from "./tragamoneda2";

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
const elegirJuegoTragamonedasClasico=[0,1,2,3]
const tragamonedas2:TragamonedasIncremental=new TragamonedasIncremental(nombreTragamonedasincremental,descripcionTragamonedasincremental,reglasTragamonedasincremental,apuestaMinimaTragammonedasincremental,probabilidadTragamonedasincremental,saldoTragamonedasincremental, gananciasTragamonedasincremental,nuevaApuestaTragamonedasincremental,premioTragamonedasincremental,linea1,linea2,linea3,elegirJuegoTragamonedasClasico)
console.log(tragamonedas2.cargarSaldo());
console.log(tragamonedas2.inicioJuego());
console.log(tragamonedas2.generarApuesta());
console.log(tragamonedas2.jugar())
console.log(tragamonedas2.verpozo())

