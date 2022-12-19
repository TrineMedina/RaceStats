import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import AddRace from "./components/AddRace";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditRace from "./components/EditRace";

const UserContext = createContext([{}, () => {}]);
const RaceContext = createContext([{}, () => {}]);

const App = () => {
  // TODO For future use when setting up specific user access
  // const [userId, setUserId] = useState(null);

  return (
    <div className="App">
      {/*<UserContext.Provider value={[userId, setUserId]}>*/}
      {/*  <ItemContext.Provider value={[selectedRace, setSelectedRace]}>*/}
      <Routes>
        <Route exact path="/*" element={<Dashboard />} />
        {/*TODO Create login/signup */}
        {/*<Route path="/login" element={<Login />} />*/}
        {/*<Route path="/signup" element={<Signup />} />*/}
        <Route path="/AddRace" element={<AddRace />} />
        <Route path="/EditRace" element={<EditRace />} />
      </Routes>
      {/*  </ItemContext.Provider>*/}
      {/*</UserContext.Provider>*/}
    </div>
  );
};

export { App, UserContext };
