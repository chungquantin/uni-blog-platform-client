import React from "react";
import * as Style from "./styles/Form";

function Form({ children, ...restProps }) {
  return <Style.Container {...restProps}>{children}</Style.Container>;
}

export default Form;
