import React, { useState } from "react";

import { IconButton, Stack } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import CustomModal from "../UI/modal/custom-modal.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";
import SelectPosTable from "../UI/select-pos-to-create-plan-table/select-pos-to-create-plan-table.component";

import { CheckInContainer, Heading } from "./select-pos-to-create-plan.styles";

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
