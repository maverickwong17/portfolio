import React, { useState } from 'react';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from "./Footer";
import Header from './Header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
      return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <div className='container py-4'>
		<Header currentPage = {currentPage} />
      {renderPage()}
		<Footer />
      </div>
    </main>
  );
}
