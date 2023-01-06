import React from "react";
import { Modal, Button } from "rsuite";
import "../assets/css/audio.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { useState } from "react";
import { push, ref, update, serverTimestamp } from "firebase/database";
import { database, storage } from "../misc/firebase";
import { useParams } from "react-router";
import { useProfile } from "../context/profile.context";
import {
  getDownloadURL,
  ref as ref_storage,
  uploadBytes,
} from "firebase/storage";

function Audio() {
  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    { video: false }
  );
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    stopRecording();
  };
  let micClick = () => {
    setOpen(true);
  };
  let UploadandClose = async () => {
    try {
      messageSend();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  let [colour, setColour] = useState("colourGreen");
  let [RecordingState, setRecordingState] = useState("Start");
  let changeColor = () => {
    if (colour === "colourRed") {
      setColour("colourGreen");
      setRecordingState("Start");
      stopRecording();
    } else {
      setColour("colourRed");
      setRecordingState("Stop");
      startRecording();
    }
  };
  let { id } = useParams();
  let { profile } = useProfile();

  let messageSend = async (e) => {
    let RandomName = String(new Date() + "audioFile");
    const fileFormOfblo = await fetch(mediaBlobUrl)
      .then((r) => r.blob())
      .then(
        (blobFile) =>
          new File([blobFile], `${RandomName}File`, { type: "audio/wav" })
      );
    let storageRef = ref_storage(storage, `chats/${id}/${RandomName}`);
    await uploadBytes(storageRef, fileFormOfblo);
    let downloadUrlforDatabase = await getDownloadURL(storageRef);
    let assembledData = {
      roomId: id,
      author: {
        name: profile.name,
        uid: profile.uid,
        createdAt: profile.createdAt,
        ...(profile.image ? { profileAvatar: profile.avatar } : {}),
      },
      createdTime: serverTimestamp(),
      AudioData: downloadUrlforDatabase,
    };
    const starCountRef = ref(database, `chats`);
    const newpostkey = push(starCountRef).key;
    const updates = {};
    updates[`/chats/${newpostkey}`] = assembledData;
    updates[`/rooms/${id}/lastMessage`] = {
      ...assembledData,
      msgId: newpostkey,
    };
    update(ref(database), updates);
  };
  return (
    <>
      <i className="border bi bi-mic align-middle pt-2" onClick={micClick}></i>
      <audio id="audioTag">
        <source />
      </audio>
      <Modal keyboard={false} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Mic</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="OutterRecording">
            <button
              onClick={() => {
                changeColor();
              }}
              className={`StartRecording ${colour}`}
            >
              {RecordingState} Recording
            </button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls id="videoFileData" />
          </div>
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

export default Audio;
