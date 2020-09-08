import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  box-shadow: 0 5px 50px 0 rgba(124, 122, 153, 0.1);
  border-radius: 16px;
`;

export const FieldsWrapper = styled.div`
  text-align: center;
`;

export const LoginButton = styled.button`
  display: inline-block;
  font-size: 16px;
  text-align: center;
  color: #fff;
  border-radius: 6px;
  height: 30px;
  width: 150px;
  background-color: #0033ff;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: #002ce0;
  }
`;

export const CustomInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 7px;
  border: solid 2px #cfcedb;
  padding: 5px;
  font-size: 14px;
  outline: none;
  box-shadow: none;
  margin: 5px;
`;
