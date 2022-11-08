function Apple(origin){
    this.origin=origin;
    this.taste="Sweet";
    this.color="Red";
}
let fruit=new Apple("India");
document.getElementById("demo").innerHTML=fruit.taste;
alert(fruit.origin);
alert(fruit.taste);


function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  alert( new BigUser().name ); 

  function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi();