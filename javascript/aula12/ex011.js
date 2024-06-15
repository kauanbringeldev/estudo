var idade = 65
console.log(`Você tem ${idade} anos...`)
if(idade < 16) {
    console.log(' infelizmente você é menor de idade e não pode votar')
}else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto e opicional')
}else{
    console.log('Voto obrigatorio')

}