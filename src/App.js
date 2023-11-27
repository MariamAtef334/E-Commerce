import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import banner_men from './Components/Assets/banner_mens.png';
import banner_women from './Components/Assets/banner_women.png';
import banner_kids from './Components/Assets/banner_kids.png';
import Login from './Pages/Login';
import NewCollection from './Components/NewCollection/NewCollection';
import Products from './Pages/Products';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/new' element={<NewCollection />} />
          <Route path='/men' element={<ShopCategory banner={banner_men} category='men' />} />
          <Route path='/women' element={<ShopCategory banner={banner_women} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category='kid' />} />
          <Route path='/product' element={<Product />}>

            <Route path=':productId' element={<Product />} />

          </Route>
        </Routes>
        <Footer />
      </HashRouter>

    </div>
  );
}

export default App;
