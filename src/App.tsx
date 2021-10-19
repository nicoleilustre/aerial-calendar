import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Homepage }  from './pages/homepage'
import { BookedClassesPage } from './pages/bookedClassespage'
import { ClassDetails } from './pages/classDetails'


function App() {
  const [bookedClasses, setBookedClasses] = useState([])
  const [classDetails, setClassDetails] = useState({})

  return (
    <Router>
      <Route exact path={'/'}>
        <Login />
      </Route>
      <Route exact path={'/home'}>
        <Homepage setBookedClasses={setBookedClasses} setClassDetails={setClassDetails}/>
      </Route>
      <Route exact path={'/bookedClasses'}>
        <BookedClassesPage bookedClasses={bookedClasses} />
      </Route>
      <Route exact path={'/classDetails'}>
        <ClassDetails classDetails={classDetails}/>
      </Route>
    </Router>
  );
}

export default App;
