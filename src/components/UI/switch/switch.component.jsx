import React from "react";
import { StyledSwitch } from "./switch.styles";

const Switch = ({ checked, onChange }) => {
  return <StyledSwitch checked={checked} onChange={onChange} inputProps={{ "aria-label": "styled switch" }} />;
};

export default Switch;
