//código para encontrar o fatorial de 10(!10)
let num1 = 10; // declarei a var 'num1'

for(index = num1; index >= 1; index -= 1){ 
    num1 *= index;
// aqui o index começa em 10, e enquanto for menor ou igual a 1, será subtraído -1, e em seguida o index é multiplicado pelo valor da var 'num1'
}
console.log(num1);
//resultador: 36288000

//código para inverter a ordem da string
let word = 'tryber';
let invertido = "" // essa var foi criada para receber um novo valor

for (index = word.length - 1; index >=0; index -=1){ //o index vai percorrer 'word' e retirar uma posição, e enquanto for >= 0 vai retirar mais um
    invertido += word[index]; //aqui 'invertido' está recebendo o valor retirado de 'word', e como -1 depois do .length vai retirando do final da var, por isso o resultado é a string invertida
}
console.log(invertido);
//resultado: rebyrt

//código para retornar o maior e o menor número de um array
const array = [25, 12, 1, 24, 174, 13];
let menor = 0;
let maior = 0;

for(let index = 1; index < array.length; index +=1){
    if(array[index] > array[maior]){
        maior = index;
    } else if (array[index] < array[menor]){
        menor = index;
    }
}
console.log("O maior número do array é: " + array[maior]);
console.log("O menor número do array é: " + array[menor]);
