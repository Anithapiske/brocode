let obj = {
  a:this,
  func:() =>{
    console.log(this);
  },
  ff : function(){
    console.log(this);
  }
}

//console.log(obj.a);
//console.log(obj.func);
//console.log(obj.func());
//obj.func();
//obj.ff();


function aa(){
  document.getElementById("p").innerHTML = this;
}

//document.getElementById("ee").addEventListener("click",aa);

let a = ()=>{
 document.getElementById("p").innerHTML += this;
} 
//a();
document.getElementById("ee").addEventListener("click",a); 

const arr = [1,2,3,4];
let[a1,,a2] = arr;
console.log(a1);
console.log(arr);