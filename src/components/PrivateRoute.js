import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const profile = false;

  if (!profile) {
    return <Navigate to="/signinup" />;
  } else {
    return children;
  }
}

export default PrivateRoute;
