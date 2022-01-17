import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {
BrowserRouter,
Routes,
Route} from 'react-router-dom'
import { Component } from 'react';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import ProductPage from './Components/Pages/ProductPage';
import PageNotFound from './Components/Pages/PageNotFound';
import { addFunc,delFunc } from './Components/Utilities/CartFunctions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart : []
    }
    this.addToCart = this.addToCart.bind(this);
    this.delFromCart = this.delFromCart.bind(this);
  }

   addToCart(item){
     console.log('called');
    this.setState(addFunc(this.state,item));
  }


  delFromCart(itemId){
    this.setState(delFunc(this.state,itemId));
  }


  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar cart={this.state.cart} addToCart={this.addToCart} delFromCart={this.delFromCart}/>
      <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "shop" element={<Shop currentCart={this.state} addToCart={this.addToCart} delFromCart={this.delFromCart}/>} />
          <Route path="shop/:productId" element={<ProductPage currentCart={this.state} addToCart={this.addToCart} delFromCart={this.delFromCart}/>}/>
            {/* <Route path= "/checkout" element={<Checkout/>}/> */}
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
