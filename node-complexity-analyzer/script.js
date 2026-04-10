const res=document.getElementById("res");

function run(){
 let n=+nodes.value;
 if(!n){res.innerText="Enter value";return;}
 res.innerText = n>50?"Complex node tree":"Simple node tree";
}

