import React from 'react';

import Header from '../../components/Header';

import './styles.css'

const Home = () => {
   return(
      <>
         <Header />
         <div id="page-home">
            <div className="content">
               <main>
                  <h1>Marvel Comics</h1>
                  <p>Encontre o seu herói favorito, capas de revistas, quadrinhos, etc.</p>
                  <img src="home-image" alt="manopla-do-infinito"/>
               </main>
            </div>
         </div>
      </>
   )
}

export default Home;