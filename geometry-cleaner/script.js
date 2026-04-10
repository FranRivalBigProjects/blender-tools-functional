const res=document.getElementById("res");

function run(){
 let v=+verts.value;
 if(!v){res.innerText="Enter value";return;}
 let cleanup=Math.floor(v*0.1);
 res.innerText=`Removable vertices: ${cleanup}`;
}

