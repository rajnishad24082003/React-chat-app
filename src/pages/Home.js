import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chatsection from "../components/Chatsection";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Chatsection></Chatsection>
      <Sidebar></Sidebar>
    </>
  );
};

export default Home;
