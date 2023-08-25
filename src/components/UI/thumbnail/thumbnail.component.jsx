import React from "react";
import { StyledThumbnail, ThumbnailText } from "./thumbnail.styles";

const Thumbnail = ({ primaryColor, secondaryColor, text }) => {
  return (
    <StyledThumbnail borderColor={primaryColor} backgroundColor={secondaryColor}>
      <ThumbnailText color={primaryColor}>{text}</ThumbnailText>
    </StyledThumbnail>
  );
};

export default Thumbnail;
