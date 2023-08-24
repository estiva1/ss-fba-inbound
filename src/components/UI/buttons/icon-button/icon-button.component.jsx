import React from "react";
import { StyledImage } from "./icon-button.styles";

const IconButton = ({ src, alt, onClick, rotated, enlarged }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      rotated={rotated}
      enlarged={enlarged}
      onClick={onClick}
    />
  );
};

export default IconButton;
