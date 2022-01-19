import './App.css';
import Navbar from './Components/Navbar';
import {
Routes,
Route,
HashRouter} from 'react-router-dom'
import { Component } from 'react';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import ProductPage from './Components/Pages/ProductPage';
import PageNotFound from './Components/Pages/PageNotFound';
import Checkout from './Components/Pages/Checkout'
import { addFunc,delFunc,remFunc } from './Components/Utilities/CartFunctions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart : []
    }
    this.addToCart = this.addToCart.bind(this);
    this.delFromCart = this.delFromCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

   addToCart(item){
     console.log('called');
    this.setState(addFunc(this.state,item));
  }


  delFromCart(itemId){
    this.setState(delFunc(this.state,itemId));
  }

  removeFromCart(itemId){
    this.setState(remFunc(this.state,itemId));
  }


  render(){
    return (
      <HashRouter>
      <div className="App">
      <Navbar cart={this.state.cart} addToCart={this.addToCart} delFromCart={this.delFromCart} remFromCart={this.removeFromCart}/>
      <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/shop" element={<Shop currentCart={this.state} addToCart={this.addToCart} delFromCart={this.delFromCart}/>} remFromCart={this.removeFromCart}/>
          <Route path="/shop/:productId" element={<ProductPage currentCart={this.state} addToCart={this.addToCart} delFromCart={this.delFromCart} remFromCart={this.removeFromCart}/>}/>
            <Route path= "/checkout" element={<Checkout currentCart={this.state} addToCart={this.addToCart} delFromCart={this.delFromCart} remFromCart={this.removeFromCart}/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </div>
      </HashRouter>
    )
  }
}

export default App;
