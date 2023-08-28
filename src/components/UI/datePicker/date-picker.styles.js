import { styled as mStyled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

export const StyledDatePicker = mStyled(DatePicker)(() => ({
  "& .MuiInputBase-root": {
    height: "24px",
    boxShadow: "none",
    boxShadow: "inset 0px 0px 0px 1px #1565D8",
    fontSize: "0.875rem ",
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1rem",
  },
  "& .MuiSvgIcon-root": {
    width: "16px",
    height: "16px",
    color: "#1565D8",
  },
}));
