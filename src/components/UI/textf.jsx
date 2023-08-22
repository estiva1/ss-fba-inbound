// src/components/TextFieldComponent.js
import React from "react";
import { TextField } from "@mui/material";

const TextFieldComponent = ({ filterText, setFilterText }) => {
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return <TextField label="Filter by Name" variant="outlined" value={filterText} onChange={handleFilterChange} />;
};

export default TextFieldComponent;
