import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { StyledMenuItem, StyledSelect } from "./dropdown.styles";

const Dropdown = () => {
  const [user, setUser] = useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth >
        <StyledSelect value={user} onChange={handleChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
          <StyledMenuItem value="">User</StyledMenuItem>
          <StyledMenuItem value="User 1">User 1</StyledMenuItem>
          <StyledMenuItem value="User 2">User 2</StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </div>
  );
};

export default Dropdown;
