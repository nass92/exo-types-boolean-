let isRainy = true
let temperature = 15
let clothes = ""
let accessories = ""

if (isRainy) {
  accessories += 'an umbrella. ' // concatenation de string
} else {
  accessories += 'a sunglasses or a cap.'
}

if (temperature < 15) {
  clothes += 'a t-shirt' + " " + 'a sweater' + " " + ' a coat, '
} else if (temperature >= 15 && temperature <= 20) {
  clothes = 'a t-shirt' + " " + 'a sweater'
} else {
  clothes += 't-shirt, '
}
console.log(`I will recomand you to wear ${clothes}, and to have with you ${accessories}`)