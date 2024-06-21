let scrollContainer=document.querySelector(".gallery");
let backbtn=document.getElementById("back");
let nextbn=document.getElementById("for");


nextbn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft +=900;
});
backbtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft-=900;
});
// for Doctor
let scrollContaine=document.querySelector(".galery");
let backbt=document.getElementById("bac");
let nextb=document.getElementById("forw");


nextb.addEventListener("click", ()=>{
    scrollContaine.scrollLeft +=900;
});
backbt.addEventListener("click",()=>{
    scrollContaine.scrollLeft-=900;
});