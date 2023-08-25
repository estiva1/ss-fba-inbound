// import * as React from "react";
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";

// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// import { ColorlibConnector, ColorlibStepIconRoot, StepLabelThin } from "./stepper.styles";
// import { Box } from "@mui/material";

// const ColorlibStepIcon = (props) => {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <CheckCircleIcon color="success" />,
//     2: <CheckCircleOutlineIcon color="primary" />,
//   };

//   return (
//     <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// };

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };

// const steps = ["Add Tracking/Pro #", "Add Checkin Quantities"];

// const StyledStepper = () => {
//   return (
//     <Box sx={{ position: "absolute", width: "2000px" }}>
//       <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// };

// export default StyledStepper;

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
