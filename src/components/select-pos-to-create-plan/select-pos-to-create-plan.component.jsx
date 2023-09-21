import React, { useState } from "react";

import { IconButton, Stack } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import InfoBar from "../UI/info-bar/info-bar.component";
import CheckInPopup from "../UI/popups/check-in-with-order-quantity-popup/check-in-with-order-quantity-popup.component";
import StyledStepper from "../UI/stepper/stepper.component";
import CheckInItem from "../UI/check-in-tables/check-in-item/check-in-item.component";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";
import CheckInItemListOfGoods from "../UI/check-in-tables/check-in-item-list-of-goods/check-in-item-list-of-goods.component";

import { checkInItemListOfGoods, dropdownTestOptions } from "../../constants";
import SelectPosTable from "../UI/select-pos-to-create-plan-table/select-pos-to-create-plan-table.component";

import { CheckInContainer, Heading, ModalContent, Total } from "./select-pos-to-create-plan.styles";
import CustomModal from "../UI/modal/custom-modal.component";

const SelectPosToCreatePlan = ({ open, onClose, data }) => {
  const [itemFilter, setItemFilter] = useState("");

  const handleItemFilterChange = (event) => setItemFilter(event.target.value);

  return (
    <CustomModal open={open} onClose={onClose}>
      <CheckInContainer>
        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
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
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.white} padding="8px 24px">
              Save
              <Ripple color="#1565D8" />
            </Button>
          </Stack>
        </Stack>

        <SelectPosTable data={data} itemFilter={itemFilter.toLowerCase()} />
      </CheckInContainer>
    </CustomModal>
  );
};

export default SelectPosToCreatePlan;
