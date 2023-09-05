import React, { useState } from "react";
import Box from "@mui/material/Box";
import { SliderValueContainer, StyledSlider, Value } from "./slider.styles";

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

export const CustomizedSlider = ({ sliderWidth = 300, sendBottomValue }) => {
  const [value, setValue] = useState(30);
  const [bottomValue, setBottomValue] = useState(calculateBottomValue(value)); // just for example

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      setBottomValue(newValue ** 2); // just for example too
      sendBottomValue(newValue ** 2);
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
