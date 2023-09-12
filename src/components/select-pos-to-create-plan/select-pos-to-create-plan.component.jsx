import React, { useState } from "react";

import { Stack } from "@mui/material";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

import CheckInPopup from "../UI/popup/popup.component";
import InfoBar from "../UI/info-bar/info-bar.component";
import StyledStepper from "../UI/stepper/stepper.component";
import CheckInItem from "../UI/check-in-item/check-in-item.component";
import IconButton from "../UI/buttons/icon-button/icon-button.component";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";
import CheckInItemListOfGoods from "../UI/check-in-item-list-of-goods/check-in-item-list-of-goods.component";

import { checkInItemListOfGoods, dropdownTestOptions } from "../../constants";
import arrowRightShortIcon from "../../assets/arrow-right-short-icon.png";
import SelectPosTable from "../UI/select-pos-to-create-plan-table/select-pos-to-create-plan-table.component";

import { CheckInContainer, Heading, ModalContent, Total } from "./select-pos-to-create-plan.styles";

const SelectPosToCreatePlan = ({ open, onClose, data }) => {
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
                <Heading>Select PO's to Create Plan</Heading>
              </Stack>
              <div style={{width: "300px"}}>
                <CustomizedSearchField placeholder="Search by SKU, ASIN, UPC, Vendor UPC" />
              </div>
            </Stack>

            <SelectPosTable data={data} />
          </CheckInContainer>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

export default SelectPosToCreatePlan;
