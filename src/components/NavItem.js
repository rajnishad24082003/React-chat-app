import React, { useEffect, useState } from "react";
import "rsuite/dist/rsuite.min.css";
import "../assets/css/chatsection.css";
import { Link } from "react-router-dom";
import features2 from "../assets/img/features-2.png";
import { useProfile } from "../context/profile.context";
import { useParams } from "react-router";
import { ref, set, push, onValue, off } from "firebase/database";
import { database } from "../misc/firebase";

const NavItem = ({ contactData, profileData }) => {
  let Sender = useProfile();
  let count = 0;
  let AllPersonalRooms = ref(database, `personalRooms`);
  let [MainRoomsP, setMainRoomsP] = useState([]);
  let alltheroomsdata;
  useEffect(() => {
    onValue(AllPersonalRooms, (snapshot) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      alltheroomsdata = snapshot.val();
      let transformedData = Object.keys(alltheroomsdata).map((val, index) => {
        return {
          pRoom: alltheroomsdata[val],
          id: val,
        };
      });
      setMainRoomsP(transformedData);
      return () => {
        off(AllPersonalRooms, "value");
      };
    });
  }, [alltheroomsdata]);

  let LinkClickFun = async (MainUrl, usersDetails) => {
    for (let i = 0; i <= MainRoomsP.length; i++) {
      if (i === MainRoomsP.length || MainRoomsP == false) {
        const roomsdataFromdatabase = ref(database, "personalRooms");
        let ConbinedDataUpload = {
          MainUrl: MainUrl,
          ...usersDetails,
        };
        await push(roomsdataFromdatabase, ConbinedDataUpload);
      } else if (
        MainRoomsP.length > 0 &&
        MainRoomsP[i].pRoom.MainUrl === MainUrl
      ) {
        break;
      }
    }
  };

  return (
    <>
      {/* eslint-disable-next-line array-callback-return*/}
      {contactData.map((val, index) => {
        let usersDetails = profileData[val.id];
        let combinedUrl;
        if (val.id < Sender.profile.uid) {
          combinedUrl = `${val.id}+${Sender.profile.uid}`;
        } else {
          combinedUrl = `${Sender.profile.uid}+${val.id}`;
        }

        if (val.state === "online" && val.id !== Sender.profile.uid) {
          return (
            <div
              key={index}
              className="mainNavitem"
              onClick={() => {
                LinkClickFun(combinedUrl, usersDetails);
              }}
            >
              <Link
                to={`/personalChats/${combinedUrl}`}
                className="list-group-item list-group-item-action border-0"
              >
                <div className="d-flex align-items-start">
                  <img
                    src={usersDetails ? usersDetails.image : features2}
                    className="rounded-circle mr-1"
                    alt="noImage"
                    width="50"
                    height="50"
                  />
                  <div className="flex-grow-1 ml-3">
                    <h5>{usersDetails ? usersDetails.name : "no name"}</h5>
                    <div className="small">
                      <span className="fas fa-circle chat-online"></span>{" "}
                      <h6 style={{ color: "#4CBB17" }}>{val.state}</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })}
      {/* eslint-disable-next-line array-callback-return*/}
      {contactData.map((val, index) => {
        let usersDetails = profileData[val.id];
        let combinedUrl;
        if (val.id < Sender.profile.uid) {
          combinedUrl = `${val.id}+${Sender.profile.uid}`;
        } else {
          combinedUrl = `${Sender.profile.uid}+${val.id}`;
        }
        if (val.state === "offline" && val.id !== Sender.profile.uid) {
          return (
            <div
              key={index}
              className="mainNavitem"
              onClick={() => {
                LinkClickFun(combinedUrl, usersDetails);
              }}
            >
              <Link
                to={`/personalChats/${combinedUrl}`}
                className="list-group-item list-group-item-action border-0"
              >
                <div className="d-flex align-items-start">
                  <img
                    src={usersDetails ? usersDetails.image : features2}
                    className="rounded-circle mr-1"
                    alt="noImage"
                    width="50"
                    height="50"
                  />
                  <div className="flex-grow-1 ml-3">
                    <h5>{usersDetails ? usersDetails.name : "no name"}</h5>
                    <div className="small">
                      <span className="fas fa-circle chat-online"></span>{" "}
                      <h6 style={{ color: "#ce2029" }}>{val.state}</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </>
  );
};

export default NavItem;
