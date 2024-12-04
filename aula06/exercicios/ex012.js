//Condição Aninhada
var agr = new Date() //comando pra ver a hr ao vivo
var hr= agr.getHours()
console.log('são exatamente ${hr} horas')
if(hr <12){
    console.log('Bom dia')
} else if(hr <18){
    console.log('Boa Tarde')
} else {
    console.log('Boa noite')
    
}