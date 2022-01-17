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
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart : []
    }
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar cart={this.state.cart}/>
      <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "shop" element={<Shop currentCart={this.state.cart}/>}>
          </Route>
          <Route path="shop/:productId" element={<ProductPage/>}/>
            {/* <Route path= "/checkout" element={<Checkout/>}/> */}
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
