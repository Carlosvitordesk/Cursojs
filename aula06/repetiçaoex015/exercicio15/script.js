function contar() {
  let ini = document.getElementById("txti")
  let fim = document.getElementById("txtf")
  let passo = document.getElementById("txtp")
  let res = document.getElementById("res")

  if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO], CONFIRA OS DADOS!!!')
    res.innerHTML = 'Impossivel Contar!'
  } else {
    res.innerHTML = 'Contando:'
    let i = number(ini.value)
    let f = number(fim.value)
    let p = number(passo.value)
    if(p<=0){
        window.alert('Passo inválido!')
    }
    if(i < f) {
        //Ordem crescente
    for(let c = i; c <= f; c+=p ) {

        res.innerHTML += '${c}'
    }
      } else{
        //ordem decrescente
        for(let c = i;  c >= f; c-=p) {

        }
      }
   }
 }