import React from "react";
import { Header } from "../../components";
import * as ASSETS from "../../constants/assets";

function AuthHeaderContainer() {
  return (
    <Header>
      <Header.Background src={ASSETS.AUTH_BACKGROUND} />
    </Header>
  );
}

export default AuthHeaderContainer;
