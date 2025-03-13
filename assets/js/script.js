const minusProductButton = document.getElementsByClassName("product-minus");
const plusProductButton = document.getElementsByClassName("product-plus");


for(var i = 0; i < plusProductButton.length; i++){
    plusProductButton[i].addEventListener("click", function(){
        contador[i]++
        console.log(contador[i])
    })
}
for(var i = 0; i < minusProductButton.length; i++){
    minusProductButton[i].addEventListener("click", function(){
        contador[i]--
        console.log(contador[i])
    })
}
