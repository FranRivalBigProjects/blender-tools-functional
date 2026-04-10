const res=document.getElementById("res");

function run(){
 let l=+lights.value,p=+power.value;
 if(!l||!p){res.innerText="Enter values";return;}
 let total=l*p;
 res.innerText=`Total light power: ${total}`;
}

