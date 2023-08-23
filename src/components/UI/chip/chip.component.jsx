import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { ChipLabel, ChipValue, StyledChip } from "./chip.styles";

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
    onDelete(); // Call the provided onDelete function to remove the chip
    clearInput(); // Call the provided clearInput function to clear the input
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
