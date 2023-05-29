function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    //Condicional para verificar se o local que o usuário digitar vai estar vazio ou se o ano é maior que o ano atual
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else if (fano.value.length <= 3 || fano.value.length > 4)  {
        alert('[ERRO] Verifique os dados e tente novamente!')

    } else { //Início da verificação de dados inseridos pelo usuário
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero  = ''
        var img = document.createElement('img')

        //Condicional para verificar qual sexo foi escolhido
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', '/imagens/baby-male.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '/imagens/young-male.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '/imagens/adult-male.png')
            } else {
                //Idoso
                img.setAttribute('src', '/imagens/elder-male.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', '/imagens/baby-female.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '/imagens/young-female.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '/imagens/adult-female.png')
            } else {
                //Idoso
                img.setAttribute('src', '/imagens/elder-female.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}