function contar() {
    
    var inicio = document.querySelector('input#inicio') // cria a variável buscando no HTML
    var fim = document.querySelector('input#fim') // cria a variável buscando no HTML
    var passo = document.querySelector('input#passo') // cria a variável buscando no HTML
    var res = document.querySelector('div#res') // cria a variável buscando no HTML

    // se o valor da variável início for 0, OU do fim for 0, OU do passo for 0, escreve "Impossível contar" no campo res
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('Impossível contar. Preencha todos os campos.')
    } else { // se os campos estiverem preenchidos
        res.innerHTML = ('Contando...<br>')
        let i = Number(inicio.value) // pega o valor NUMÉRICO da var inicio e joga pra var i
        let f = Number(fim.value) // pega o valor NUMÉRICO da var fim e joga pra var f
        let p = Number(passo.value) // pega o valor NUMÉRICO da var passo e joga pra var p

        if (p <= 0) {
            alert('Passo inválido. Considerando passo 1')
            p = 1
        }

        if (i < f) {
            // variável C (contador) recebe i(nicio), vai até o f(im); e incrementa ela mesma + p(asso)
            for (let c = i; c <= f; c += p) {
                res.innerHTML += (`${c}&#128073;`) // o += é pra aparecer o 'Contando...' ali em cima também
        }

        } else {
            // variação para a contagem REGRESSIVA
            for (let c = i; c >= f; c -=p) {
                res.innerHTML += (`${c}&#128073;`)    
            }
            
        }
        res.innerHTML += `\u{1F3C1}` // inclui a bandeirinha no fim

    }

}