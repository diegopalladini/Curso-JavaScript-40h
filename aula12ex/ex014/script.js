function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#fffdff'
        // bom dia
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#ffad0d'
        // boa tarde
    } else {
        img.src = 'imagens/noite1.png'
        document.body.style.backgroundColor = '#1d5fb3'
        // boa noite
    }
}

