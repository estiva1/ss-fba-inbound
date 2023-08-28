import { TextField } from "@mui/material";
import { styled as mStyled } from "@mui/material/styles";

export const StyledTextField = mStyled(TextField)(() => ({
  "& .MuiInputBase-root": {
    height: "24px",
    boxShadow: "none",
    boxShadow: "inset 0px 0px 0px 1px #1565D8",
    fontSize: "0.875rem ",
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1rem",
    padding: 0,
  },
}));
