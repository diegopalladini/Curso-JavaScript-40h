function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) { //criei uma variável c(ontador), que é um n(úmero) e; enquanto ele for maior que 1; ele executa e subtrai 1.
        fat *= c // fatorial multiplica por c e agrega/recebe mais esse número
    }
    return fat
}

console.log(fatorial(5))