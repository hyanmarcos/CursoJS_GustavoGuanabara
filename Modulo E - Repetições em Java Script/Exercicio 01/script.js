function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passos = document.getElementById('txtpassos')
    
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {

        res.innerHTML = 'Contando: '
        //é declarado outras variáveis recebendo o tipo NÚMERO os valores de INICIO, FIM e PASSOS
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        //faz verificação caso o valor de PASSO é 0
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        //verifica se o INICIO é menor que o FIM para fazer a contagem
        if (i < f){

            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
        //faz a contagem caso o INICIO seja menor que o FIM, porém em ordem decrescente
            for ( let c = i; c >= f; c-= p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        //emoji da bandeirinha no final
        res.innerHTML += `\u{1F3C1}`
    }
}