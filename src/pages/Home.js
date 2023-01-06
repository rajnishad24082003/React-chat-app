import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chatsection from "../components/Chatsection";
import { RoomsProvider } from "../context/Room.context";

export const Home = () => {
  return (
    <>
      <RoomsProvider>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Chatsection></Chatsection>
      </RoomsProvider>
    </>
  );
};

export default Home;
