import { styled as mStyled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

import { Select } from "@mui/material";

export const StyledSelect = mStyled(Select)(() => ({
  height: "32px",
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
  color: "#78909C",
  paddingTop: "4px",
  fontFamily: "Titillium Web",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1rem",

  "& input": {
    borderColor: "black",
  },
}));

export const StyledMenuItem = mStyled(MenuItem)(() => ({
  color: "#78909C",
  fontFamily: "Titillium Web",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1rem",
}));
