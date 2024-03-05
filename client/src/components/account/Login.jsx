import React, { useState } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: white;
  height: 48px;
  border-radius: 2px;
`;

const SignUpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2f74f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  color: #878787;
`;
const Login = () => {
  const [account, setAccout] = useState("login");

  const toggleSignUp = () => {
    account === "login" ? setAccout("signup") : setAccout("login");
  };
  const imageUrl =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  return (
    <>
      <Component>
        <Box>
          <Image src={imageUrl} alt="WebLogo" />
          {account === "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Username" />
              <TextField variant="standard" label="Enter Password" />
              <LoginButton variant="contained">Login</LoginButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <SignUpButton onClick={() => toggleSignUp()}>
                Create an account
              </SignUpButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" label="Enter Name" />
              <TextField variant="standard" label="Enter Username" />
              <TextField variant="standard" label="Enter Password" />
              <SignUpButton variant="contained">Signup</SignUpButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignUp()}>
                Alredy have an account
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </>
  );
};

export default Login;
