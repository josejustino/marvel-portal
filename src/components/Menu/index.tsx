import React from 'react';
import { FaHome } from 'react-icons/fa';

import character from '../../assets/character.svg';
import magazineCover from '../../assets/magazine-cover.svg';
import author from '../../assets/author.svg';
import crossovers from '../../assets/crossover.svg';
import comicBookSeries from '../../assets/comic-book-series.svg';
import comicBook from '../../assets/comic-book.svg';

import './styles.css'

const Menu = () => {
   return (
      <menu>
         <ul>
            <li>
               <FaHome size="30" />
               <span>Home</span>
            </li>
            <li>
               <img src={character} alt="iron-man" />
               <span>Personagens</span>
            </li>
            <li>
               <img src={magazineCover} alt="magazine-cover" />
               <span>Quadrinhos</span>
            </li>
            <li>
               <img src={author} alt="author" />
               <span>Criadores</span>
            </li>
            <li>
               <img src={crossovers} alt="crossovers" />
               <span>Crossovers</span>
            </li>
            <li>
               <img src={comicBookSeries} alt="comic-book-series" />
               <span>Séries de Quadrinhos</span>
            </li>
            <li>
               <img src={comicBook} alt="comic-book" />
               <span>Histórias em Quadrinhos</span>
            </li>
         </ul>
      </menu>
   );
}

export default Menu;