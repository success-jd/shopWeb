let bar=document.querySelectorAll(".bar");
let values=document.querySelectorAll(".value");
let add=document.querySelectorAll(".add");
let subtract=document.querySelectorAll(".subtract");

function deleteParent(){
    this.parentNode.remove();
}



function increase(e){
        let item = e.target.parentNode.previousSibling;
        ++item.textContent;
    
}

function decrease(e){
    let item = e.target.parentNode.previousSibling;
        if(item.textContent>1){
            --item.textContent;
        }
        else{
            item.textContent=0; 
                
        }
  
}


bar.forEach((items)=>{
    items.addEventListener('click',deleteParent);
});


add.forEach((textValue)=>{
    textValue.addEventListener("click",increase);  
});

subtract.forEach((textValue)=>{
    textValue.addEventListener("click",decrease);

})


