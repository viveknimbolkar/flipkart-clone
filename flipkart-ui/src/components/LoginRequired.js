import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginRequired({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("token");
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, []);
  return <>{children}</>;
}

export default LoginRequired;
