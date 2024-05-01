import './App.css';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
import Cartsidebar from './Component/Cart Sidebar/Cartsidebar';
import Productcomparison from './Component/Product Comparison/Productcomparison';
import Cart from './Component/Cart/Cart';
import Checkout from './Component/Checkout/Checkout';
import Contact from './Component/Contact/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>

        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/Shop' Component={Shop}></Route>
        <Route exact path='/Cartsidebar' Component={Cartsidebar}></Route>
        <Route exact path='/Productcomparison' Component={Productcomparison}></Route>
        <Route exact path='/Cart' Component={Cart}></Route>
        <Route exact path='/Checkout' Component={Checkout}></Route>
        <Route exact path='/Contact' Component={Contact}></Route>
        <Route exact path='/Blog' Component={Blog}></Route>

      </Routes>
      {/* <Home />
      <Shop />
      <Cartsidebar />
      <Productcomparison />
      <Cart />
      <Checkout />
      <Contact />
      <Blog /> */}
    </>
  );
}

export default App;
