const addFunc = (currentState, item) => {
    let copyArr = currentState.cart;
    for(let i=0;i<copyArr.length;i++){
      if(item.itemId == copyArr[i].product.itemId){
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
                        <div className="quantity-container">
                            <button onClick={() => dellingFunc(product.itemId)} className="quantity-holder-buttons">-</button>
                            <span className="quantity-holder-number">{currentCart.cart[i].quantity}</span>
                            <button onClick={() => addingFunc(product)} className="quantity-holder-buttons">+</button>  
                        </div>
                    )
                }
            }
        }

         return(
            <div onClick={() => addingFunc(product)} className="quantity-holder-cart">
                 ADD TO CART
            </div>
       )
}

const remFunc = (currentState,itemId) => {
    let copyArr = currentState.cart;
    for(let i=0;i<copyArr.length;i++){
      if(copyArr[i].product.itemId == itemId){
        copyArr.splice(i, 1);
        break;
      }
}
    return {
        ...currentState,
        'cart':copyArr
    };
}



export {
    remFunc,
    cartQuantity,
    addFunc,
    delFunc
}