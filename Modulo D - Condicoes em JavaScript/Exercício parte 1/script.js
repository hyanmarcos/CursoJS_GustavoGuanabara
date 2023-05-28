function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = (`Agora são ${hora} horas`)

    if (hora >= 19 && hora <= 24){
        //BOA NOITE
        img.src = "imagens/noite.png"
        document.body.style.background = '#515154'
    } else if (hora <= 18 && hora >= 12) {
        //BOA TARDE
        img.src = "imagens/tarde.png"
        document.body.style.background = '#b9846f'
    } else {
        //BOM DIA
        img.src = "imagens/manha.png"
        document.body.style.background = '#e2cd9f'
    }
}