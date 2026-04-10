const res=document.getElementById("res");

function run(){
 let m=+materials.value;
 if(!m){res.innerText="Enter value";return;}
 let reduce=Math.floor(m*0.3);
 res.innerText=`Reduce ~${reduce} materials`;
}

