import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chatsection from "../components/Chatsection";
import { RoomsProvider as PRoomsProvider } from "../context/PersonalRoom.context";
import { RoomsProvider as PubRoomsProvider } from "../context/Room.context";

export const Home = () => {
  return (
    <>
      <PubRoomsProvider>
        <PRoomsProvider>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
          <Chatsection></Chatsection>
        </PRoomsProvider>
      </PubRoomsProvider>
    </>
  );
};

export default Home;
