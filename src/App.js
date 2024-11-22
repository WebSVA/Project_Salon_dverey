import {Routes, Route, Link} from 'react-router-dom';
import './styles/app.css';

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
        <div className='container-header'>
          <div className='logo-container'>
            <img src='' className='logo'></img>
            <p className='title-company'></p>
          </div>
          <div className='links-button-container'>
            <div className='link-container'>
              <Link className='links' to='/'>Главная</Link>
              <Link className='links' to='/about'>О нас</Link>
              <Link className='links' to='/catalog'>Каталог</Link>
              <Link className='links' to='/contact'>Контакты</Link>
            </div>
            <div className='button-form-container'>
              <button></button>
            </div>
          </div>
        </div>
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