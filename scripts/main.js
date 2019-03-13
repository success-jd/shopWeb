let pop=document.querySelectorAll(".active");
let newp=document.querySelector(".pop");
let newEmpty=document.querySelector(".empty");
let list=document.createElement("div");


// Too create the successfull added popup when clicked on
function createList(){
    list.classList.add("pop");
    if(list.textContent===""){
        list.appendChild(document.createTextNode("successfully added"));
    }
    newEmpty.appendChild(list); 
}

pop.forEach((item)=>{
    item.addEventListener('click',()=>{
    createList();
    setTimeout(()=>{
        list.parentNode.removeChild(list);
    },5000);    
}); 
});


