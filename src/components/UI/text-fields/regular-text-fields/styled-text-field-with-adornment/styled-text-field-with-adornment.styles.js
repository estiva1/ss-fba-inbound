import styled from "styled-components";
import { FormControl, InputAdornment } from "@mui/material";

export const StyledFormControl = styled(FormControl)`
  .MuiInputBase-root,
  .MuiFormLabel-root {
    color: #4e5969;
    text-align: right;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const StyledInputAdornment = styled(InputAdornment)`
  .MuiTypography-root {
    color: #4e5969;
    text-align: right;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
  }
`;
