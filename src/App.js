import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
const App = () => {
  return (
    <>
      <Contacts />
      <NavBar />
      <Posts />
      <UserProfile />
    </>
  );
};

export default App;
