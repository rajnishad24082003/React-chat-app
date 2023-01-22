import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatsectionPersonal from "../components/ChatsectionPersonal";
import { RoomsProvider as PRoomsProvider } from "../context/PersonalRoom.context";
import { RoomsProvider as PubRoomsProvider } from "../context/Room.context";

export const Home = () => {
  return (
    <>
      <PRoomsProvider>
        <PubRoomsProvider>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
          <ChatsectionPersonal></ChatsectionPersonal>
        </PubRoomsProvider>
      </PRoomsProvider>
    </>
  );
};

export default Home;
