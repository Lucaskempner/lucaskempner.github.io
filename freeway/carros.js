//carro
let xCarro = [600,600,600,600,600,600];
let yCarro = [40, 98, 150, 210, 260, 315];
let velocidadeCarro = [7, 5, 8, 9, 6, 10];
let comprimentoCarro = [50,50,80,50,50,80];
let altura = 40;


 function mostraCarro(){
 for(let i=0; i< imagemDoCarro.length; i++){
 image(imagemDoCarro[i],          xCarro[i],yCarro[i],comprimentoCarro[i],altura);
}
 
}


  function movimentaCarro(){
   for(let i=0; i< imagemDoCarro.length; i++){
    xCarro[i] -= velocidadeCarro[i];

  if(xCarro[i] < -50){
     xCarro[i] = 600;
  }
 }        
}

