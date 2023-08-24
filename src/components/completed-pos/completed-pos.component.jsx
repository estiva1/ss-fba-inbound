import React from "react";
import { Container, TwoPeoplePicture } from "./completed-pos.styles";
import InfoBar from "../UI/info-bar/info-bar.component";

const CompletedPOS = () => {
  return (
    <Container>
      <InfoBar infoText="There are X number of PO's in completed PO's." spoilerText="Click Here to View" />
      <TwoPeoplePicture />
    </Container>
  );
};

export default CompletedPOS;
