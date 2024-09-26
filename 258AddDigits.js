let  addDigits = function(num) {
    let a= String(num).split('').map(Number);
    let sum=0;
    for (let i = 0; i < a.length; i++) {
        sum=sum+ a[i];
    }
  let  b= String(sum).split('').map(Number);
   let sum1=0;
    for (let i = 0; i < b.length; i++) {
        sum1=sum1+ b[i];

    }
    return sum1;
};

console.log(addDigits(38));

// let a= String(38).split('').map(Number);
// let sum=0;
// for (let i = 0; i < a.length; i++) {
//
//     sum=sum+ a[i];