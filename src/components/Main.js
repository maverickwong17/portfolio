import React from 'react';
import { useLocation } from 'react-router-dom';

// import Fade from 'react-reveal/Fade';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PortfolioContainer() {
  const currentPage = useLocation().pathname;

  return (
    <main>
        <Header currentPage={currentPage}/>
        {/* Conditional reveal animations based on page location state */}
        <div if={currentPage === '/about'}>
            <About />
        </div>
        <div if={currentPage === '/portfolio'}>
            <Portfolio />
        </div>
        <div if={currentPage === '/resume'}>
            <Resume />
        </div>
        <div if={currentPage === '/contact'}>
            <Contact />
        </div>
        <Footer />
    </main>
);
}
