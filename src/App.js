import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactForm';
import { ProductCatalogue } from './pages/ProductCatalogue';
import { FilteredCatalogue } from './pages/FilteredCatalogue';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


function App() {
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='product' element={<ProductCatalogue />} />
          <Route path='categories/:product_category' element={<FilteredCatalogue />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
