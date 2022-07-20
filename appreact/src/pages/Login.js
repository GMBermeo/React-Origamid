import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function logar() {
    console.log("Fazer login");
    navigate("/");
  }
  return (
    <>
      <h1>Login</h1>
      <button onClick={logar}>Login</button>
    </>
  );
};

export default Login;
