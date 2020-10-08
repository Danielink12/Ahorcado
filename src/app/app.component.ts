import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  palabra='AGUACATE';
  palabraOculta='';
  intentos=0;
  
  gano=false;
  perdio=false;
  
  palabrasArrR=['ORACULO','PARAGUAS','BISONTE'];
  palabraSeleccionadaR=this.palabrasArrR[Math.floor(Math.random()*this.palabrasArrR.length)];
  

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(){
    this.palabraOculta ='_ '.repeat(this.palabraSeleccionadaR.length);
  }

  comprobar(letra){

    this.existeLetra(letra);
    
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for(let i=0;i<this.palabraSeleccionadaR.length;i++){
      if(this.palabraSeleccionadaR[i]===letra){
        palabraOcultaArr[i]=letra;
      }
    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();

    //console.log(palabraOcultaArr);
    
    //console.log('Letra: '+letra);
  }

  verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
   
    if(palabraEvaluar===this.palabraSeleccionadaR){
      this.gano=true;
      console.log('Usuario Gano');
    }
   
    if(this.intentos>=9){
      this.perdio=true;
      console.log('Usuario Perdio');
    }
   
    // console.log(palabraEvaluar);
  }

  existeLetra(letra){
    if(this.palabraSeleccionadaR.indexOf(letra)>=0){
      //console.log('Letra Existe '+letra)
    }else{
     // console.log('Letra NO Existe '+letra)
      this.intentos++;
    }
  }

  title = 'ahorcado';
}
