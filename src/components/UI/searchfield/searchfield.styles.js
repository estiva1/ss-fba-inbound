import { InputBase, Paper } from "@mui/material";
import { styled as mStyled } from "@mui/material/styles";

export const StyledPaper = mStyled(Paper)(() => ({
  height: "32px",
  paddingLeft: "4px",
  display: "flex",
  alignItems: "center",
  width: 400,
  boxShadow: "none",
  border: "1px solid #E6E6E6",

  "&:focus": {
    boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1) !important",
  },
}));

export const StyledInput = mStyled(InputBase)(() => ({
  paddingBottom: "2px",
  fontFamily: "Titillium Web",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1rem",

  "& input::placeholder": {
    color: "black",
  },
}));
