//função que simula o funcionamento de um carro
var statusCarro = "desligado"; //a var recebe o valor 'desligado'
var aceleracao = 0;
var rotacaoDoVolante = 0;

function ligarDesligar(){
  if (statusCarro === "desligado") {
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado";
  }
  return statusCarro;
}

function acelerar(incremento){
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s"
}

function frear(decremento){
    aceleracao = aceleracao - decremento;

    return "Desacelerando para " + aceleracao + "m/s"
}

function girarVolante(anguloRotacao){
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + " graus";
}
console.log(ligarDesligar());
console.log(acelerar(15));
console.log(frear(13));
console.log("A rotação do volante foi de " + girarVolante(35));


