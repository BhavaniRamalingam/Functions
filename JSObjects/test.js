let obj={
    firstname:"bhavani",
    lastname:"ramalingam",
    address:{
        street:"VV street",
        doorno:"60"
    }
};
console.log(obj.lastname);
let copy=obj;
console.log(copy.address);
let clone={};
for(let key in obj){
    clone[key]=obj[key];
};
console.log(clone);
obj.firstname="Bhavani.R";
console.log(obj);
console.log(obj.firstname.length);
let array=[1,2,3,4,5];
array.remove(4);
array.splice();
