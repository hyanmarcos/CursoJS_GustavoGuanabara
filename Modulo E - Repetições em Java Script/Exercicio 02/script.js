function tabuada(){
    let num = document.getElementById('txtn') //variavel que armazena o número digitado
    let tab = document.getElementById('seltab') //variavel criada para mostrar os numeros no select

    //caso o usuario não digite nenhum valor, um erro será mostrado
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        //Início da tabuada
        let n = Number(num.value) //uma variavel que vai receber a variavel NUM do tipo Number
        let c = 1 //uma variavel para fazer a contagem
        tab.innerHTML = '' //linha criada para quando apertar o botão novamente, limpar o select
        
        //início da repetição
        while (c <= 10) { //enquanto o contador for menor que 10
            let item = document.createElement('option') //variavel criada para adicionar os valores no select
            item.text = `${n} x ${c} = ${n*c}` //multiplicação
            tab.appendChild(item) //adiciona a variavel ITEM no select TAB
            c++
        }
    }
    
}