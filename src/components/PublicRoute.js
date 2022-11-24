import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const profile = false;

  if (profile) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default PublicRoute;
