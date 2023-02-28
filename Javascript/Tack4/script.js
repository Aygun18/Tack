// Verilmis adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm
var names=["Aytac","Dəniz","Fidan","Aylin","Jasmin","Asiman","Nuray"]
var count=0
for(var i=0; i<names.length; i++){
    if(names[i][0]=="A"){
        count++;
        
    }
}
console.log(count);