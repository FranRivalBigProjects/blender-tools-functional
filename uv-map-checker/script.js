const res=document.getElementById("res");

function run(){
 let u=+uvs.value;
 if(!u){res.innerText="Enter value";return;}
 res.innerText = u>100?"Too fragmented":"UV OK";
}

