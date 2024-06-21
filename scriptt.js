
// let menuList=document.getElementById("menuList");
// menuList.style.maxHeight="0px";
// function toggleMenu(){


// if(menuList.style.maxHeight="0px"){
//     menuList.style.maxHeight="300px";
// }
// else{
//     menuList.style.maxHeight="0px";
// }
// }
const ct=document.querySelectorAll('.count')
const speed=97
ct.forEach((counter) => {
function upData(){
    const target=Number(counter.getAttribute('data-target'))
    const count=Number(counter.innerText)
    const inc = target/speed
    if(count<target){
        counter.innerText=Math.floor(inc+count)
        setTimeout(upData,1)
    }else{
       counter.innerText=target
    }
}
upData()
})
