let obj={
    firstname:"bhavani",
    lastname:"ramalingam",
    address:{
        street:"VV street",
        doorno:"60"
    }
};
let accesories=["Car","Bike","Mobile","watch"]
console.log(obj.lastname);
// indexOf
console.log(accesories.indexOf("Bike"));
//find and findIndex/findLastIndex
let school=[
    {rno:1,name:"Abi",rank:3},
    {rno:2,name:"Raj",rank:2},
    {rno:3,name:"Yuvi",rank:1},
];
let topper=school.find(item=>item.rank==1);
console.log(topper.name);

//filter 
let lower=school.filter(item=>item.rank>1);
console.log(lower.length);
//Map

let words=['Kavitha',"Asifa","Sindhu","Visali"];
let count=words.map(word=>word.length>5);
console.log(count);
//sort
console.log(words.sort());
//reverse
console.log(words.reverse());
//split
let names="Vaishali, Ramu, Avinash";
let sname=console.log(names.split(', '));
console.log(sname);
let boy="Guru";
console.log(boy.split(''));
// joins-used in array
console.log(words.join(';'));
//reduce 
let a=[1,2,3,4,5];
console.log(a.reduce((sum,current)=>sum+current,0));




