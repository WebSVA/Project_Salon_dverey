import {Routes, Route, Link} from 'react-router-dom';

import ContactPage from './pages/ContactPage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';

import ContactHeader from './components/ContactHeader';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';

function App(){
    return(
      <>
      <ContactHeader/>
      <header className='header'>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
        <Link to='/catalog'>Каталог</Link>
        <Link to='/contact'>Контакты</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/catalog" element={<CatalogPage/>}/>
        {/* если ничего не совпало*/}
        <Route path="*" element={<HomePage/>}/>
      </Routes>
      <Footer/>
      </>
    );
}

export default App;