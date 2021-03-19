import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Principal from './pages/Principal';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Principal}>
      </Route>
    </BrowserRouter>
  );
}

export default Routes;