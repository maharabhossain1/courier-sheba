import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hook/useAuth";

export default function Login() {
  const {
    setIsLogin,
    setName,
    setEmail,
    setPassword,
    email,
    password,
    setError,
    processLogin,
    registerNewUser,
    isLogin,
    handleResetPassword,
    error,
    handleGoogleSignIn,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleLogin = () => {
    handleGoogleSignIn()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };
  return (
    <div className="w-75 m-auto my-5">
      <Form onSubmit={handleRegistration}>
        <div className="home-text my-3">
          <h3>Wlcome to {isLogin ? "Login" : "Registration"}</h3>
        </div>
        {!isLogin && (
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              onBlur={handleNameChange}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
        )}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={toggleLogin}
            type="checkbox"
            label="Already Have an Account"
          />
        </Form.Group>

        <div className="row mb-3 text-danger">{error}</div>
        <Button className="btn-custom-color" type="submit">
          {isLogin ? "Login" : "Register"}
        </Button>
        {isLogin && (
          <p className="mt-2" onClick={handleResetPassword}>
            <u> Forget your password?</u>
          </p>
        )}
      </Form>
      <Button className="my-3 btn-custom-color" onClick={handleLogin}>
        Google Sign In
      </Button>
    </div>
  );
}
