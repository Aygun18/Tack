// Verilmis ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm
var numbers=[23,234,123,432,45,203,4321]
var sum=0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]>99) {
        sum+=numbers[i]
    }
    
}
console.log(sum)