
//gorceryList objects in array
var groceryList = [
  {
name:"flour",
price:5
},
{
  name:"sugar",
  price:3.50
},
{
  name:"yeast",
  price:.98
}
];



var total=0;

//loop through function to add items to groceryReceipt
groceryList.forEach(function(item){
  //create list element
  var itemName= document.createElement("li");
itemName.innerHTML=item.name + " &#36; " + item.price.toFixed(2);
document.body.appendChild(itemName);
total+=item.price


});

//total+= groceryList.price;
for(var i=0; i< groceryList.length; i++){
var subtotal= document.createElement("p")
subtotal.innerHTML= "Your subtotal is "+ "$" + total
document.body.appendChild(subtotal);

    //total+=item.price;
}
  
