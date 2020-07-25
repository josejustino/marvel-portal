import React from 'react';

import logo from '../../assets/marvel-logo.png'

import './styles.css';

const Header = () => {
   return (
      <header id="header">
         <div className="container">
            <div className="content">
               <img src={logo} alt="Marvel" />
            </div>
         </div>
      </header>
   );
}

export default Header;