import React from "react";

import background from "./../../assets/images/AuthImage.jpg";
import logo from "./../../assets/logo.png";

const Login = () => {
  return (
    <BackgroundImage source={background}>
      <Container>
        <LogoImage source={logo} />
      </Container>
    </BackgroundImage>
  );
};

export default Login;
