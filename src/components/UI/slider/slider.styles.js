import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";

import Slider from "@mui/material/Slider";

export const StyledSlider = mStyled(Slider)({
  color: "#1565D8",
  height: 6,
  "& .MuiSlider-track": {
    border: "none",
    position: "relative",
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 34,
    height: 34,
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: " 0.625rem",
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#1565D8",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export const SliderValueContainer = styled.div`
  position: absolute;
  left: ${(props) => props.left}px;
  transform: translate(-50%, -50%);
  width: max-content;
`;

export const Value = styled.h4`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem;
  margin: 0;
`;
