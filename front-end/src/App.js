import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component= />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
