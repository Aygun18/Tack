//Verilmis ishciler siyahisinda (ischiler obyekt seklindedir ve firstName,lastName,salary deyerleri var) 
//maashi 500-den yuxari olan ishcileri ekrana cap eden alqoritm. 

 const worker1= {fistName: "Nadir", lastName: "Aliyev", salary:2400}
 const worker2= {fistName: "Anar", lastName: "Salahov", salary:1500}
 const worker3= {fistName: "Nazrin", lastName: "Ahmedli", salary:400}
 const worker4= {fistName: "Zahra", lastName: "Muradova", salary:300}
 const worker5= {fistName: "Resid", lastName: "Tahirov", salary:1000}

 const worker6={...worker1, ...worker2, ...worker3, ...worker4, ...worker5}

for (i=500;i>2400;i++){
    if(worker6.salary>500){
    console.log(worker6.salary)
}
}
console.log(worker6.fistName)
console.log(worker6.lastName)
