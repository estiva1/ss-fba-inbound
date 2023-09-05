import React, { Fragment, useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import IconButton from "../UI/buttons/icon-button/icon-button.component";
import {
  Container,
  Heading,
  Item,
  LabelText,
  PrimaryText,
  PrimaryTextHighlighted,
  ShipmentPlanEmpty,
  ShipmentPlanError,
  SpanText,
  Subheading,
  TextDivider,
} from "./review-shipment-plan.styles";

import { CustomizedSlider } from "../UI/slider/slider.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";

import toDoList from "../../assets/to-do-list.svg";
import arrowRightShortIcon from "../../assets/arrow-right-short-icon.png";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import { dropdownTestOptions } from "../../constants";
import ReviewShippingPlansTable from "../UI/review-shipping-plans-table/review-shipping-plans-table.component";

const ReviewShipmentPlan = ({ user, onClose }) => {
  const { username, companyName, email } = user || {};
  const [calculatedValue, setCalculatedValue] = useState("");
  const [reviewShipmentPlanState, setReviewShipmentPlanState] = useState("Option 1");

  const handleCalculatedValue = (value) => {
    setCalculatedValue(value);
  };

  const handleClick = () => {
    alert("Clicked");
  };
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" marginBottom="24px">
        <Stack direction="row" spacing="12px" alignItems="center">
          <IconButton src={arrowRightShortIcon} alt="Back" onClick={onClose} rotated enlarged />
          <Heading>Review Shipment Plan</Heading>
        </Stack>
        <Stack direction="row" spacing="12px" alignItems="center">
          <div style={{ width: "250px" }}>
            <Dropdown
              data={dropdownTestOptions}
              placeholder="Click here (for the test view only)"
              setSelectedValue={setReviewShipmentPlanState}
            />
          </div>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.blueStretched} width="max-content">
            Create Shipments
            <Ripple />
          </Button>
        </Stack>
      </Stack>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing="140px" columns={16}>
          <Grid item xs={8}>
            <Item>
              <Heading>Details</Heading>

              <Stack spacing="12px">
                <Subheading>User</Subheading>

                <Stack direction="row" spacing="12px">
                  <PrimaryText>{username}</PrimaryText>
                  <TextDivider></TextDivider>
                  <PrimaryText>{companyName}</PrimaryText>
                  <TextDivider></TextDivider>
                  <PrimaryText>{email}</PrimaryText>
                </Stack>
              </Stack>

              <Stack spacing="12px">
                <Subheading>PO Quantity</Subheading>

                <Stack direction="row" spacing="12px">
                  <PrimaryText>POs: 4</PrimaryText>
                  <TextDivider></TextDivider>
                  <PrimaryText>SKUs: 32</PrimaryText>
                  <TextDivider></TextDivider>
                  <PrimaryText>Units: 2050</PrimaryText>
                </Stack>

                <Stack direction="row" spacing="12px">
                  <PrimaryText style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
                    Selected POs: <PrimaryTextHighlighted>4 </PrimaryTextHighlighted>
                    <IconButton src={toDoList} alt="List" onClick={handleClick} />
                  </PrimaryText>

                  <TextDivider></TextDivider>
                  <PrimaryText>SKUs: 32</PrimaryText>
                  <TextDivider></TextDivider>
                  <PrimaryText>Units: 1850</PrimaryText>
                </Stack>
              </Stack>

              <Stack direction="column" spacing="16px" marginBottom="8px">
                <div style={{ flex: 1 }}>
                  <Dropdown data={dropdownTestOptions} placeholder="Shipment From" />
                </div>

                <div style={{ display: "flex", gap: "24px" }}>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Shipment Type" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Shipping Carrier Type" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Select Carrier" />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "24px" }}>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Label Preferences" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Box Content Preferences" />
                  </div>
                </div>
              </Stack>

              <Heading>Quantity Variants</Heading>

              <Grid container columns={12}>
                <Grid item xs={4}>
                  <Stack direction="column" spacing="6px">
                    <LabelText>Current Quantity</LabelText>
                    <PrimaryText>Units: 2050</PrimaryText>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack direction="column" spacing="6px">
                    <LabelText>After Variant Percentage</LabelText>
                    <PrimaryText>Units: {calculatedValue}</PrimaryText>
                  </Stack>
                </Grid>
              </Grid>

              <CustomizedSlider sliderWidth={450} sendBottomValue={handleCalculatedValue} />

              <div style={{ alignSelf: "self-end" }}>
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.whiteStretched} width="max-content">
                  Create Shipment Plan
                  <Ripple color="#1565D8" />
                </Button>
              </div>
            </Item>
          </Grid>

          <Grid item xs={8}>
            <Item>
              <Stack direction="column" spacing="12px">
                <Stack direction="row" justifyContent="space-between">
                  <Heading>Review Shipping Plans</Heading>
                  {reviewShipmentPlanState === "Option 3" && (
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.whiteStretched} width="max-content">
                      Retry
                      <Ripple color="#1565D8" />
                    </Button>
                  )}
                </Stack>

                {reviewShipmentPlanState === "Option 1" ? (
                  <Fragment>
                    <PrimaryText>Please input the required information to review plans.</PrimaryText>
                    <div
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "100px auto" }}
                    >
                      <ShipmentPlanEmpty />
                      <Subheading style={{ marginTop: "40px" }}>No Data</Subheading>
                    </div>
                  </Fragment>
                ) : reviewShipmentPlanState === "Option 2" ? (
                  <Fragment>
                    <PrimaryText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </PrimaryText>
                    <div
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "100px auto" }}
                    >
                      <ShipmentPlanError />
                      <SpanText style={{ marginTop: "40px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation{" "}
                      </SpanText>
                    </div>
                  </Fragment>
                ) : (
                  <ReviewShippingPlansTable/>
                )}
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReviewShipmentPlan;
