import React, { useState, useEffect } from "react";

import { Container, ButtonSwitch, ButtonSwitchText } from "./styles";

function MoviesSeriesSwitch({option}) {
  const [active, setActive] = useState("MOVIES");

  useEffect(() => {
    option(active)
  }, [active])

  return (
    <Container>
      <ButtonSwitch
        active={active === "MOVIES"}
        onPress={() => setActive("MOVIES")}
      >
        <ButtonSwitchText active={active === "MOVIES"}>Filmes</ButtonSwitchText>
      </ButtonSwitch>
      <ButtonSwitch
        active={active === "SERIES"}
        onPress={() => setActive("SERIES")}
      >
        <ButtonSwitchText active={active === "SERIES"}>Series</ButtonSwitchText>
      </ButtonSwitch>
    </Container>
  );
}

export default MoviesSeriesSwitch;
