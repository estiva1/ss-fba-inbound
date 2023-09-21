import React, { useState } from "react";

import CustomModal from "../UI/modal/custom-modal.component";
import CustomDropdown from "../UI/dropdowns/custom-dropdown/custom-dropdown.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { Container, Heading, Subheading } from "./add-product-to-internal-storage.styles";

const AddProductToInternalStorage = ({ open, onClose }) => {
  const [sellableUnits, setSellableUnits] = useState(null);
  const [unsellableUnits, setUnsellableUnits] = useState(null);

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
          <TextField fullWidth size="small" label="Enter ASIN/UPC" />
          <CustomDropdown fullWidth placeholder="Select User" disabled />
          <CustomDropdown fullWidth placeholder="Select Vendor" disabled />
        </Stack>

        <Stack direction="row" gap="30px" alignItems="center">
          <TextField
            type="number"
            defaultValue={0}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                e.preventDefault();
              }
            }}
            onChange={(e) => setSellableUnits(e.target.value)}
            fullWidth
            size="small"
            label="Sellable Units"
          />
          <TextField
            type="number"
            defaultValue={0}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                e.preventDefault();
              }
            }}
            onChange={(e) => setUnsellableUnits(e.target.value)}
            fullWidth
            size="small"
            label="Unsellable Units"
          />
        </Stack>

        <Stack direction="column" gap="16px">
          <Subheading>Add Dimensions</Subheading>
          <Stack direction="row" gap="30px" alignItems="center">
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel htmlFor="input-length">Length</InputLabel>
              <OutlinedInput
                label="Length"
                id="input-length"
                endAdornment={<InputAdornment position="end">in</InputAdornment>}
              />
            </FormControl>

            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel htmlFor="input-width">Width</InputLabel>
              <OutlinedInput
                label="Width"
                id="input-width"
                endAdornment={<InputAdornment position="end">in</InputAdornment>}
              />
            </FormControl>
          </Stack>

          <Stack direction="row" gap="30px" alignItems="center">
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel htmlFor="input-height">Height</InputLabel>
              <OutlinedInput
                label="Height"
                id="input-height"
                endAdornment={<InputAdornment position="end">in</InputAdornment>}
              />
            </FormControl>

            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel htmlFor="input-width">Width</InputLabel>
              <OutlinedInput
                label="Width"
                id="input-width"
                endAdornment={<InputAdornment position="end">in</InputAdornment>}
              />
            </FormControl>
          </Stack>
        </Stack>

        <Stack direction="row" gap="30px" alignItems="center" justifyContent="end" marginTop="12px">
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.white} padding="8px 24px" onClick={onClose}>
            Cancel
            <Ripple color="#1565D8" />
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.blue} padding="8px 24px">
            Add to Internal Storage
            <Ripple color="#1565D8" />
          </Button>
        </Stack>
      </Container>
    </CustomModal>
  );
};

export default AddProductToInternalStorage;
