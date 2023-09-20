import React, { useState } from "react";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import { IconButton, Stack, TextField } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { Container, Heading, ModalContent } from "./add-product-to-internal-storage.styles";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import CustomDropdown from "../UI/dropdowns/custom-dropdown/custom-dropdown.component";

const AddProductToInternalStorage = ({ open, onClose }) => {
    const [sellableUnits, setSellableUnits] = useState(null);
    const [unsellableUnits, setUnsellableUnits] = useState(null);

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
          <Container>
            <Stack direction="row" spacing="12px" alignItems="center">
              <IconButton aria-label="back" onClick={onClose}>
                <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
              </IconButton>
              <Heading>Add Product to Internal Storage</Heading>
            </Stack>
            <Stack direction="column" spacing="20px" alignItems="center">
              <TextField fullWidth size="small" label="Enter ASIN/UPC" />
              <CustomDropdown fullWidth placeholder="Select User" disabled />
              <CustomDropdown fullWidth placeholder="Select Vendor" disabled />
            </Stack>
            <Stack direction="row" gap="30px" alignItems="center">
              <TextField
                type="number"
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
          </Container>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

export default AddProductToInternalStorage;
