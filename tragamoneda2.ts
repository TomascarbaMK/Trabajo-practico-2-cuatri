 import { TragamonedasClasico } from "./tragamoneda1";
 import *as readlineSync from "readline-sync"

export class TragamonedasIncremental extends TragamonedasClasico{
    
    
    public constructor(nombre:string, descripcion:string, reglas:string, apuestaMinima:number,ganancias:string, saldo:number, probabilidad:number, nuevaApuesta:number, premio:number,fruta1:string[],fruta2:string[],fruta3:string[],seleccionDeJuego:number[]) {
        super(nombre, descripcion, reglas,apuestaMinima,probabilidad,ganancias,nuevaApuesta,saldo,premio,fruta1,fruta2,fruta3,seleccionDeJuego);
    

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
        this.ganancias+this.apuestaMinima
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
        console.log(`TU SALDO ACTUAL ES ${this.getSaldo()},${this.getGanancias()}`)
        this.ganancias+=this.apuestaMinima + this.nuevaApuesta
        console.log(`pozo acumulado al momento `)
        if(this.saldo==0){
        this.cargarSaldo()
        }
        }}while (this.saldo>=this.apuestaMinima )
        }


    
}

