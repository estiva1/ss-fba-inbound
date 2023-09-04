import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot {
    color: #78909c;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    //line-height: 1rem;
  }

  .MuiFormLabel-root {
    color: #78909c;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    padding-top: 1px;
  }
  .MuiAutocomplete-clearIndicator {
    color: #1565d8;
  }
  .MuiAutocomplete-popupIndicator {
    color: #1565d8;
  }
`;

export const ListBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* margin-left: 16px;
  margin-right: 16px;
  margin-top: 8px;

  &:last-child {
    margin-bottom: 8px;
  } */
`;

export const PrimaryText = styled.h3`
  color: #000;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  text-transform: capitalize;
  margin: 0;
`;

export const SecondaryText = styled.h4`
  color: #979797;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  border-bottom: 1px solid #EEF1F5;
`;
