import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Homepage }  from './pages/homepage'


function App() {

  return (
    <Router>
      <Route exact path={'/'}>
        <Login />
      </Route>
      <Route exact path={'/home'}>
        <Homepage />
      </Route>
    </Router>
  );
}

export default App;
