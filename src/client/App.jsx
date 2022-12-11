import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./views/dashboard";
import AddRace from "./components/addRace";
import SelectionDrawer from "./components/selectionDrawer";

const UserContext = createContext([{}, () => {}]);
const ItemContext = createContext([{}, () => {}]);

const App = () => {
  const navigate = useNavigate();

  // TODO For future use when setting up specific user access and allowing user to select races to compare
  // const [userId, setUserId] = useState(null);
  // const [selectedRaces, setSelectedRaces] = useState({})

  const handleAddRaceBtnClick = () => {
    navigate("/addRace");
  };
  const handleSetSelectedItem = (e) => {
    // setSelectedItem(e.target.value);
  };

  return (
    <div className="App">
      <SelectionDrawer />
      {/*<UserContext.Provider value={[userId, setUserId]}>*/}
      {/*  <ItemContext.Provider value={[selectedItem, setSelectedItem]}>*/}
      <Routes>
        <Route path="/*" element={<Dashboard />} />
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
