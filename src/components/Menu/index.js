import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/img/home.svg';
import character from '../../assets/img/character.svg';
import magazineCover from '../../assets/img/magazine-cover.svg';
import author from '../../assets/img/author.svg';
import crossovers from '../../assets/img/crossover.svg';
import comicBookSeries from '../../assets/img/comic-book-series.svg';
import comicBook from '../../assets/img/comic-book.svg';

import './styles.css';

const menuItens = [
   {
      link: '/',
      name: 'Home', 
      imgSource: home,
      imgDescription: 'home'
   },
   {
      link: '/characters',
      name: 'Personagens', 
      imgSource: character,
      imgDescription: 'iron-man'
   },
   {
      link: '/comics',
      name: 'Quadrinhos', 
      imgSource: magazineCover,
      imgDescription: 'magazine-cover'
   },
   {
      link: '/creators',
      name: 'Criadores', 
      imgSource: author,
      imgDescription: 'author'
   },
   {
      link: '/events',
      name: 'Crossovers', 
      imgSource: crossovers,
      imgDescription: 'crossovers'
   },
   {
      link: '/series',
      name: 'Séries de Quadrinhos', 
      imgSource: comicBookSeries,
      imgDescription: 'comic-book-series'
   },
   {
      link: '/stories',
      name: 'Histórias em Quadrinhos',
      imgSource: comicBook,
      imgDescription: 'comic-book'
   }
];

const Menu = () => {
   return (
      <aside>
         <menu>
            <div className="menu-top-line"></div>
            <ul>
               {
                  menuItens.map((item, index) => (
                     <Link key={index} to={item.link}>
                        <div>
                           <li>
                              <div>
                                 <div>
                                    <img src={item.imgSource} alt={item.imgDescription} />
                                 </div>
                                 <span>{item.name}</span>
                              </div>
                           </li>
                        </div>
                     </Link>
                  ))
               }
            </ul>
         </menu>
      </aside>
   );
};

export default Menu;
