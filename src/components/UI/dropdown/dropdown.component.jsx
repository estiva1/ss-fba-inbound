import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ListBoxContainer, ListItem, PrimaryText, SecondaryText, StyledAutocomplete } from "./dropdown.styles";

const ListBox = ({ username, companyName = "", email = "" }) => {
  return (
    <ListBoxContainer>
      <PrimaryText>{username}</PrimaryText>
      <SecondaryText>{email}</SecondaryText>
      <SecondaryText>{companyName}</SecondaryText>
    </ListBoxContainer>
  );
};

const Dropdown = ({ data, placeholder = "Select", setSelectedUsername }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
    setSelectedUsername(newValue?.username || null); // Update the selectedUsername state
  };

  return (
    <StyledAutocomplete
      size="small"
      value={value}
      onChange={handleValueChange}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={data}
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

export default Dropdown;
