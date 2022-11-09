let fruits=[];
fruits.push('Apple','banana');
console.log(fruits);
let arr=["I","study","js","and","react"];
let newarr=arr.splice(3,1);
console.log(newarr);
let array=["I","like","to","learn","react"];
let removed=array.splice(0,3);
console.log(removed);
//
let arr1=['Today',"is",'my','birthday'];
arr1.splice(4,0,'so','I am','happy');
console.log(arr1);

//inserstion
let student=["Ashwini","Bala","Dharanai"];
student.splice(2,0,"Cathrine","Cathina");//Ashwini,Bala,Cathrine,Dharani
alert(student);
console.log(student);
//negative index
alert(student.splice(-1,0,"Cobra"));
alert(student);
//Slice
let alpha=['a','b','c','d'];
alert(alpha.slice(1,3));

//concat
let join=["I","Bhavani"];
let joins=join.concat(["Priya"]);
alert(joins);
alert( join.concat([3, 4], [5, 6]) );

//concat in arrays
let arrays = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};
alert( arr.concat(arrayLike) );

let b=["a","b"];
let blike={
    1:"one",
    2:"two",
    [Symbol.isConcatSpreadable] : true,
    length:3,
};
let newb=b.concat(blike);
alert(newb);

//forEach
["BHava", "kavi", "asifa"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });