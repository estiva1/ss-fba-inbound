import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { StyledInput, StyledPaper } from "./searchfield.styles";

const CustomizedSearchField = ({ placeholder, ariaLabel }) => {
  return (
    <StyledPaper component="form">
      <StyledInput sx={{ ml: 1, flex: 1 }} placeholder={placeholder} inputProps={{ "aria-label": ariaLabel }} />
      <IconButton type="button" aria-label="search">
        <SearchIcon sx={{ color: "#1565D8", width: "16px", height: "16px" }} />
      </IconButton>
    </StyledPaper>
  );
};

export default CustomizedSearchField;
