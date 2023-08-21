import React from "react";
import { StyledImage } from "./icon-button.styles";

const IconButton = ({ src, alt, onClick }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};

export default IconButton;
