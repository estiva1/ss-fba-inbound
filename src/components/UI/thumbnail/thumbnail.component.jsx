import React from "react";
import { StyledThumbnail, ThumbnailText } from "./thumbnail.styles";

const Thumbnail = ({ primaryColor, secondaryColor, text, enlarged }) => {
  return (
    <StyledThumbnail enlarged={enlarged} borderColor={primaryColor} backgroundColor={secondaryColor}>
      <ThumbnailText enlarged={enlarged} color={primaryColor}>
        {text}
      </ThumbnailText>
    </StyledThumbnail>
  );
};

export default Thumbnail;
