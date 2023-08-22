import React from "react";
import Chip from "@mui/material/Chip";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { ChipLabel, ChipValue, StyledChip } from "./chip.styles";

const ChipText = ({ username = "John" }) => {
  return (
    <ChipLabel>
      Filtered by user: <ChipValue>{username}</ChipValue>
    </ChipLabel>
  );
};

const DeletableChip = () => {
  const handleClick = () => {
    console.info("You clicked the Chip");
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon");
  };

  return (
    <StyledChip
      label={<ChipText />}
      variant="outlined"
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<HighlightOffOutlinedIcon />}
    />
  );
};

export default DeletableChip;
