import React, { useState } from "react";

import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import InfoBar from "../UI/info-bar/info-bar.component";
import StyledStepper from "../UI/stepper/stepper.component";
import CustomModal from "../UI/modal/custom-modal.component";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import CheckInItem from "../UI/check-in-tables/check-in-item/check-in-item.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";
import CheckInPopup from "../UI/popups/check-in-with-order-quantity-popup/check-in-with-order-quantity-popup.component";
import CheckInItemListOfGoods from "../UI/check-in-tables/check-in-item-list-of-goods/check-in-item-list-of-goods.component";

import { CheckInContainer, Heading, Total } from "./check-in.styles";
import { checkInItemListOfGoods, dropdownTestOptions } from "../../constants";

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
    <CustomModal open={open} onClose={onClose}>
      <CheckInContainer>
        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
          <Stack direction="row" spacing="12px" alignItems="center">
            <IconButton aria-label="back" onClick={onClose}>
              <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
            </IconButton>
            <Heading>Check In</Heading>
          </Stack>
          <Stack direction="row" spacing="20px" alignItems="center">
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.white} padding="8px 24px" onClick={handleClickOpen}>
              Check-in with Order Quantity
              <Ripple color="#1565D8" />
            </Button>
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.white} padding="8px 24px">
              Check-in with on invoice Quantity
              <Ripple color="#1565D8" />
            </Button>
          </Stack>
        </Stack>

        <CheckInItem user={user} />
        <StyledStepper />

        <Stack direction="row" spacing="24px" alignItems="center" width="100%" marginBottom="-4px">
          <div style={{ flex: 2 }}>
            <CustomizedSearchField
              placeholder="UPC/ASIN/SKU/FNSKU/Vendor UPC"
              ariaLabel="UPC/ASIN/SKU/FNSKU/Vendor UPC"
            />
          </div>
          <Dropdown sx={{ flex: 1 }} data={dropdownTestOptions} placeholder="Zebra Labels" disabled />
        </Stack>

        <InfoBar infoText="Please make sure to click save icon after entering Check In quantity to get the labels and save permanently" />
        <CheckInItemListOfGoods goodsData={checkInItemListOfGoods} />

        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
          <Total>Total Records: {totalRecords}</Total>
          <Stack direction="row" spacing="16px" alignItems="center">
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.white} padding="8px 24px">
              Complete Check-In
              <Ripple color="#1565D8" />
            </Button>
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.blue} padding="8px 24px">
              Check-In and Create Shipment
              <Ripple />
            </Button>
          </Stack>
        </Stack>

        <CheckInPopup open={openPopup} handleClose={handleClose} />
      </CheckInContainer>
    </CustomModal>
  );
};

export default CheckIn;
