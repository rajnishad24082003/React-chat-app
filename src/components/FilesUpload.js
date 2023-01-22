import { useState } from "react";
import { Modal, Button } from "rsuite";
import Uploader from "./Uploader";
import Loading from "./Loading";
import {
  uploadBytes,
  getDownloadURL,
  ref as ref_storage,
} from "firebase/storage";
import { useRooms } from "../context/Room.context";
import { storage, database } from "../misc/firebase";
import {
  ref as ref_database,
  push,
  update,
  serverTimestamp,
} from "firebase/database";
import { useParams } from "react-router";
import { useProfile } from "../context/profile.context";

function FilesUpload() {
  let { id } = useParams();
  let [Isloading, setIsloading] = useState(false);
  let MAXSIZE = 1024 * 1000 * 10; //10mb
  let FileClick = () => {
    document.getElementById("allfiles").click();
  };
  let { profile } = useProfile();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  let { rooms } = useRooms();
  let currentRoom;
  if (rooms) {
    rooms.map((val) => {
      if (val.id === id) {
        currentRoom = val;
      }
      return null;
    });
  }

  let messageSend = async (val) => {
    const starCountRef = ref_database(database, `chats`);
    const newpostkey = push(starCountRef).key;
    const updates = {};
    updates[`/chats/${newpostkey}`] = {
      roomId: currentRoom.id,
      author: {
        name: profile.name,
        uid: profile.uid,
        createdAt: profile.createdAt,
        ...(profile.image ? { profileAvatar: profile.avatar } : {}),
      },
      createdTime: serverTimestamp(),
      val,
    };
    updates[`/rooms/${currentRoom.id}/lastMessage`] = {
      roomId: currentRoom.id,
      author: {
        name: profile.name,
        uid: profile.uid,
        createdAt: profile.createdAt,
        ...(profile.image ? { profileAvatar: profile.avatar } : {}),
      },
      createdTime: serverTimestamp(),
      val,
      msgId: newpostkey,
    };
    update(ref_database(database), updates);
  };
  let afterUpload = (val) => {
    messageSend(val);
  };
  let UploadandClose = async () => {
    try {
      setIsloading(true);
      let UploadPromises = wholeFiles.map(async (val, index) => {
        let RandomName = `${val.name}${new Date()}`;
        let storageRef = ref_storage(storage, `chats/${id}/${RandomName}`);
        let finallyUploadedPromises = await uploadBytes(storageRef, val, {
          cacheControl: `public,max-age=${3600 * 24 * 3}`,
        });
        return finallyUploadedPromises;
      });

      let uploadSnapshots = await Promise.all(UploadPromises);
      let shapPromises = uploadSnapshots.map(async (val, index) => {
        return {
          contentType: val.metadata.contentType,
          name: val.metadata.name,
          url: await getDownloadURL(
            ref_storage(storage, val.metadata.fullPath)
          ),
        };
      });
      let files = await Promise.all(shapPromises);
      await afterUpload(files);
      setIsloading(false);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  let [wholeFiles, setwholeFiles] = useState([]);
  let mainfilefun = (e) => {
    let filterFiles = Object.values(e.target.files)
      .filter((el) => el.size <= MAXSIZE)
      .slice(0, 5);
    setwholeFiles(filterFiles);
    setOpen(true);
  };
  return (
    <>
      <i
        className="border bi bi-file-earmark-arrow-up align-middle p-2 rounded-start"
        onClick={FileClick}
      ></i>
      <input
        type="file"
        id="allfiles"
        style={{ display: "none" }}
        accept=""
        onChange={mainfilefun}
        multiple="multiple"
      />

      <Modal keyboard={false} open={open} onClose={handleClose}>
        {Isloading ? <Loading></Loading> : ""}
        <Modal.Header>
          <Modal.Title>Avatar</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Uploader data={wholeFiles}></Uploader>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={UploadandClose} appearance="primary">
            Upload
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FilesUpload;
