import React from "react";
import { InputLabel, OutlinedInput } from "@mui/material";
import { StyledFormControl, StyledInputAdornment } from "./styled-text-field-with-adornment.styles";

const StyledTextFieldWithAdornment = ({ htmlFor, label, adornment, value, onChange, ...props }) => {
  return (
    <StyledFormControl {...props} size="small" variant="outlined">
      <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
      <OutlinedInput
        label={label}
        id={htmlFor}
        value={value}
        onChange={onChange}
        endAdornment={<StyledInputAdornment position="end">{adornment}</StyledInputAdornment>}
      />
    </StyledFormControl>
  );
};

export default StyledTextFieldWithAdornment;
