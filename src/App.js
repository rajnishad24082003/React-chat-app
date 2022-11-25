import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import SignInUp from "./components/SignInUp";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from "./context/profile.context";

function App() {
  return (
    <>
      <ProfileProvider>
        <Routes>
          <Route
            exact={true}
            path={"/"}
            element={
              <PrivateRoute>
                <Home></Home>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path={"/signinup"}
            element={
              <PublicRoute>
                <SignInUp></SignInUp>
              </PublicRoute>
            }
          ></Route>
          <Route
            exact={true}
            path={"/signinup"}
            element={<SignInUp></SignInUp>}
          ></Route>

          <Route exact={false} path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
      </ProfileProvider>
    </>
  );
}

export default App;
