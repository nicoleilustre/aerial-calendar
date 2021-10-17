import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './pages/login'


function App() {

  return (
    <Router>
      <Route exact path={'/'}>
        <Login />
      </Route>
    </Router>
  );
}

export default App;
