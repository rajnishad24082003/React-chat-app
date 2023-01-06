import React, { useState } from "react";
import { auth } from "../misc/firebase";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  linkWithPopup,
  unlink,
} from "firebase/auth";
function Provider() {
  let [IsConnected, setIsConnected] = useState({
    "google.com": auth.currentUser
      ? auth.currentUser.providerData.some(
          (data) => data.providerId === "google.com"
        )
      : false,
    "facebook.com": auth.currentUser
      ? auth.currentUser.providerData.some(
          (data) => data.providerId === "facebook.com"
        )
      : false,
  });
  const authnew = getAuth();
  let [popupmessage, setpopupmessage] = useState(null);
  let googlelink = async () => {
    try {
      await linkWithPopup(authnew.currentUser, new GoogleAuthProvider());
      setIsConnected((prev) => {
        return { "google.com": true, "facebook.com": prev["facebook.com"] };
      });
    } catch (err) {
      setpopupmessage(
        <div className="alert alert-danger p-0" role="alert">
          account does not exist
        </div>
      );
      setTimeout(() => {
        setpopupmessage(null);
      }, 2000);
    }
  };

  let googleunlink = async () => {
    if (auth.currentUser.providerData.length === 1) {
      setpopupmessage(
        <div className="alert alert-danger p-0" role="alert">
          there should be atleast one provider
        </div>
      );
      setTimeout(() => {
        setpopupmessage(null);
      }, 2000);
    } else {
      await unlink(authnew.currentUser, "google.com");
      setIsConnected((prev) => {
        return { "google.com": false, "facebook.com": prev["facebook.com"] };
      });
    }
  };

  let facebooklink = async () => {
    try {
      await linkWithPopup(authnew.currentUser, new FacebookAuthProvider());
      setIsConnected((prev) => {
        return { "facebook.com": true, "google.com": prev["google.com"] };
      });
    } catch (err) {
      console.log(err);

      setpopupmessage(
        <div className="alert alert-danger p-0" role="alert">
          account does not exist
        </div>
      );
      setTimeout(() => {
        setpopupmessage(null);
      }, 2000);
    }
  };

  let facebookunlink = async () => {
    if (auth.currentUser.providerData.length === 1) {
      setpopupmessage(
        <div className="alert alert-danger p-0" role="alert">
          there should be atleast one provider
        </div>
      );
      setTimeout(() => {
        setpopupmessage(null);
      }, 2000);
    } else {
      await unlink(authnew.currentUser, "facebook.com");
      setIsConnected((prev) => {
        return { "facebook.com": false, "google.com": prev["google.com"] };
      });
    }
  };

  return (
    <>
      <div className="p-1 text-center">
        {IsConnected["google.com"] ? (
          <button
            type="button"
            className="btn btn-success p-1 position-relative m-1"
          >
            google
            <span
              className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
              onClick={googleunlink}
            ></span>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success p-1 position-relative m-1"
          >
            google
            <span
              className="position-absolute top-0 start-100 translate-middle p-2 bg-dark border border-light rounded-circle"
              onClick={googlelink}
            ></span>
          </button>
        )}

        {IsConnected["facebook.com"] ? (
          <button
            type="button"
            className="btn btn-primary p-1 position-relative m-1"
          >
            facebook
            <span
              className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
              onClick={facebookunlink}
            ></span>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary p-1 position-relative m-1"
          >
            facebook
            <span
              className="position-absolute top-0 start-100 translate-middle p-2 bg-dark border border-light rounded-circle"
              onClick={facebooklink}
            ></span>
          </button>
        )}
        {popupmessage}
      </div>
    </>
  );
}

export default Provider;
