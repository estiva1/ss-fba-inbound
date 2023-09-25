import React, { useState } from "react";

import CustomModal from "../UI/modal/custom-modal.component";
import CustomDropdown from "../UI/dropdowns/custom-dropdown/custom-dropdown.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import {
  Container,
  Heading,
  StyledMenyItem,
  Subheading,
  TextFieldMenu,
} from "./add-product-to-internal-storage.styles";
import TextFieldWithDropdown from "../UI/text-fields/text-field-with-dropdown/text-field-with-dropdown.component";
import StyledTextFieldWithAdornment from "../UI/text-fields/regular-text-fields/styled-text-field-with-adornment/styled-text-field-with-adornment.component";
import StyledTextField from "../UI/text-fields/regular-text-fields/styled-text-field/styled-text-field.component";

const weightUnits = [
  {
    label: "Oz",
    id: 1,
  },
  {
    label: "Kg",
    id: 2,
  },
];

const AddProductToInternalStorage = ({ open, onClose }) => {
  const [asinUpcValue, setAsinUpcValue] = useState("");
  const [sellableUnits, setSellableUnits] = useState(0);
  const [unsellableUnits, setUnsellableUnits] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState("Oz"); // Default unit is Oz
  const [weight, setWeight] = useState(0);

  const handleAsinUpcValueChange = (event) => {
    setAsinUpcValue(event.target.value);
  };
  const handleSellableUnitsChange = (event) => {
    setSellableUnits(event.target.value);
  };
  const handleUnsellableUnitsChange = (event) => {
    setUnsellableUnits(event.target.value);
  };
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };
  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <Container>
        <Stack direction="row" spacing="12px" alignItems="center">
          <IconButton aria-label="back" onClick={onClose}>
            <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
          </IconButton>
          <Heading>Add Product to Internal Storage</Heading>
        </Stack>

        <Stack direction="column" spacing="24px" alignItems="center">
          <StyledTextField
            fullWidth
            size="small"
            label="Enter ASIN/UPC"
            value={asinUpcValue}
            onChange={handleAsinUpcValueChange}
          />
          <CustomDropdown fullWidth placeholder="Select User" disabled />
          <CustomDropdown fullWidth placeholder="Select Vendor" disabled />
        </Stack>

        <Stack direction="row" gap="30px" alignItems="center">
          <StyledTextField
            fullWidth
            size="small"
            type="number"
            label="Sellable Units"
            value={sellableUnits}
            onChange={handleSellableUnitsChange}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                e.preventDefault();
              }
            }}
          />

          <StyledTextField
            fullWidth
            size="small"
            type="number"
            label="Unsellable Units"
            value={unsellableUnits}
            onChange={handleUnsellableUnitsChange}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                e.preventDefault();
              }
            }}
          />
        </Stack>

        <Stack direction="column" gap="16px">
          <Subheading>Add Dimensions</Subheading>
          <Stack direction="row" gap="30px" alignItems="center">
            <StyledTextFieldWithAdornment
              fullWidth
              htmlFor="input-width"
              label="Width"
              adornment="in"
              value={length}
              onChange={handleLengthChange}
            />

            <StyledTextFieldWithAdornment
              fullWidth
              htmlFor="input-width"
              label="Width"
              adornment="in"
              value={width}
              onChange={handleWidthChange}
            />
          </Stack>

          <Stack direction="row" gap="30px" alignItems="center">
            <StyledTextFieldWithAdornment
              fullWidth
              htmlFor="input-height"
              label="Height"
              adornment="in"
              value={height}
              onChange={handleHeightChange}
            />

            <TextFieldWithDropdown
              fullWidth
              label="Weight"
              value={weight}
              units={weightUnits}
              dropdownItem={selectedUnit}
              onChange={handleWeightChange}
              onDropdownItemChange={handleUnitChange}
            />
          </Stack>
        </Stack>

        <Stack direction="row" gap="30px" alignItems="center" justifyContent="end" marginTop="12px">
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.white} padding="8px 24px" onClick={onClose}>
            Cancel
            <Ripple color="#1565D8" />
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.blue} padding="8px 24px">
            Add to Internal Storage
            <Ripple />
          </Button>
        </Stack>
      </Container>
    </CustomModal>
  );
};

export default AddProductToInternalStorage;
