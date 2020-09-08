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

  const handleNameChange = ({ target: { value } }) => {
    setUsername(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) return;
    onAuth(username, password);
  };

  return (
    <FormWrapper>
      <FieldsWrapper>
        <form onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleNameChange}
          />
          <CustomInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
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
    onAuth: (username, password) => dispatch(actions.auth(username, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
