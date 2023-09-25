import styled from "styled-components";
import { MenuItem, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  .MuiInputBase-root,
  .MuiFormLabel-root {
    color: #4e5969;
    text-align: right;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    padding-right: 0px;
  }
`;

export const TextFieldMenu = styled(TextField)`
  .MuiOutlinedInput-root {
    .Mui-focused fieldset {
      border: none;
    }
    fieldset {
      border: none;
    }
  }
  .MuiInputBase-root {
    color: #4e5969;
    text-align: right;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
  }

  .MuiSvgIcon-root {
    color: #1565D8;
  }
`;

export const StyledMenyItem = styled(MenuItem)`
  && {
    .MuiPaper-root & {
      color: #4e5969;
      text-align: right;
      font-family: Titillium Web;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
    }
  }
`;