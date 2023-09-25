import React from "react";
import { InputAdornment } from "@mui/material";
import { StyledMenyItem, StyledTextField, TextFieldMenu } from "./text-field-with-dropdown.styles";

const TextFieldWithDropdown = ({ units, value, dropdownItem, onDropdownItemChange, ...props }) => {
  return (
    <StyledTextField
      {...props}
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <TextFieldMenu size="small" select value={dropdownItem} onChange={onDropdownItemChange}>
              {units.map((option) => (
                <StyledMenyItem key={option.id} value={option.label}>
                  {option.label}
                </StyledMenyItem>
              ))}
            </TextFieldMenu>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TextFieldWithDropdown;
