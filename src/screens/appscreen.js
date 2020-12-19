import react from "react";

import BottomBar from "../components/bottombar";
import Content from "../components/content";
import NavBar from "../components/navbar";

import "../css/screens/appscreen.css";

const AppScreen = () => {
  return (
    <>
      <div className="appscreen">
        <NavBar />
        <Content />
        <BottomBar />
      </div>
    </>
  );
};

export default AppScreen;
