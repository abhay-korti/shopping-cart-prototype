const addFunc = (currentState, item) => {
    console.log('In add func');
    console.log(item);
    let copyArr = currentState.cart;
    for(let i=0;i<copyArr.length;i++){
      if(item.itemId == copyArr[i].product.itemId){
        console.log(copyArr[i].product.itemId);
           copyArr[i].quantity += 1;
           return {
               ...currentState,
               'cart':copyArr
           };
      }
    }
    copyArr.push({
      'product':item,
      'quantity':1
    })
    return {
        ...currentState,
        'cart':copyArr
    };

 }


const delFunc = (currentState,itemId) => {
    let copyArr = currentState.cart;
    for(let i=0;i<copyArr.length;i++){
      if(copyArr[i].product.itemId == itemId){
      if(copyArr[i].quantity == 1){
        copyArr.splice(i, 1);
        break;
      }
      copyArr[i].quantity -= 1;      
      break;
    }
}
    return {
        ...currentState,
        'cart':copyArr
    };

}


const cartQuantity = (currentCart, product, addingFunc, dellingFunc) => {
        for(let i=0;i<currentCart.cart.length;i++){
            if(product.itemId == currentCart.cart[i].product.itemId){
                if(currentCart.cart[i].quantity > 0){
                    return(
                        <div>
                            <button onClick={() => dellingFunc(product.itemId)}>-</button>
                            <span>{currentCart.cart[i].quantity}</span>
                            <button onClick={() => addingFunc(product)}>+</button>  
                        </div>
                    )
                }
            }
        }

         return(
            <div onClick={() => addingFunc(product)}>
                 ADD TO CART
            </div>
       )
}


export {
    cartQuantity,
    addFunc,
    delFunc
}