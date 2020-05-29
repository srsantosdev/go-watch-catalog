import React from "react";

import { CancelText, ContainerCancel, ContainerOk, OkText } from "./styles";

export const OK = ({ children, ...props }) => {
  return (
    <ContainerOk {...props}>
      <OkText>{children}</OkText>
    </ContainerOk>
  );
};

export const Cancel = ({ children, ...props }) => {
  return (
    <ContainerCancel {...props}>
      <CancelText>{children}</CancelText>
    </ContainerCancel>
  );
};
