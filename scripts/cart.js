let bar=document.querySelectorAll(".bar");
let values=document.querySelectorAll(".value");
let add=document.querySelectorAll(".add");
let subtract=document.querySelectorAll(".subtract");
let pvalue=document.querySelectorAll(".pvalue");
let sumTotal=document.querySelector(".sumTotal");
let total=0;

function Ntotal(){
    pvalue.forEach((value)=>{
        total =total + Number(value.innerHTML);
    
   })

}


Ntotal();
sumTotal.innerHTML=total+".00NGN";

function deleteParent(){
    this.parentNode.remove();
    pvalue=document.querySelectorAll(".pvalue");
    total=0;
    Ntotal();
    sumTotal.innerHTML=total+".00NGN";
}



function increase(e){
        let item = e.target.parentNode.previousSibling;
        ++item.textContent;
        let price=e.target.parentNode.nextSibling.nextSibling.nextSibling.firstChild.innerHTML;
        let quantityxValue=item.textContent*price;
      console.log(quantityxValue);

    
}

function decrease(e){
    let item = e.target.parentNode.previousSibling;
        if(item.textContent>1){
            --item.textContent;
            let price=e.target.parentNode.nextSibling.nextSibling.nextSibling.firstChild.innerHTML;
            let quantityxValue=item.textContent*price;
            price.innerHTML=quantityxValue;
            console.log(price);
            console.log(quantityxValue);
        }
        else{
            item.textContent=0; 
            quantityxValue=0;
                
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


