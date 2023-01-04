import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import RaceData from "./components/RaceData";
import EditRace from "./components/EditRace";
import Chart from "./components/Chart";

// const UserContext = createContext([{}, () => {}]);
// const RaceContext = createContext([{}, () => {}]);

const App = () => {
  // TODO For future use when setting up specific user access
  // const [userId, setUserId] = useState(null);

  return (
    <div>
      {/*<UserContext.Provider value={[userId, setUserId]}>*/}
      {/*  <ItemContext.Provider value={[selectedRace, setSelectedRace]}>*/}
      <Routes>
        <Route exact path="/*" element={<Dashboard />} />
        {/*TODO Create login/signup */}
        {/*<Route path="/login" element={<Login />} />*/}
        {/*<Route path="/signup" element={<Signup />} />*/}
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
