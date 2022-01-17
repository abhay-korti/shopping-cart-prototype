import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {
BrowserRouter,
Routes,
Route} from 'react-router-dom'
import { Component } from 'react';

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
          {/* <Route path= "/" element={<Home/>}/>
          <Route path= "/shop" element={<Shop/>}/>
          <Route path= "/checkout" element={<Checkout/>}/> */}
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
