const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
 alert( person.fullName.apply(person1, ["Oslo", "Norway"]));

 document.getElementById("demo").innerHTML=Math.max.apply(null,[1,2,3]);