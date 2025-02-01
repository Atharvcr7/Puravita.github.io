let cartpage= document.querySelector(".cartdiv")
let cart = document.querySelector("#cartnum")
if(cartpage){
if(cartpage.children.length==0){
    cartpage.classList.add("emptycart")
    cartpage.innerHTML="Your cart is empty"
}else{
    cartpage.classList.remove("emptycart")
}
}
var carn=0;
function aadtocart(){
    carn+=1;
    cart.innerHTML=`(${carn})`;
}