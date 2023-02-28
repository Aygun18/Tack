//Verilmis ededler siyahisindaki 3-e bolunen ededlerin ededi ortasini tapan alqoritm

var numbers=[3,7,6,18,24,22,36]
var bolunensayi=0
var sum=0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%3==0) {
      sum+=numbers[i]
      bolunensayi++
      
    }    
}
console.log(sum/bolunensayi)

