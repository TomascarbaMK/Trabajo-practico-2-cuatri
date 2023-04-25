
import { exit, exitCode } from "process";
import { Juego } from "./juego";
import *as readlineSync from "readline-sync"
import { SelecciarJuego } from "./selecciondejuego";
export class TragamonedasClasico extends Juego {

   protected  fruta1:string[];
    protected  fruta2:string[];
    protected  fruta3:string[];
    private seleccionDeJuego:number[];
   
public constructor(nombre:string, descripcion:string, reglas:string, apuestaMinima:number, saldo:number, probabilidad:string, ganancias:number,nuevaApuesta:number, premio:number,fruta1:string[],fruta2:string[],fruta3:string[],seleccionDeJuego:number[]) {
    super(nombre, descripcion, reglas,apuestaMinima,probabilidad,ganancias,nuevaApuesta,saldo,premio);
this.fruta1=fruta1;
this.fruta2=fruta2;
this.fruta3=fruta3; 
this.seleccionDeJuego=seleccionDeJuego;
const readlineSync=require("readline-sync");

}





public salir(){
let salir= readlineSync.question(`¿Desea abandonar el casino? Presione "Y" para salir "N" para volver al inicio \n`)
if(salir=="Y".toLowerCase()){
     console.log(`GRACIAS POR JUGAR!`)
process.exit();
}else{
  console.clear();
  this.inicioJuego()

}
}
public getNombre():string {
    return this.nombre;
}

public getGanancias():number{
    return this.ganancias
}
public setApuestaMinima(apuestaMinima: number): void {
    this.apuestaMinima=apuestaMinima;
}
public setSaldo(saldo: number): void{
    this.saldo=saldo
}
public getSaldo():number {
    return this.saldo
}
public getApuestaMinima():number{
return this.apuestaMinima
};
public setNuevaApuesta(nuevaApuesta:number): void {
    this.nuevaApuesta=nuevaApuesta;
    
}
public getNuevaApuesta(){

return this.nuevaApuesta


}
public seleccionarJuego():string[] {
    return ["Tragamoedas Clasico","Tragamonedas Incremetal","dados",""]
}

public getPremio():number {
    return this.premio
}   

public inicioJuego(){
const inicioJuego=readlineSync.question(`Presione "Y" para jugar \n`)
    while(inicioJuego=="y".toLocaleLowerCase()){
        this.seleccionarJuego();
        let elija=readlineSync.questionInt(`PARA ELEGIR TRAGAMONEDAS CLASICO PRESIONE:   0  \n  PARA ELEGIR TRAGAMONEDAS INCREMENTAL:  1 \n PARA ELEGIR DADOS: 2  \n  PARA ELEGIR RULETA:3 \n`)
            if (elija===0){
                console.log(this.descripcion)
                console.log(this.reglas);
                console.log(this.probabilidad);
            return this.jugar()
            }if (elija===1){
                console.log(this.descripcion)
                console.log(this.reglas);
                console.log(this.probabilidad);
                console.log(this.ganancias)
            return this.jugar()
            }
            
    }
}





public cargarSaldo(){
    let cargarSaldo =readlineSync.question(`Para cargar saldo presione la tecla "Y \n Para salir presione la tecla "N" \n`);
    if (cargarSaldo==="y".toLocaleLowerCase()){
console.log(`El saldo ingresado debe ser mayor o igual a la apuesta minima: ${this.apuestaMinima}`);
do{
this.saldo=readlineSync.questionInt(`Ingrese el saldo que desee \n`)
if(this.saldo<this.apuestaMinima){
console.log(`El saldo ingresado $ ${this.saldo} es menor a la apuesta minima: ${this.apuestaMinima} \n Por favor ingrese un monto que supere la apuesta minima: ${this.apuestaMinima}`)
}else{ this.inicioJuego()
    this.jugar();
  
}
}while(this.saldo<this.apuestaMinima);

}else if(cargarSaldo=="N".toLocaleLowerCase()){
this.salir()
}
}


public generarApuesta(){
let apostar=readlineSync.question(`Para ingresar una nueva apuesta presione la tecla "Y". \n Para seleccionar la apuesta minima de $ ${this.apuestaMinima},  presione la tecla "O". \n Para salir presione la tecla "n" \n`)    
 if (apostar=== "y"){   
     this.nuevaApuesta =readlineSync.questionInt(`Por favor ingrese su nueva apuesta \n`)
   
   do{
    if(this.nuevaApuesta<=this.apuestaMinima ){
          console.log(`Por favor verifique que la apuesta ingresada sea mayor a la apuesta minima $ ${this.apuestaMinima}, y la nueva apuesta ingresado debe ser menor o igual al saldo disponible. Su saldo disponible es de:$ ${this.saldo} \n`)
           this.nuevaApuesta=readlineSync.questionInt(`ingrese su apuesta \n`)
         }else{ 
             this.saldo-=this.nuevaApuesta

}
}while(this.nuevaApuesta<=this.apuestaMinima && this.nuevaApuesta>this.saldo)  
}

//CUANDO LA APUESTA ES MINIMA
else if((apostar=="o")){
if(this.saldo<this.apuestaMinima){
 do{console.log(`Su saldo: S ${this.saldo} es insuficiente \n`)
let ingresarNuevoSaldo =readlineSync.question(`Desea cargar mas saldo? \n Si es asi presione la tecla "Y", si no, presione la tecla "N" \n`)
if (ingresarNuevoSaldo==="Y".toLocaleLowerCase()){
this.cargarSaldo();
}else{
   
}

   }while(this.saldo<this.apuestaMinima);
}this.saldo-=this.apuestaMinima
} else if(apostar=="N".toLocaleLowerCase()){
this.salir()
}
}

public jugar(){;
do{
   
    this.generarApuesta();
let a=this.fruta1[Math.floor(Math.random()*this.fruta1.length)];
let b=this.fruta2[Math.floor(Math.random()*this.fruta2.length)];
let c=this.fruta3[Math.floor(Math.random()*this.fruta3.length)]

if (this.fruta1===this.fruta2 && this.fruta1===this.fruta3){
    this.getPremio();
console.log(` ${a}, ${b},${c}`);
console.log(`FELICIDADES HAS GANADO: ${this.getPremio()}`)
  this.saldo=this.saldo + this.premio
console.log(`SU SALDO ACTUAL ES:${this.getSaldo()}}`)
}else{/*/
    if(this.nuevaApuesta<this.saldo){
console.log(`tu saldo: ${this.saldo} es insuficiente para poder realizar una apuesta por favor recargue saldo para poder jugar`)
    
}else{/*/
console.log(`${a}, ${b},${c}`)
console.log("PERDISTE")
console.log(`TU SALDO ACTUAL ES ${this.getSaldo()}`)
if(this.saldo==0){
this.cargarSaldo()
}
}}while (this.saldo>=this.apuestaMinima )
}






public getInfo(){
    return console.log(`
    
--------------------------------------------------------------------------------------------------------------------------------------
--                                   ${this.getNombre()} 
-- 
--                 VALOR DE APUESTA: ${this.generarApuesta()}                                       
--                 GANANCIAS:${this.getGanancias()}
--                 SALDO:${this.getSaldo()}
--                 APUESTA MINIMA:${this.getApuestaMinima()} 
--
    
    `)
}




}                                        