function curry(f)
{
    return function(a){
        return function(b){
           return f(a,b);
        };
    };
}
function sum(a,b)
{
    return a+b;
}
let curriedSum = curry(sum);
alert(curriedSum (1)(2));


//SCOpe
{
    let mail="Dear Customer";
    alert(mail);
}
//alert(mail);  //not defined

{
    let name="Bhavani";
    alert(name);
}
{
    let name="Chandra";
    alert("Chandra");
}


for (let i = 0; i < 3; i++) {
    // the variable i is only visible inside this for
    alert(i); // 0, then 1, then 2
  }
//
function makeCounter(){
    let count=0;
    return function (){
      return count++;
    }
}
let counter=makeCounter();
alert(counter());
alert(counter());
while (counter<=5) {
    alert(counter()); 
}
