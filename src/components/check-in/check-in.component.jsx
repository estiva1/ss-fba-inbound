import React from "react";
import { CheckInContainer, Heading, ModalContent } from "./check-in.styles";
import { Stack } from "@mui/material";
import arrowRightShortIcon from "../../assets/arrow-right-short-icon.png";
import IconButton from "../UI/buttons/icon-button/icon-button.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";
import CheckInItem from "../UI/check-in-item/check-in-item.component";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const CheckIn = ({ open, onClose, user }) => {
  return (
    <Modal
      aria-labelledby="check-in-modal"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <ModalContent>
          <CheckInContainer>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" spacing="12px" alignItems="center">
                <IconButton src={arrowRightShortIcon} alt="Back" onClick={onClose} rotated enlarged />
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

            <CheckInItem user={user} />
          </CheckInContainer>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

export default CheckIn;
