import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import RaceData from "./components/RaceData";
import EditRace from "./components/EditRace";
import Chart from "./components/Chart";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Header from "./components/Header";

// const UserContext = createContext([{}, () => {}]);
// const RaceContext = createContext([{}, () => {}]);

const App = () => {
  // TODO For future use when setting up specific user access
  // const [userId, setUserId] = useState(null);

  return (
    <div>
      <Header />
      {/*<UserContext.Provider value={[userId, setUserId]}>*/}
      {/*  <ItemContext.Provider value={[selectedRace, setSelectedRace]}>*/}
      <Routes>
        <Route path="/*" element={<SignIn />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        {/*<Route path="/sign-in" element={<SignIn />} />*/}
        {/*<Route path="/sign-up" element={<SignUp />} />*/}

        <Route path="/RaceData" element={<RaceData />} />
        <Route path="/EditRace" element={<EditRace />} />
        <Route path="/Chart" element={<Chart />} />
      </Routes>
      {/*  </ItemContext.Provider>*/}
      {/*</UserContext.Provider>*/}
    </div>
  );
};

export default App;
