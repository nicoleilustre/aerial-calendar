import React, { useState } from "react";
import { useClasses } from "./components/api/useClasses";
import { Loading } from "./components/Loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Homepage } from "./pages/homepage";
import { BookedClassesPage } from "./pages/bookedClassespage";
import { ClassDetails } from "./pages/classDetails";

function App() {
  const { data, isLoading }: { data: any; isLoading: any } = useClasses();
  const [username, setUsername] = useState("");
  const [bookedClasses, setBookedClasses] = useState([]);
  const [classDetails, setClassDetails] = useState({});

  return (
    <Router>
      <Route exact path={"/"}>
        <Login setUsername={setUsername} />
      </Route>
      <Route exact path={"/home"}>
        {isLoading && <Loading />}
        {!isLoading && data && (
          <Homepage
            data={data}
            setBookedClasses={setBookedClasses}
            setClassDetails={setClassDetails}
            username={username}
          />
        )}
      </Route>
      <Route exact path={"/bookedClasses"}>
        <BookedClassesPage data={data} bookedClasses={bookedClasses} />
      </Route>
      <Route exact path={"/classDetails"}>
        <ClassDetails classDetails={classDetails} />
      </Route>
    </Router>
  );
}

export default App;
