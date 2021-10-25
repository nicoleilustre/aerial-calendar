import React, { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Login } from "./pages/login";
import { Homepage } from "./pages/homepage";
import { BookedClassesPage } from "./pages/bookedClassespage";
import { ClassDetails } from "./pages/classDetails";

function App() {
  const [username, setUsername] = useState("");
  const [bookedClasses, setBookedClasses] = useState({});

  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login">
        <Login setUsername={setUsername} />
      </Route>
      <Route path="/home">
        <Header username={username} />
      </Route>
      <Switch>
        <Route exact path="/home">
          <Homepage setBookedClasses={setBookedClasses} />
        </Route>
        <Route path="/home/bookedClasses">
          <BookedClassesPage bookedClasses={bookedClasses} />
        </Route>
        <Route path="/home/classDetails/:class_id">
          <ClassDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
