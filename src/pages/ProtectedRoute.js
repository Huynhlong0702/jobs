import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import useAuth from "../hook/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  //   console.log(useAuth);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
