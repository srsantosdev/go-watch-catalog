import React from "react";

import { StyledButton, ButtonText } from "./styles";

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
