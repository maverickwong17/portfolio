import React, { useState } from 'react';
// import Nav from 'react-bootstrap/Nav';

function Header(props) {
    console.log(props)
    const [currentPage, setCurrentPage] = useState('About');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
    <header className="pb-3 mb-4 border-bottom">
    <h1>Maverick Wong</h1>
      <ul className="nav nav-tabs">
            <li className="nav-item">
            <a
                href="/about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About
            </a>
            </li>
            <li className="nav-item">
            <a
                href="/portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </a>
            </li>
            <li className="nav-item">
            <a
                href="/resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
            </li>
            <li className="nav-item">
            <a
                href="/contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </a>
            </li>
        </ul>
    </header>
    );
  }



export default Header