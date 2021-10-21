import React, { useState } from "react";
import { useClasses } from "./components/api/useClasses";
import { Loading } from "./components/Loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Homepage } from "./pages/homepage";
import { BookedClassesPage } from "./pages/bookedClassespage";
import { ClassDetails } from "./pages/classDetails";

function App() {
  const { data, isLoading }: { data: any; isLoading: boolean } = useClasses();
  const [username, setUsername] = useState("");
  const [bookedClasses, setBookedClasses] = useState({});

  return (
    <Router>
      <Route exact path={"/"}>
        <Login setUsername={setUsername} />
      </Route>
      <Route exact path={"/home"}>
        {isLoading && <Loading />}
        {!isLoading && data && (
          <Homepage
            classSchedule={data}
            setBookedClasses={setBookedClasses}
            username={username}
          />
        )}
      </Route>
      <Route exact path={"/bookedClasses"}>
        <BookedClassesPage classSchedule={data} bookedClasses={bookedClasses} />
      </Route>
      <Route exact path={"/classDetails/:class_id"}>
        <ClassDetails classSchedule={data} />
      </Route>
    </Router>
  );
}

export default App;
