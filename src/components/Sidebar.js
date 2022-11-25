import React, { useState } from "react";
import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import "rsuite/dist/rsuite.min.css";
import Avatar from "../assets/img/team/team-1.jpg";
import "../assets/css/sidebar.css";
function Sidebar() {
  let [responsivesidebar, setresponsivesidebar] = useState(null);
  const hidesidebar = () => {
    setresponsivesidebar("hideclasssidebar");
  };
  const showsidebar = () => {
    setresponsivesidebar("showclasssidebar");
  };
  return (
    <>
      <i className="bi bi-chevron-double-right" onClick={showsidebar}></i>
      <div
        className={`${responsivesidebar}`}
        style={{ width: 240, marginTop: "6rem" }}
      >
        <Sidenav defaultOpenKeys={["3", "4"]}>
          <Sidenav.Body>
            <Nav activeKey="1">
              <Nav.Item eventKey="5">
                <div className="userprofile">
                  <img
                    src={Avatar}
                    alt=""
                    style={{
                      margin: "0 1rem",
                      width: "80%",
                      borderRadius: "100px",
                    }}
                  />
                  <a>
                    <i className={`bi bi-x-lg `} onClick={hidesidebar}></i>
                  </a>
                  <h4 style={{ textAlign: "center" }}>user name</h4>
                </div>
              </Nav.Item>
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<GroupIcon />}>
                User Group
              </Nav.Item>
              <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Custom Action">
                  <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </>
  );
}

export default Sidebar;
