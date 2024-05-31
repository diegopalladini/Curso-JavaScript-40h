function gerarTabuada() {
    
    var numero = document.getElementById('caixaNumero')
    var caixa = document.getElementById('caixaTabuada')

    if (numero.value.length == 0) {
        alert('Preencha todos os campos.')
    } else {
        var n1 = Number(numero.value)
        var c = 1
        caixa.innerHTML = ''
        while (c <= 10) {
            
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            caixa.appendChild(item)
            c++
        }
    }
}