export const cart = [];

export function addToCart(productId){
  let matchingItem;

  //check if product is already in cart
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  //if already in cart, increase quantity if not push to cart array
  if(matchingItem){
    matchingItem.quantity++;
  }else{
    cart.push({
      productId,
      quantity: 1})
  }

}