import React, { useState } from "react";
import { Sidenav, Nav, Modal, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "../assets/css/sidebar.css";
import NavItem2 from "./NavItem2";
import NavItem from "./NavItem";
import { useProfile } from "../context/profile.context";
import {
  ref,
  set,
  serverTimestamp,
  push,
  onValue,
  off,
} from "firebase/database";
import { database } from "../misc/firebase";
import Provider from "./Provider";
import AvatarUpload from "./AvatarUpload";
import GroupIconUpload from "./GroupIconUpload";
import Loading from "./Loading";
import { useEffect } from "react";

function Sidebar() {
  let INITIAL_STATE = {
    name: "",
    description: "",
    imageUrl: "",
  };
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
  const [plusIconopen, setplusIconOpen] = React.useState(false);
  const handleCloseplusIcon = () => setplusIconOpen(false);
  const plusIcon = () => {
    setplusIconOpen(true);
  };
  let getgroupicondata = (imagedata) => {
    setformvalue((prev) => {
      return {
        name: prev.name,
        description: prev.description,
        imageUrl: imagedata,
      };
    });
  };
  let [formvalue, setformvalue] = useState(INITIAL_STATE);
  let [isLoading, setisLoading] = useState(null);
  let formSubmitfun = async (e) => {
    e.preventDefault();
    setisLoading(<Loading />);
    let RoomData = {
      ...formvalue,
      createdAt: serverTimestamp(),
    };
    let chatroomdata = ref(database, `/rooms`);
    await push(chatroomdata, RoomData);
    setisLoading(null);
    setplusIconOpen(false);
  };
  let onformchangeFun = (e) => {};
  let inputFormfun = (e) => {
    setformvalue((prev) => {
      return {
        name: e.target.value,
        description: prev.description,
        imageUrl: prev.imageUrl,
      };
    });
  };
  let areainputFormfun = (e) => {
    setformvalue((prev) => {
      return {
        name: prev.name,
        description: e.target.value,
        imageUrl: prev.imageUrl,
      };
    });
  };

  let onlineContactsStatus = ref(database, `status/`);
  let [allContactsStatus, setallContactsStatus] = useState([]);
  let alltheroomsdata;
  useEffect(() => {
    onValue(onlineContactsStatus, (snapshot) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      alltheroomsdata = snapshot.val();
      let transformedData = Object.keys(alltheroomsdata).map((val, index) => {
        return {
          ...alltheroomsdata[val],
          id: val,
        };
      });
      setallContactsStatus(transformedData);
      return () => {
        off(onlineContactsStatus, "value");
      };
    });
  }, [alltheroomsdata]);

  let databaseonfigForProfiles = ref(database, "profile/");
  let [ProfilesFinalData, setProfilesFinalData] = useState([]);
  let result;
  useEffect(() => {
    onValue(databaseonfigForProfiles, (snap) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      result = snap.val();
      setProfilesFinalData(result);
    });
  }, [result]);
  return (
    <div className={`mainSiderbarDiv `}>
      <i
        className="bi bi-chevron-double-right pt-2 pb-2 pe-2 rounded-end"
        onClick={showsidebar}
      ></i>
      <div
        className={`${responsivesidebar} heightlimit`}
        style={{ minWidth: 220 }}
      >
        <Sidenav defaultOpenKeys={["3", "4"]}>
          <Sidenav.Body>
            <Nav activeKey="1">
              <i className={`bi bi-x-lg `} onClick={hidesidebar}></i>
              <div className="userprofile">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <img
                    src={
                      profile.avatar ? `${profile.avatar}` : `${profile.image}`
                    }
                    alt="userimage not able to load"
                    style={{
                      width: "60%",
                      borderRadius: "200px",
                    }}
                  />
                  <AvatarUpload></AvatarUpload>
                </div>

                <h4 style={{ textAlign: "center" }}>{profile.name}</h4>
                <h6 style={{ textAlign: "center" }}>{profile.email}</h6>
                <Provider></Provider>
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
                <div className="chatroomsmaindiv">
                  <NavItem2></NavItem2>

                  <i className="bi bi-plus addroom" onClick={plusIcon}></i>
                </div>
                <hr />
              </div>

              <NavItem
                contactData={allContactsStatus}
                profileData={ProfilesFinalData}
              ></NavItem>
            </Nav>
          </Sidenav.Body>
        </Sidenav>

        <Modal
          keyboard={false}
          open={plusIconopen}
          onClose={handleCloseplusIcon}
        >
          <form onChange={onformchangeFun}>
            <Modal.Header>
              <Modal.Title>chatroom</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {isLoading}
              <div>
                <h5>Name</h5>
                <input
                  type="text"
                  className="InputModalBody"
                  placeholder="Enter name..."
                  name="name"
                  onChange={inputFormfun}
                />
              </div>

              <div className="mt-4">
                <h5>Description</h5>
                <textarea
                  type="text"
                  className="InputModalBody"
                  placeholder="Enter name..."
                  rows={3}
                  name="description"
                  onChange={areainputFormfun}
                />
              </div>
              <div className="mt-4">
                <h5>Group Icon</h5>
                <GroupIconUpload
                  dataExchange={getgroupicondata}
                ></GroupIconUpload>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="submit" onClick={formSubmitfun}>
                Add
              </button>
              <Button onClick={handleCloseplusIcon} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Sidebar;
