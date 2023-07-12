import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactForm';
import ProductCatalogue from './pages/ProductCatalogue';
import FilteredCatalogue from './pages/FilteredCatalogue';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductDetail } from './pages/ProductDetail';
import Profile from './utils/profile';
import Cart from './pages/ShoppingCart';
import { Wishlist } from './pages/Whishlist';
import OrderHistory from './pages/OrderHistory';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-white'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='product' element={<ProductCatalogue />} />
          <Route path='categories/:product_category' element={<FilteredCatalogue />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='product/:product_id' element={<ProductDetail />} />
          <Route path='profile' element={<Profile />} />
          <Route path='checkout' element={<Cart />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='orders' element={<OrderHistory />} />
        </Routes>
      </div>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
