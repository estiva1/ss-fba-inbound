import React from "react";
import Box from "@mui/material/Box";
import { linearProgressClasses } from "@mui/material";
import { BorderLinearProgress } from "./progress-bar.styles";

const CustomizedProgressBar = ({ progress = 0 }) => {
  const color = "#FFCB00"; // Set the color directly

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={progress}
        sx={{
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: color,
          },
        }}
      />
    </Box>
  );
};

export default CustomizedProgressBar;
