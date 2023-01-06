import React from "react";
import "rsuite/dist/rsuite.min.css";
import "../assets/css/chatsection.css";
import { Link } from "react-router-dom";
import features2 from "../assets/img/features-2.png";

const NavItem = ({ contactData, profileData }) => {
  return (
    <>
      {/* eslint-disable-next-line array-callback-return*/}
      {contactData.map((val, index) => {
        let usersDetails = profileData[val.id];
        if (val.state === "online") {
          return (
            <div key={index} className="mainNavitem">
              <Link
                to={`/personalChats/${val.id}`}
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
        if (val.state === "offline") {
          return (
            <div key={index} className="mainNavitem">
              <Link
                to={`/personalChats/${val.id}`}
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
