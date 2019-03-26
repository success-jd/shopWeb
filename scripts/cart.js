let bar=document.querySelectorAll(".bar");
let values=document.querySelectorAll(".value");
let add=document.querySelectorAll(".add");
let subtract=document.querySelectorAll(".subtract");
let pvalue=document.querySelectorAll(".pvalue");
let sumTotal=document.querySelector(".sumTotal");
let total=0;


// to get the total ammount of all items
function Ntotal(){
    pvalue=document.querySelectorAll(".pvalue");
    total=0;
    pvalue.forEach((value)=>{
        total =total + Number(value.innerHTML);

   })
   // to diplay the calculated total value 
   sumTotal.innerHTML=total+".00NGN";

}


// to delete the box 
function deleteParent(){
    this.parentNode.remove();
    Ntotal();
   
}


// to increase the value of the quantity
function increase(e){
        let item = e.target.parentNode.previousSibling;
        ++item.textContent;
}

// to decrease the value of the quantity
function decrease(e){
    let item = e.target.parentNode.previousSibling;
    
        if(item.textContent>1){
            --item.textContent;
           
        }
        else{
            item.textContent=0; 
                
        }
  
}

// to calculate the total price after quantity changes
function totalPrice(e){
    let item = e.target.parentNode.previousSibling;
    let price=e.target.parentNode.nextSibling.nextSibling.nextSibling.firstChild;
    let tprice=price.parentNode.nextSibling.nextSibling.firstChild;
    tprice.innerHTML=price.textContent*item.textContent +".00";
    Ntotal();
}


   
Ntotal();

// to delete the box on button click
bar.forEach((items)=>{
    items.addEventListener('click',deleteParent);
});

// to increase the value on button click
add.forEach((textValue)=>{
    textValue.addEventListener("click",increase);  
});

add.forEach((textValue)=>{
    textValue.addEventListener("click",totalPrice);  
});

// to decrease the value  on button click
subtract.forEach((textValue)=>{
    textValue.addEventListener("click",decrease);

})

subtract.forEach((textValue)=>{
    textValue.addEventListener("click",totalPrice);

})



