import Box from "@mui/material/Box";
import React, { useState } from "react";
import { SliderValueContainer, StyledSlider, Value } from "./slider.styles";

const sliderWidth = 300;
const valueLabelFormat = (value) => {
  const unit = "%";
  let scaledValue = value;

  return `${scaledValue}${unit}`;
};

const calculateValue = (value) => {
  return value;
};

const calculateBottomValue = (bottomValue) => {
  return bottomValue ** 2;
};

export const CustomizedSlider = () => {
  const [value, setValue] = useState(30);
  const [bottomValue, setBottomValue] = useState(calculateBottomValue(value)); // just for example

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      setBottomValue(newValue ** 2); // just for example too
    }
  };
  return (
    <Box sx={{ position: "relative", width: sliderWidth }}>
      <StyledSlider
        value={value}
        // defaultValue={value}
        min={0}
        max={100}
        step={1}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <SliderValueContainer left={(value / 100) * sliderWidth}>
        <Value>{bottomValue} Units</Value>
      </SliderValueContainer>
    </Box>
  );
};
