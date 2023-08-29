import React, { useState } from "react";
import { CheckInContainer, Heading, ModalContent, Total } from "./check-in.styles";
import { Stack } from "@mui/material";
import arrowRightShortIcon from "../../assets/arrow-right-short-icon.png";
import IconButton from "../UI/buttons/icon-button/icon-button.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";
import CheckInItem from "../UI/check-in-item/check-in-item.component";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import StyledStepper from "../UI/stepper/stepper.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import Dropdown from "../UI/dropdown/dropdown.component";
import InfoBar from "../UI/info-bar/info-bar.component";
import CheckInItemListOfGoods from "../UI/check-in-item-list-of-goods/check-in-item-list-of-goods.component";
import { checkInItemListOfGoods } from "../../constants";
import CheckInPopup from "../UI/popup/popup.component";

const CheckIn = ({ open, onClose, user }) => {
  const totalRecords = 230;

  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <Modal
      aria-labelledby="check-in-modal"
      open={open}
      onClose={onClose}
      closeAfterTransition
      disableScrollLock
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{
        "& > .MuiBackdrop-root": {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgb(8, 40, 85, 0.3)",
        },
      }}
    >
      <Fade in={open}>
        <ModalContent>
          <CheckInContainer>
            <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" marginBottom="-4px">
              <Stack direction="row" spacing="12px" alignItems="center">
                <IconButton src={arrowRightShortIcon} alt="Back" onClick={onClose} rotated enlarged />
                <Heading>Check In</Heading>
              </Stack>
              <Stack direction="row" spacing="20px" alignItems="center">
                <Button
                  type="button"
                  buttonType={BUTTON_TYPE_CLASSES.whiteStretched}
                  width="max-content"
                  onClick={handleClickOpen}
                >
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
            <StyledStepper />

            <Stack direction="row" spacing="24px" alignItems="center" width="100%" marginBottom="-4px">
              <div style={{ flex: 3 }}>
                <CustomizedSearchField
                  placeholder="UPC/ASIN/SKU/FNSKU/Vendor UPC"
                  ariaLabel="UPC/ASIN/SKU/FNSKU/Vendor UPC"
                />
              </div>
              <div style={{ flex: 1 }}>
                <Dropdown />
              </div>
            </Stack>

            <InfoBar infoText="Please make sure to click save icon after entering Check In quantity to get the labels and save permanently" />

            <CheckInItemListOfGoods goodsData={checkInItemListOfGoods} />

            <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" marginBottom="-4px">
              <Total>Total Records: {totalRecords}</Total>
              <Stack direction="row" spacing="16px" alignItems="center">
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.whiteStretched} width="max-content">
                  Complete Check-In
                  <Ripple color="#1565D8" />
                </Button>
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.blueStretched} width="max-content">
                  Check-In and Create Shipment
                  <Ripple />
                </Button>
              </Stack>
            </Stack>

            <CheckInPopup open={openPopup} handleClose={handleClose} />
          </CheckInContainer>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

export default CheckIn;
