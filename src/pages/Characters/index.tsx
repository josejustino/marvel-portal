import React, { useState, Component } from 'react';
import api from '../../services/api'

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import './styles.css';

class Character extends Component {
   state = {
      characters: []
   }

   async componentDidMount() {
      const response = await api.get('/v1/public/characters?limit=10&apikey=6f39d34be067f5aa384594f28f8d9203');

      this.setState({
         characters: response.data
      });
   }

   render() {

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
                        <p>{this.state.characters}</p>
                     </main>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default Character;