import React from "react";
import { StyledTextField } from "./table-cell-textfield.styles";

const TableCellTextfield = (...props) => {
  return <StyledTextField {...props} id="outlined-helperText" defaultValue="0" />;
};

export default TableCellTextfield;
