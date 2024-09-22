// persona1
let persona1Name = "Maria Delos Santos Las Marias";
let persona1Age = 25;
let persona1Address = "Upper Session Road, Baguio City, Benguet";

// persona2
let persona2Name= "Juan Gamoso Dela Cruz";
let persona2Age= 28;
let persona2Address = "San Nicolas, Candon City, Ilocos Sur";

// reArrange persona1 and persona2
let sumvar = persona1Name.length + persona1Address.length + persona2Name.length + persona2Address.length + persona1Age + persona2Age;
let ages = persona1Age + persona2Age;
let sub = ages - persona1Name.length;
let mul = persona2Name.length * sub;
let p1p2 = persona1Address.length ** persona2Address.length;

// console
console.log("Name: " + persona1Name + ", " + "Age: " + persona1Age + ", " + persona1Address);
console.log("Name: " + persona2Name + ", " + "Age: " + persona2Age + ", " + persona2Address);
console.log(sumvar);
console.log(ages);
console.log(sub);
console.log(mul);
console.log(p1p2);