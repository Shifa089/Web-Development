let bar = document.getElementById("bar");
let close = document.getElementById("close");
let navbar = document.getElementById("navbar");

if(bar){
    bar.addEventListener("click", () => {
        navbar.style.right = 0;
    })
}

if(close){
    close.addEventListener("click", ()=>{
        navbar.style.right = "-300px";
    })
}