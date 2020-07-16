import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/home.svg';
import character from '../../assets/character.svg';
import magazineCover from '../../assets/magazine-cover.svg';
import author from '../../assets/author.svg';
import crossovers from '../../assets/crossover.svg';
import comicBookSeries from '../../assets/comic-book-series.svg';
import comicBook from '../../assets/comic-book.svg';

import './styles.css';

const Menu = () => {
   return (
      <menu>
         <ul>
            <Link to="/">
               <div>
                  <li>
                     <div>
                        <div>
                           <img src={home} alt="home" />
                        </div>
                        <span>Home</span>
                     </div>
                  </li>
               </div>
            </Link>
            <Link to="/characters"><div>
               <li>
                  <div>
                     <div>
                        <img src={character} alt="iron-man" />
                     </div>
                     <span>Personagens</span>
                  </div>
               </li>
            </div></Link>
            <div>
               <li>
                  <div>
                     <div>
                        <img src={magazineCover} alt="magazine-cover" />
                     </div>
                     <span>Quadrinhos</span>
                  </div>
               </li>
            </div>
            <div>
               <li>
                  <div>
                     <div>
                        <img src={author} alt="author" />
                     </div>
                     <span>Criadores</span>
                  </div>
               </li>
            </div>
            <div>
               <li>
                  <div>
                     <div>
                        <img src={crossovers} alt="crossovers" />
                     </div>
                     <span>Crossovers</span>
                  </div>
               </li>
            </div>
            <div>
               <li>
                  <div>
                     <div>
                        <img src={comicBookSeries} alt="comic-book-series" />
                     </div>
                     <span>Séries de Quadrinhos</span>
                  </div>
               </li>
            </div>
            <div>
               <li>
                  <div>
                     <div>
                        <img src={comicBook} alt="comic-book" />
                     </div>
                     <span>Histórias em Quadrinhos</span>
                  </div>
               </li>
            </div>
         </ul>
      </menu>
   );
};

export default Menu;
