const res=document.getElementById("res");

function run(){
 let p=+poly.value;
 if(!p){res.innerText="Enter value";return;}
 let status=p>500000?"High poly":"Optimized";
 res.innerText=`Polycount: ${p} → ${status}`;
}

