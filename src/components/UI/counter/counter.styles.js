import { Container, Button, TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "#1565D8",
  backgroundColor: "#fff",
  border: "1px solid #1565D8",
  borderRadius: "50%",
  padding: 0,
  minWidth: "16px",
  "&:hover": {
    backgroundColor: "#1565D808",
  },
}));

export const StyledInput = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: 0,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "4px",
      borderColor: "#E6E6E6",

      transition: "all 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300],
      transition: "all 0.3s ease",
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500],
      transition: "all 0.3s ease",
    },
    "& input": {
      textAlign: "center",
      width: "32px",
      height: "30px",
      color: blueGrey[700],
    },
  },
});
