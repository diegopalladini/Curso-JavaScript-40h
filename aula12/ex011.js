var idade = 14

console.log(`Você tem ${idade} anos. `)

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Vota se quiser')
} else {
    console.log('É obrigado a votar')
}