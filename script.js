let width = document.getElementById("width");
let height = document.getElementById("height");
let radius = document.getElementById("radius");
let color = document.getElementById("color");
let reset = document.getElementById("reset");
let div1 = document.getElementById("div1");
let change = document.getElementById("change");

change.addEventListener("click",()=> {
    div1.style.width= width.value;
    div1.style.height= height.value;
    div1.style.borderRadius= radius.value;
    div1.style.backgroundColor= color.value;
});
reset.addEventListener("click", ()=>{
    div1.style.cssText="width: 100% ; height: 50vh ; border-radius:5px ; background-color: rgb(185, 185, 237);"
});