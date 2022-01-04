const none = "Rebeca"
const concatenacao = "Ola " + nome + "!"
const template = `
    Olá
    ${nome}!`

    console.log(concatenacao, template)

    //expressoes
    console.log(`1 + 1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase() //funçao up que pega parametro texto e faz upperCase
    console.log(`Ei... ${up("cuidado")}!`)