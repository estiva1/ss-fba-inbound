import React, { useState } from "react";

import { IconButton, Stack } from "@mui/material";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import CheckInPopup from "../UI/popups/check-in-with-order-quantity-popup/check-in-with-order-quantity-popup.component";
import InfoBar from "../UI/info-bar/info-bar.component";
import StyledStepper from "../UI/stepper/stepper.component";
import CheckInItem from "../UI/check-in-tables/check-in-item/check-in-item.component";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";
import CheckInItemListOfGoods from "../UI/check-in-tables/check-in-item-list-of-goods/check-in-item-list-of-goods.component";

import { checkInItemListOfGoods, dropdownTestOptions } from "../../constants";
import SelectPosTable from "../UI/select-pos-to-create-plan-table/select-pos-to-create-plan-table.component";

import { CheckInContainer, Heading, ModalContent, Total } from "./select-pos-to-create-plan.styles";

const SelectPosToCreatePlan = ({ open, onClose, data }) => {
  const [itemFilter, setItemFilter] = useState("");

  const handleItemFilterChange = (event) => setItemFilter(event.target.value);

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
              <Stack direction="row" gap="12px" alignItems="center">
                <IconButton aria-label="back" onClick={onClose}>
                  <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
                </IconButton>
                <Heading>Select PO's to Create Plan</Heading>
              </Stack>
              <Stack direction="row" gap="16px" alignItems="center">
                <div style={{ width: "300px" }}>
                  <CustomizedSearchField
                    placeholder="Search by SKU, ASIN, UPC, Vendor UPC"
                    value={itemFilter}
                    onChange={handleItemFilterChange}
                  />
                </div>
                <Button
                  style={{ marginTop: "4px" }}
                  type="button"
                  width="78px"
                  height="56px"
                  buttonType={BUTTON_TYPE_CLASSES.whiteCondenced}
                >
                  Save
                  <Ripple color="#1565D8" />
                </Button>
              </Stack>
            </Stack>

            <SelectPosTable data={data} itemFilter={itemFilter.toLowerCase()} />
          </CheckInContainer>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

export default SelectPosToCreatePlan;