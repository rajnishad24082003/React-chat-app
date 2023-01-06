import React, { useRef, useState } from "react";
import { Modal } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import AvatarEditor from "react-avatar-editor";
import "../assets/css/sidebar.css";
import {
  uploadBytes,
  getDownloadURL,
  ref as ref_storage,
} from "firebase/storage";
import { storage } from "../misc/firebase";

function GroupIconUpload({ dataExchange }) {
  const [open, setOpen] = useState("none");
  const [foralert, setforalert] = React.useState(false);
  const foralerthandleClose = () => setforalert(false);

  let acceptedfileformate = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/svg",
    "image/webp",
    "image/gif",
  ];

  let isvalidfile = (file) => {
    return acceptedfileformate.includes(file.type);
  };
  let [mainimage, setmainimage] = useState(null);
  let mainfilefun = (e) => {
    if (e.target.files.length === 1 && isvalidfile(e.target.files[0])) {
      setOpen("block");
      setmainimage(e.target.files[0]);
      return;
    } else {
      setforalert(true);
      return;
    }
  };

  let fileuploadfunIcon = () => {
    document.getElementById("getFile2").click();
  };
  let avatarediterref = useRef();
  let getBlod = (canvas) => {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("file processing error"));
        }
      });
    });
  };

  let [donebtn, setdonebtn] = useState("primary");
  let UploadandClose = async () => {
    let randomName = `${mainimage.name}+${new Date()}`;
    const canvas = avatarediterref.current.getImageScaledToCanvas();
    try {
      const blob = await getBlod(canvas);
      const spaceRef = ref_storage(storage, `/groupImg/${randomName}`);
      await uploadBytes(spaceRef, blob);
      let downloadurl = await getDownloadURL(
        ref_storage(storage, `/groupImg/${randomName}`)
      );
      setdonebtn("success");
      dataExchange(downloadurl);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="a">
      <h3
        className="btn border border-dark d-flex justify-content-center"
        onClick={fileuploadfunIcon}
      >
        Upload
      </h3>
      <input
        type="file"
        id="getFile2"
        className="fileuploadbtn"
        accept="image/png, image/gif,image/jpg, image/jpeg,image/webp,image/svg"
        onChange={mainfilefun}
      ></input>
      <div className="avatardivsec">
        <div className="AvatarEditordiv" style={{ display: `${open}` }}>
          <AvatarEditor
            image={mainimage}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]}
            scale={1.2}
            rotate={0}
            borderRadius={200}
            ref={avatarediterref}
          />
          <br />
          <p className={`btn btn-${donebtn}`} onClick={UploadandClose}>
            done
          </p>
        </div>
      </div>

      <>
        <Modal keyboard={false} open={foralert} onClose={foralerthandleClose}>
          <Modal.Header>
            <Modal.Title>
              <div class="alert alert-danger" role="alert">
                <p>incorrect file type or multiple files selected</p>
              </div>
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    </div>
  );
}

export default GroupIconUpload;
