import React from "react";
import Login from "./components/Login";
import "./App.css"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSice";
import Logout from "./components/Logout";

function App() {
  const user = useSelector(selectUser)

  return (
    <div>
      {user ? <Logout/> : <Login />}
    </div>
  );
}

export default App;
