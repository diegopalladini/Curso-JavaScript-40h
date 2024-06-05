let num = [5, 8, 2, 9, 3]

//num[5] = 6 // coloca o 6 na posição 5 do array
num.push(6) // coloca o 6 na última posição automaticamente do array
num.length
num.push(6, 9, 8, 4, 2, 1)

console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Temos um total de ${num.length} elementos nesse array`)
console.log(`Os elementos dispostos em ordem ficam assim: ${num.sort()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)

console.log(`O valor 8 está na posição ${num.indexOf(8)}`)