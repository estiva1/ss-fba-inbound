import React from "react";
import { ChipLabel, ChipValue, StyledChip } from "./chip.styles";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const ChipText = ({ value, filterType }) => {
  const labelText = filterType === "userName" ? "Filtered by user:" : "Filtered by vendor:";

  return (
    <ChipLabel>
      {labelText} <ChipValue>{value}</ChipValue>
    </ChipLabel>
  );
};

const DeletableChip = ({ value, filterType, onDelete, clearInput }) => {
  const handleClick = () => {
    console.info("You clicked the Chip");
  };

  const handleDelete = () => {
    onDelete(); 
    clearInput();
  };

  return (
    <StyledChip
      label={<ChipText value={value} filterType={filterType} />}
      variant="outlined"
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<HighlightOffOutlinedIcon />}
    />
  );
};

export default DeletableChip;
