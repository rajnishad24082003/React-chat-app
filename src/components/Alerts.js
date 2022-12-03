import React, { useState } from "react";

function Alerts({ messageType, message, time }) {
  //info
  //danger
  //primary
  //success
  let Iconstring;
  let Iconcol;
  switch (messageType) {
    case "info": {
      Iconstring = "bi bi-exclamation-circle";
      Iconcol = "blue";
      break;
    }

    case "danger": {
      Iconstring = "bi bi-exclamation-triangle";
      Iconcol = "red";
      break;
    }

    case "primary": {
      Iconstring = "bi bi-check-all";
      Iconcol = "blue";
      break;
    }
    case "success": {
      Iconstring = "bi bi-check-circle";
      Iconcol = "#228b22";
      break;
    }
    default: {
      Iconstring = null;
      message = "incorrect message type selected";
    }
  }
  let [Alertpopup, setAlertpopup] = useState(
    <>
      <div
        className={`alert alert-${messageType} p-1 `}
        role="alert"
        style={{ textAlign: "center" }}
      >
        <i className={`${Iconstring} p-1`} style={{ color: `${Iconcol}` }}></i>
        {message}
      </div>
    </>
  );
  setTimeout(() => {
    return setAlertpopup(() => {
      return null;
    });
  }, time * 1000);
  return <>{Alertpopup}</>;
}

export default Alerts;
