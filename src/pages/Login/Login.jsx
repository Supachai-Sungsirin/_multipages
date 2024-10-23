import { useRef } from "react";

import Form from "react-bootstrap/Form";
import { verifyUser } from "../../data/users";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/_multipages/logo.png" alt="" />
      </div>

      <Form.Label
        htmlFor="username"
        className="badge bg-info mt-1"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <span className="bi bi-person fs-6"></span>&nbsp;Username
      </Form.Label>
      <Form.Control
        type="text"
        id="username"
        placeholder="user"
        style={{ textAlign: "center" }}
        ref={userRef}
      />
      <Form.Label
        htmlFor="password"
        className="badge bg-info mt-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <span className="bi bi-key fs-6"></span>&nbsp;Password
      </Form.Label>
      <Form.Control
        type="password"
        id="password"
        placeholder="pass"
        style={{ textAlign: "center" }}
        ref={passRef}
      />

      <button
        className="btn btn-danger mt-3 me-5"
        onClick={() => {
          userRef.current.value = "";
          passRef.current.value = "";
          userRef.current.focus(); // ตั้งให้ cursor กลับไปที่ช่อง Username
        }}
      >
        Clear
      </button>

      <button
        className="btn btn-success mt-3"
        onClick={() => {
          const user = userRef.current.value.trim();
          const pass = passRef.current.value.trim();
          const userInfo = verifyUser(user, pass);
          userRef.current.value = "";
          passRef.current.value = "";
          if (userInfo === null) {
            alert("Wrong username or password");
            userRef.current.focus();
          } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
