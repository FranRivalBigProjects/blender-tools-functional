const res=document.getElementById("res");

function run(){
 let s=+samples.value,f=+frames.value;
 if(!s||!f){res.innerText="Enter values";return;}
 let time=(s*0.05)*f;
 res.innerText=`Estimated time: ${time.toFixed(2)} sec`;
}

