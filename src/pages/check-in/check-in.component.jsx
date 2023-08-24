import React from "react";
import { CheckInContainer, Heading } from "./check-in.styles";
import { Stack } from "@mui/material";
import arrowRightShortIcon from "../../assets/arrow-right-short-icon.png";
import IconButton from "../../components/UI/buttons/icon-button/icon-button.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../../components/UI/buttons/button/button.component";
import CheckInItem from "../../components/UI/check-in-item/check-in-item.component";

const CheckIn = () => {
  const handleClick = () => {
    // Click handler logic here
  };

  return (
    <CheckInContainer>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing="12px" alignItems="center">
          <IconButton src={arrowRightShortIcon} alt="Back" onClick={handleClick} rotated enlarged />
          <Heading>Check In</Heading>
        </Stack>
        <Stack direction="row" spacing="20px" alignItems="center">
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.whiteStretched} width="max-content">
            Check-in with Order Quantity
            <Ripple color="#1565D8" />
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.whiteStretched} width="max-content">
            Check-in with on invoice Quantity
            <Ripple color="#1565D8" />
          </Button>
        </Stack>
      </Stack>

      <CheckInItem />
    </CheckInContainer>
  );
};

export default CheckIn;
