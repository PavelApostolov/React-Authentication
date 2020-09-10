import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FormWrapper,
  LoginButton,
  CustomInput,
  FieldsWrapper,
} from "./AuthStyles";
import * as actions from "../store/actions";

const Auth = ({ onAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
    setInvalidUsername(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setInvalidPassword(false);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!username || !password) {
      if (!username) setInvalidUsername(true);
      if (!password) setInvalidPassword(true);
      return;
    }
    onAuth(username, password);
  };

  return (
    <FormWrapper>
      <FieldsWrapper>
        <form data-testid="form" onSubmit={handleSubmit}>
          <CustomInput
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleNameChange}
            invalid={invalidUsername}
          />
          <CustomInput
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            invalid={invalidPassword}
          />
          <LoginButton type="submit">Login</LoginButton>
        </form>
      </FieldsWrapper>
    </FormWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username: string, password: string) =>
      dispatch(actions.auth(username, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
