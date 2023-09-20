import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ListBoxContainer, ListItem, PrimaryText, SecondaryText, StyledAutocomplete } from "./custom-dropdown.styles";

const ListBox = ({ username, companyName = "", email = "" }) => {
  return (
    <ListBoxContainer>
      <PrimaryText>{username}</PrimaryText>
      <SecondaryText>{email}</SecondaryText>
      <SecondaryText>{companyName}</SecondaryText>
    </ListBoxContainer>
  );
};

const CustomDropdown = ({ data, placeholder = "Select", setSelectedUsername, fullWidth, disabled }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
    setSelectedUsername(newValue?.username || null);
  };

  return (
    <StyledAutocomplete
      id="controllable-states-demo"
      fullWidth={fullWidth}
      size="small"
      disabled={disabled}
      value={value}
      options={data}
      inputValue={inputValue}
      onChange={handleValueChange}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => `${option.username}`}
      renderInput={(params) => <TextField label={placeholder} {...params} />}
      renderOption={(props, option, state) => {
        return (
          <ListItem {...props}>
            <ListBox username={option.username} companyName={option.companyName} email={option.email} />
          </ListItem>
        );
      }}
    />
  );
};

export default CustomDropdown;
