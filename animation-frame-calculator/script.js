const res=document.getElementById("res");

function run(){
 let sec=+seconds.value,f=+fps.value;
 if(!sec||!f){res.innerText="Enter values";return;}
 let frames=sec*f;
 res.innerText=`Total frames: ${frames}`;
}

