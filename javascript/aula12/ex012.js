var agora = new Date()
var hora = agora.getHours()
console.log(`Aora são exatamente ${hora} Horas...`)
if(hora < 12) {
    console.log('Buenos dias')
}else if (hora <= 18){
    console.log('Buenas tardes')
}else {
    console.log('buenas notches') 

}
