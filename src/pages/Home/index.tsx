import React from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import homeImage from '../../assets/manopla-do-infinito.png';

import './styles.css';

const Home = () => {
   return (
      <>
         <div className="container-page">
            <Header />
            <div id="page">
               <Menu />
               <div className="content">
                  <main>
                     <h1>Marvel Comics</h1>
                     <p>
                        Encontre seu herói favorito, capas de revistas,
                        crossovers e quadrinhos em um estalar de dedos.
                     </p>

                     <img src={homeImage} alt="manopla-do-infinito" />
                  </main>
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
