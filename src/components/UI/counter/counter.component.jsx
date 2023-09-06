import React, { useState } from "react";

import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { StyledButton, StyledInput } from "./counter.styles";

const Counter = ({ counterValue = 0 }) => {
  const [count, setCount] = useState(counterValue);
  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 0));
  };
  return (
    <Stack direction="row" spacing="8px" alignItems="center">
      <StyledButton onClick={() => setCount((prev) => prev - 1)} disabled={count === 0}>
        <RemoveIcon fontSize="16px" />
      </StyledButton>
      <StyledInput onChange={handleChange} value={count} />
      <StyledButton onClick={() => setCount((prev) => prev + 1)}>
        <AddIcon fontSize="16px" />
      </StyledButton>
    </Stack>
  );
};

export default Counter;
