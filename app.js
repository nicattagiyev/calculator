var btn=document.querySelectorAll(".btn"),
screen1=document.getElementById("screen"),
clear=document.getElementById("clear"),
beraber=document.getElementById("beraber"),
remove=document.getElementById("remove")

var sonuc=" "
screen1.textContent=sonuc
btn.forEach(element => {
 element.addEventListener("click",show);

 function show(){
    screen1.textContent +=this.textContent
 
 }
});
beraber.addEventListener("click",()=>{
screen1.textContent=eval(screen1.textContent)
})
clear.addEventListener("click",()=>{
    screen1.textContent=""
})
remove.addEventListener('click',()=>{
    screen1.textContent=""
})