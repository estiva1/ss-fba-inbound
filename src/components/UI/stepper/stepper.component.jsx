import React from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { Container, Step, StepConnector, StepLabel, StepLabelActive } from "./stepper.styles";

const Stepper = () => {
  return (
    <Container>
      <Step>
        <CheckCircleIcon color="success" sx={{ fontSize: 18 }} />
        <StepLabel>Add Tracking/Pro #</StepLabel>
      </Step>
      <StepConnector />
      <Step>
        <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 18 }} />
        <StepLabelActive>Add Checkin Quantities</StepLabelActive>
      </Step>
    </Container>
  );
};

export default Stepper;
