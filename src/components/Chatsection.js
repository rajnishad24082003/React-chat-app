import { React, useState, useEffect } from "react";
import "../assets/css/chatsection.css";
import Sendersec from "./chatsection/Sendersec";
import { CurrentRoomProvider } from "../context/current-room-context";
import { useRooms } from "../context/Room.context";
import Loading from "./Loading";
import { useParams } from "react-router";
import spacefillimg from "../assets/img/features-2.png";
import Audio from "./Audio";
import FilesUpload from "./FilesUpload";
import { off, push, ref, update } from "firebase/database";
import { httpsCallable } from "firebase/functions";
import { database, functions } from "../misc/firebase";
import { Modal, Button } from "rsuite";
import TimeAgo from "timeago-react";
import { useProfile } from "../context/profile.context";
import { serverTimestamp, onValue } from "firebase/database";
import { query } from "firebase/database";

function Chatsection() {
  let [titleInput, settitleInput] = useState("");
  let titleNoti = (e) => {
    settitleInput(e.target.value);
  };
  let [descInput, setdescInput] = useState("");
  let descNoti = (e) => {
    setdescInput(e.target.value);
  };
  let chatId = useParams();
  let sendNotification = async (e) => {
    e.preventDefault();
    try {
      const sendFcm = httpsCallable(functions, "fcmSend");
      // const sendFcm = functions.httpsCallable("fcmSend");
      await sendFcm(chatId.id, titleInput, descInput);
      setdescInput("");
      settitleInput("");
      handleCloseplusIconnoti(true);
    } catch (error) {
      console.log(error);
    }
  };
  let [allmsg, setallmsg] = useState(null);
  useEffect(() => {
    const msgdataFromdatabase = query(ref(database, "/chats"));

    onValue(msgdataFromdatabase, (snapshot) => {
      const alltheroomsdata = snapshot.val();
      let transformedData = Object.keys(alltheroomsdata).map((val, index) => {
        return {
          ...alltheroomsdata[val],
          id: val,
        };
      });
      setallmsg(transformedData);
    });
    return () => {
      off(msgdataFromdatabase, "value");
    };
  }, [chatId]);
  let [inputdata, setInputdata] = useState("");
  let inputtextfun = (e) => {
    setInputdata(e.target.value);
  };
  let { profile } = useProfile();
  const [plusIconopen, setplusIconOpen] = useState(false);
  const handleCloseplusIcon = () => setplusIconOpen(false);

  const [notiIconopen, setnotiIconOpen] = useState(false);
  const handleCloseplusIconnoti = () => setnotiIconOpen(false);
  let threeDotsbtn = () => {
    setplusIconOpen(true);
  };
  let notificationbtn = () => {
    setnotiIconOpen(true);
  };
  let { rooms } = useRooms();
  if (!rooms) {
    return <Loading />;
  } else {
    let currentRoom;
    rooms.map((val) => {
      if (val.id === chatId.id) {
        currentRoom = val;
      }
      return null;
    });

    let assembledData = currentRoom
      ? {
          roomId: currentRoom.id,
          author: {
            name: profile.name,
            uid: profile.uid,
            createdAt: profile.createdAt,
            ...(profile.image ? { profileAvatar: profile.avatar } : {}),
          },
          createdTime: serverTimestamp(),
          inputMessage: inputdata,
        }
      : {};
    let messageSend = async (e) => {
      const starCountRef = ref(database, `chats`);
      const newpostkey = push(starCountRef).key;
      const updates = {};
      updates[`/chats/${newpostkey}`] = assembledData;
      updates[`/rooms/${currentRoom.id}/lastMessage`] = {
        ...assembledData,
        msgId: newpostkey,
      };
      update(ref(database), updates);
      setInputdata("");
    };
    let enterIspressed = (e) => {
      if (e.keyCode === 13) {
        messageSend();
      }
    };
    let num = allmsg.length;
    let descOrdered = [];

    allmsg.map((val, index) => {
      descOrdered[num - 1 - index] = allmsg[index];
      return null;
    });
    allmsg = descOrdered;

    if (currentRoom) {
      return (
        <CurrentRoomProvider data={currentRoom}>
          <div className="chatsectionmaindiv">
            <div className="chatsectionseconddiv">
              <div className="headerofchat">
                <div className="d-flex align-items-start">
                  <img
                    src={currentRoom ? currentRoom.imageUrl : spacefillimg}
                    className="rounded-circle mr-1"
                    alt="Vanessa Tucker"
                    width="50"
                    height="50"
                  />
                  <div className="flex-grow-1 ml-3">
                    <h5>{currentRoom ? currentRoom.name : "no name"}</h5>
                    <div className="small">
                      <span className="fas fa-circle chat-online"></span>{" "}
                      <h6>status</h6>
                    </div>
                  </div>
                  <div
                    className="btn p-3 rounded-circle"
                    onClick={notificationbtn}
                  >
                    <i className="bi bi-app-indicator"></i>
                  </div>
                  <div
                    className="btn p-3 rounded-circle"
                    onClick={threeDotsbtn}
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
                </div>
              </div>
              <div className="chatsfromboth mt-3">
                {allmsg
                  ? allmsg.map((val, index) => {
                      if (chatId.id === allmsg[index].roomId) {
                        return (
                          <Sendersec
                            valData={val}
                            uid={val.author.uid}
                            key={val.id}
                          ></Sendersec>
                        );
                      }
                      return null;
                    })
                  : ""}
              </div>
              <div className="flex-grow-0 py-3 px-4 border-top">
                <div className="input-group">
                  <FilesUpload></FilesUpload>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message"
                    onChange={inputtextfun}
                    value={inputdata}
                    onKeyDown={enterIspressed}
                  />
                  <Audio></Audio>
                  <button className="btn sendbtn" onClick={messageSend}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal
            keyboard={false}
            open={notiIconopen}
            onClose={handleCloseplusIconnoti}
          >
            <form>
              <Modal.Header>
                <Modal.Title>Send notifications to group members</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <h5>title</h5>
                  <input
                    type="text"
                    onChange={titleNoti}
                    value={titleInput}
                  ></input>
                </div>

                <div className="mt-4">
                  <h5>Description</h5>
                  <input
                    type="text"
                    onChange={descNoti}
                    value={descInput}
                  ></input>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn sendbtn" onClick={sendNotification}>
                  Send
                </button>
                <Button onClick={handleCloseplusIconnoti} appearance="subtle">
                  Cancel
                </Button>
              </Modal.Footer>
            </form>
          </Modal>

          <Modal
            keyboard={false}
            open={plusIconopen}
            onClose={handleCloseplusIcon}
          >
            <form>
              <Modal.Header>
                <Modal.Title>chatroom</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <h5>Name</h5>
                  <p>{currentRoom.name}</p>
                </div>

                <div className="mt-4">
                  <h5>Description</h5>
                  <p>{currentRoom.description}</p>
                  <p>
                    <b>Create Time: </b>
                    <TimeAgo datetime={currentRoom.createdAt}></TimeAgo>
                  </p>
                </div>
                <div className="mt-4">
                  <h5>Group Icon</h5>
                  <img src={currentRoom.imageUrl} alt="" />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleCloseplusIcon} appearance="subtle">
                  Cancel
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </CurrentRoomProvider>
      );
    } else {
      return (
        <div className="chatsectionmaindiv bg-black bg-opacity-10">
          <div className="startingPageDiv ">
            <h1 className=" socailIocn bg-white">SOCIAL</h1>
            <h3 className="p-2">Connect with people</h3>
          </div>
        </div>
      );
    }
  }
}

export default Chatsection;
