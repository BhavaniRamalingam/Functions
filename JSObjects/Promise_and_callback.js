
  //Async function
  async function f(){
    let promise=new Promise((resolve,reject) => {
        setTimeout(()=>resolve("Finished",2000))
    });
    let result=await promise;
    alert(result);
  }
  f(); 

  //Event loop
  let start=Date.now();
  let i=0;
  console.log(start);
  function count(){
    for(let j=0;j<1e9;j++){
      i++;
    }
    console.log("Done in "+(Date.now()-start)+" ms");
  }
  count();
  
  let s=Date.now();
  let l=0;
  for (let m=0;m<1e9;m++){
    l++;
  }
  console.log("Total time taken to load : "+(Date.now()-s));
// Progress Indication
let a=0;
function count2(){
for(let b=0;b<1e6;b++){
  b++;
 progress.innerHTML=a;
}while(i%1e3!=0);
if(i<1e7){
  setTimeout(count2);
}
}
count2();

