import React from "react";
import "rsuite/dist/rsuite.min.css";
import "../assets/css/chatsection.css";
const NavItem = ({ contactData }) => {
  return (
    <>
      {contactData.map((val, index) => {
        return (
          <div key={index} className="mainNavitem">
            <a
              href="#"
              className="list-group-item list-group-item-action border-0"
            >
              <div className="d-flex align-items-start">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar5.png"
                  className="rounded-circle mr-1"
                  alt="Vanessa Tucker"
                  width="50"
                  height="50"
                />
                <div className="flex-grow-1 ml-3">
                  <h5>contact name</h5>
                  <div className="small">
                    <span className="fas fa-circle chat-online"></span>{" "}
                    <h6>status</h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default NavItem;
