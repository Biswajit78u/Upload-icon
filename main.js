
let t = document.getElementById("div1_1st_child");
let t1=document.getElementById("arrow");
let t2=document.getElementById("div2_1st_child");
let label=document.getElementById('label');
let input=document.querySelector('input');
let img=document.querySelector('img');

t.addEventListener("click", function(event){
  t.style.marginTop = "190px";
 img.src=URL.createObjectURL(input.files[0]);
 
 t1.style.animation="o 2s linear infinite";
 t1.style.animationDelay="2.3s";
 t2.style.animation="u 13s linear";
 t2.style.animationDelay="6s";
 t2.style.marginTop="200px";
 t2.style.boxShadow="inset 2.2px 1.6px 3.2px #c4c8d2, inset -2.2px -1.2px 2.2px #e7eaef";
 
setTimeout(function() {
  t2.style.marginTop = "0px";
  t1.style.animationPlayState= 'paused';
  
  label.innerHTML="done";
}, 19000)

});
 

