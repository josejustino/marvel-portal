import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';

const Routes = () => {
   return (
      <BrowserRouter>
         <Route component={Home} path="/" exact />
         <Route component={Characters} path="/characters" />
      </BrowserRouter>
   )
}

export default Routes;