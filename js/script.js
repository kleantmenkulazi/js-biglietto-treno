console.log('Js collegato');










/* 1. Chiedo i Km all'utente */
const km = prompt('Quanti km devi percorrere ?')
console.log('km', km, typeof km)
const kmInNumber = parseInt(km)
console.log('kmInNumber', kmInNumber, typeof kmInNumber)

/* 2. Chiedo gli anni all'utente */
const age = prompt('Quanti anni hai ?')
console.log('age', age, typeof age)
const ageInNumber = parseInt(age)
console.log('ageInNumber', ageInNumber, typeof ageInNumber)

if (ageInNumber < 18) {
    console.log('Minorenne')

    const price = kmInNumber * 0.21;
    console.log('price', price, typeof price);

    const discount = (price / 100) * 20;
    console.log('discount', discount, typeof discount)
    const finalPrice = price - discount;

    alert('[Ridotto minorenne] Il prezzo del biglietto è €' + finalPrice)

}
else if (ageInNumber > 65) {
    console.log('Over 65')

    const price = kmInNumber * 0.21;
    console.log('price', price, typeof price);

    const discount = (price / 100) * 40;
    console.log('discount', discount, typeof discount)
    const finalPrice = price - discount;

    alert('[Ridotto over 65] Il prezzo del biglietto è €' + finalPrice)
}
else {
    console.log('Paga Tutto')

    const price = kmInNumber * 0.21;
    console.log('price', price, typeof price);

    alert('Il prezzo del biglietto è €' + price)
}