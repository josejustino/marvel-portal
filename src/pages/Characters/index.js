import React, { useState, useEffect } from 'react';
import md5 from 'js-md5';

import api from '../../services/api';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Config from '../../config';

import './styles.css';

const PRIVATE_KEY = Config.PRIVATE_KEY;
const PUBLIC_KEY = Config.PUBLIC_KEY;

const limit = 6;
// interface ICharacters {
//    name: string;
// }

const Character = () => {
   const [characters, setCharacters] = useState([]);

   const timestamp = Number(new Date());
   const hash = md5.create();
   hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

   useEffect(() => {
      async function getCharacters() {
         await api
         .get(`characters?ts=${timestamp}&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
         .then(response => {
            setCharacters(response.data.data.results);
         })
         .catch(error => console.log(error));
      }

      getCharacters();
   }, [hash, timestamp])

   return (
      <>
         <div className="container-page">
            <Header />
            <div id="page">
               <Menu />
               <div className="content">
                  <main>
                     <ul>
                        {
                           characters.map(character => (
                              <li key={character.id}>
                                 <strong>{character.name}</strong>
                                 <p>{character.description}</p>
                                 <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt=""/>
                              </li>
                           ))
                        }
                     </ul>
                  </main>
               </div>
            </div>
         </div>
      </>
   );
}

export default Character;