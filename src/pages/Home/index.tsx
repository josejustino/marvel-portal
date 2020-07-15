import React from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import homeImage from '../../assets/manopla-do-infinito.svg';

import './styles.css'

const Home = () => {
   return(
      <>
         <Header />
         <div className="container">
            <Menu />
               <div id="page-home">
                  <div className="content">
                     <main>
                        <h1>Marvel Comics</h1>
                        <p>Encontre seu herói favorito, capas de revistas, crossovers e quadrinhos em um estalar de dedos.</p>

                        <div className="container-img">
                           <img src={homeImage} alt="manopla-do-infinito"/>
                        </div>
                     </main>
                  </div>
               </div>
         </div>
      </>
   )
}

export default Home;