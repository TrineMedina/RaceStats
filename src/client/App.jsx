import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import AddRace from "./components/addRace";

const UserContext = createContext([{}, () => {}]);
const ItemContext = createContext([{}, () => {}]);

const App = () => {
  // TODO For future use when setting up specific user access and allowing user to select races to compare
  // const [userId, setUserId] = useState(null);
  // const [selectedRaces, setSelectedRaces] = useState({})

  return (
    <div className="App">
      {/*<UserContext.Provider value={[userId, setUserId]}>*/}
      {/*  <ItemContext.Provider value={[selectedItem, setSelectedItem]}>*/}
      <Routes>
        <Route exact path="/*" element={<Dashboard />} />
        {/*TODO Create login/signup */}
        {/*<Route path="/login" element={<Login />} />*/}
        {/*<Route path="/signup" element={<Signup />} />*/}
        <Route path="/addRace" element={<AddRace />} />
      </Routes>
      {/*  </ItemContext.Provider>*/}
      {/*</UserContext.Provider>*/}
    </div>
  );
};

export { App, UserContext, ItemContext };
