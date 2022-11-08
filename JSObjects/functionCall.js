let person={
    fullname:function(){
        return this.firstname+" "+this.lastname;
    }
};
let person1={
    firstname:"bhavani",
    lastname:"priya"
};
let person2={
    firstname:"chandra",
    lastname:"kumari"
};
document.getElementById("demo").innerHTML=person.fullname.call(person2);


//Call function with arguments
const detail = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  } 
  const detail1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  document.getElementById("demo1").innerHTML=detail.fullName.call(detail1, "Oslo", "Norway");