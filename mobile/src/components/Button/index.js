import React from "react";

import { StyledButton } from "./styles";

const Button = ({ content, ...props }) => {
  return (
    <StyledButton {...props}>
      <ButtonText>{content}</ButtonText>
    </StyledButton>
  );
};

export default Button;
