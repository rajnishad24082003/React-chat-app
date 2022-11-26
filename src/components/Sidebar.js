import React, { useState } from "react";
import { Sidenav, Nav, Message } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "../assets/css/sidebar.css";
import NavItem from "./NavItem";
import { useProfile } from "../context/profile.context";
import { ref, set } from "firebase/database";
import { database } from "../misc/firebase";

function Sidebar() {
  const { profile } = useProfile();
  let [responsivesidebar, setresponsivesidebar] = useState(null);
  const hidesidebar = () => {
    setresponsivesidebar("hideclasssidebar");
  };
  const showsidebar = () => {
    setresponsivesidebar("showclasssidebar");
  };
  let [displayIcon, setdisplayIcon] = useState("displayIcon");
  let [isEditable, setisEditable] = useState(false);
  let [displaywriteIcon, setdisplaywriteIcon] = useState("");
  let pencilIconclick = () => {
    setisEditable(true);
    setdisplayIcon("");
    setdisplaywriteIcon("displaywriteIcon");
  };
  let [inputtextnikevalue, setinputtextnikevalue] = useState("");
  let inputtextnike = (e) => {
    if (isEditable) {
      setinputtextnikevalue(e.target.value);
    }
  };
  let savefun = async () => {
    const starCountRef = ref(database, `/profile/${profile.uid}/name`);
    await set(starCountRef, inputtextnikevalue);
    setisEditable(false);
    setdisplayIcon("displayIcon");
    setdisplaywriteIcon("");
  };
  let discardfun = () => {
    setisEditable(false);
    setdisplayIcon("displayIcon");
    setdisplaywriteIcon("");
  };

  return (
    <>
      <i className="bi bi-chevron-double-right" onClick={showsidebar}></i>
      <div
        className={`${responsivesidebar} heightlimit`}
        style={{ width: 240 }}
      >
        <Sidenav defaultOpenKeys={["3", "4"]}>
          <Sidenav.Body>
            <Nav activeKey="1">
              <div className="userprofile">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={profile.image}
                    alt=""
                    style={{
                      width: "60%",
                      borderRadius: "100px",
                    }}
                  />
                </div>

                <i className={`bi bi-x-lg `} onClick={hidesidebar}></i>
                <h4 style={{ textAlign: "center" }}>{profile.name}</h4>
                <h6 style={{ textAlign: "center" }}>{profile.email}</h6>
                <div className="mikenamediv m-2 border p-1">
                  <input
                    type="text"
                    className="form-control p-0 nikenameinput"
                    placeholder="nike name"
                    onChange={inputtextnike}
                    value={inputtextnikevalue}
                  />
                  <i
                    className={`bi bi-pencil-square ${displaywriteIcon}`}
                    onClick={pencilIconclick}
                  ></i>
                  <i
                    className={`bi bi-check ${displayIcon}`}
                    onClick={savefun}
                  ></i>
                  <i
                    className={`bi bi-x  ${displayIcon}`}
                    onClick={discardfun}
                  ></i>
                </div>

                <hr />
              </div>
              <NavItem contactData={[1, 2, 3, 4, 5, 6, 7]}></NavItem>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </>
  );
}

export default Sidebar;
