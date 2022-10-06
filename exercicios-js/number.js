const peso1 = 1.0
const peso2 = Number('2.0') // Cast

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))    // Verifica se é do tipo Number
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
let media = total / (peso1 + peso2)

console.log("Média: " + media.toFixed(2))   // Fixando quant de casas decimais; Não mexe com a variável

console.log("Média: " + media.toString(2))   // toString pode converter para outras bases numéricas

media = Number.toString(media)

console.log(typeof media)