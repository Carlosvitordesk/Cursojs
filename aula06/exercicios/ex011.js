//Condição Aninhada
var idade = 87
console.log('Você tem:' + idade) 
if(idade >=16 && idade < 18 || idade > 65 ){
        console.log('voto Opcional')
}
 else if(idade < 16){
            console.log('Não Vota')
    } else{
        console.log('Voto Obrigatório')
    }

