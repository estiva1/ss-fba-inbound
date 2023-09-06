import React from "react";
import Stack from "@mui/material/Stack";
import { Container, InfoText, SpoilerText } from "./info-bar.styles";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const InfoBar = ({ infoText, spoilerText, type }) => {
  const iconColor = type === "warning" ? "#FF9900" : "#00a3ff";

  return (
    <Container type={type}>
      <Stack direction="row" spacing="8px" alignItems="top">
        <ErrorOutlineOutlinedIcon sx={{ color: iconColor }} />
        <InfoText>{infoText}</InfoText>
      </Stack>
      <SpoilerText>{spoilerText}</SpoilerText>
    </Container>
  );
};

export default InfoBar;
