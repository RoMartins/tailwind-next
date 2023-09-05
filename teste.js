const num1 = 2
const num2 = 6
let somaImpares = 0

if (num1 > num2) {
  console.log(num1)
} else {
  for (let i = num1; i < num2; i++) {
    if (i % 2 !== 0) {
      console.log(i)
      somaImpares += i
    }
  }
}

console.log(somaImpares)
