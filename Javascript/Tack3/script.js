// Verilmis ededler siyahisindaki en boyuk eded ve en kicik ededin ededi ortasini tapan alqoritm

var numbers=[34,12,57,83,98,35,65]
var min=numbers[0]
var max=numbers[0]
var ortalama=0
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]>max){
        max=numbers[i]
    }
    if(numbers[i]<min){
        min=numbers[i]
    }
}
ortalama=(max+min)/2
console.log(ortalama)