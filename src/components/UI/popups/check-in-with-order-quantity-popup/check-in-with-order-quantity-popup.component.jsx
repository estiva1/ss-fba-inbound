import React from "react";
import DialogActions from "@mui/material/DialogActions";
import { AlertSign, StyledDialog, StyledDialogTitle } from "./check-in-with-order-quantity-popup.styles";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../../buttons/button/button.component";

const CheckInPopup = ({ open, handleClose }) => {
  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AlertSign />

      <StyledDialogTitle id="alert-dialog-title">
        Are you sure you want to like Sync Checkin with Ordered Qty?
      </StyledDialogTitle>

      <DialogActions sx={{ gap: "24px" }}>
        <Button
          style={{ border: "none"}}
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.white}
          padding="8px 60px"
          onClick={handleClose}
        >
          Yes
          <Ripple color="#1565D8" />
        </Button>

        <Button
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.white}
          padding="8px 60px"
          onClick={handleClose}
        >
          No
          <Ripple color="#1565D8" />
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default CheckInPopup;
