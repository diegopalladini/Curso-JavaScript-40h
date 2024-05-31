function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anodigitado = document.getElementById('inascto')
    var res = document.querySelector('div#res')

    if (anodigitado.value.length == 0 || anodigitado.value > ano) {
        window.alert('Dados inválidos. Tente novamente.')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - anodigitado.value

        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/bebemenino1.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/menino1.png')
            } else if (idade >=21 && idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adulto1.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso1.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/bebemenina1.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/menina1.png')
            } else if (idade >=21 && idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adulta1.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosa1.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}