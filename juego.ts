export abstract class Juego{
protected  nombre:string;
protected descripcion:string;
protected  reglas:string;
protected  apuestaMinima:number;
protected  probabilidad:string;
protected  ganancias:number;
protected nuevaApuesta:number;
protected saldo:number;
protected premio:number


public constructor(nombre:string, descripcion:string,reglas:string,apuestaMinima:number,probabilidad:string,ganancias:number,nuevaApuesta:number,saldo:number,premio:number) {

    this.nombre = nombre;
    this.descripcion = descripcion;
    this.reglas = reglas;
    this.apuestaMinima = apuestaMinima;
    this.probabilidad = probabilidad;
    this.ganancias = ganancias;
   this.nuevaApuesta = nuevaApuesta;
   this.saldo=saldo;
   this.premio=premio;
}


//metodos set

public setNombre(nombre:string):void{

}
public setDescripcion():void{
    
}
public setReglas():void{
    
}
public setApuestaMinima(apuestaMinima:number):void{

}
public setProbabilidad():void{
    
}
public setGanancias():void{};

public setNuevaApuesta(nuevaApuesta:number):void{};

public setSaldo(saldo:number):void{
}
//metodos get
public getNombre(nombre:string){

}
public getDescripcion() {

}
public getNReglas() {

}
public getApuestaMinima():number {
return this.apuestaMinima

}
public getProbabilidad() {

}
public getNuevaApuesta(){
}
public getPremio(){}
//funciones
public probabilidadDeGanar(){}
public generarApuesta(){
  }

public jugar(){}
public getSaldo(){
}
public getInfo(){
}
public getGanancias(){

}
public seleccionarJuego(){
}
}