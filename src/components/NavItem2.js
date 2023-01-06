import React from "react";
import "rsuite/dist/rsuite.min.css";
import "../assets/css/chatsection.css";
import TimeAgo from "timeago-react";
import features2 from "../assets/img/features-2.png";
import { useRooms } from "../context/Room.context";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const NavItem = () => {
  let { rooms } = useRooms();
  if (!rooms) {
    return <Loading></Loading>;
  } else {
    return (
      <>
        {rooms.map((val, index) => {
          return (
            <div key={index} className="mainNavitem">
              <Link
                to={`/chatrooms/${rooms[index].id}`}
                className="list-group-item list-group-item-action border-0"
              >
                <div className="d-flex align-items-start">
                  <img
                    src={
                      rooms[index].imageUrl ? rooms[index].imageUrl : features2
                    }
                    className="rounded-circle mr-1"
                    alt="Vanessa Tucker"
                    width="50"
                    height="50"
                  />
                  <div className="barshowData">
                    <div>
                      <h5>
                        {rooms[index].name ? rooms[index].name : "no name"}
                      </h5>
                      <div className="lastmessagename text-success">
                        {rooms[index].lastMessage
                          ? rooms[index].lastMessage.author.name
                          : ""}
                      </div>
                    </div>
                    <div className="small">
                      <span className=""></span>{" "}
                      <TimeAgo
                        datetime={
                          new Date(
                            rooms[index].lastMessage
                              ? rooms[index].lastMessage.createdTime
                              : rooms[index].createdAt
                          )
                        }
                      ></TimeAgo>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </>
    );
  }
};

export default NavItem;
