import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import IconButton from "../UI/buttons/icon-button/icon-button.component";
import { Container, Heading, Item } from "./review-shipment-plan.styles";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";

import arrowRightShortIcon from "../../assets/arrow-right-short-icon.png";
import { CustomizedSlider } from "../UI/slider/slider.component";

const ReviewShipmentPlan = ({ onClose }) => {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" marginBottom="24px">
        <Stack direction="row" spacing="12px" alignItems="center">
          <IconButton src={arrowRightShortIcon} alt="Back" onClick={onClose} rotated enlarged />
          <Heading>Review Shipment Plan</Heading>
        </Stack>
        <Button
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.blueStretched}
          width="max-content"
          //onClick={handleClickOpen}
        >
          Create Shipments
          <Ripple />
        </Button>
      </Stack>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
              <CustomizedSlider />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>2</Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReviewShipmentPlan;
