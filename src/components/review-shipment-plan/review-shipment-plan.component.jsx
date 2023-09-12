import React, { Fragment, useState } from "react";
import { Box, Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
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
  StyledFormGroup,
  Subheading,
  TextDivider,
} from "./review-shipment-plan.styles";

import { CustomizedSlider } from "../UI/slider/slider.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";

import toDoList from "../../assets/to-do-list.svg";
import arrowRightShortIcon from "../../assets/arrow-right-short-icon.png";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import { checkInItemListOfGoods, dropdownTestOptions, selectPosData } from "../../constants";
import ReviewShippingPlansTable from "../UI/review-shipping-plans-table/review-shipping-plans-table.component";
import InfoBar from "../UI/info-bar/info-bar.component";
import ReviewAmazonShipmentsItem from "../UI/review-amazon-shipments-item/review-amazon-shipments-item.component";
import { AnimatePresence, motion } from "framer-motion";
import SelectPosToCreatePlan from "../select-pos-to-create-plan/select-pos-to-create-plan.component";

const ReviewShipmentPlan = ({ user, onClose }) => {
  const { username, companyName, email } = user || {};

  const [calculatedValue, setCalculatedValue] = useState("");
  const [reviewShipmentPlanState, setReviewShipmentPlanState] = useState("Option 1");
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedList, setIsCheckedList] = useState(checkInItemListOfGoods.map(() => false));
  const [isSelectPosToCreatePlanOpen, setIsSelectPosToCreatePlanOpen] = useState(false);

  const isIndeterminate = isCheckedList.some((isChecked) => isChecked) && !isCheckedAll;

  const handleCalculatedValue = (value) => {
    setCalculatedValue(value);
  };

  const handleClick = () => {
    alert("Clicked");
  };
  const handleSelectPosToCreatePlanClose = () => {
    setIsSelectPosToCreatePlanOpen(false);
  };
  const handleSelectPosToCreatePlanOpen = () => {
    setIsSelectPosToCreatePlanOpen(true);
  };
  const handleCheckAll = () => {
    const updatedIsCheckedAll = !isCheckedAll;
    setIsCheckedAll(updatedIsCheckedAll);
    setIsCheckedList(Array(checkInItemListOfGoods.length).fill(updatedIsCheckedAll));
  };

  const handleCheckboxChange = (index, value) => {
    const updatedIsCheckedList = [...isCheckedList];
    updatedIsCheckedList[index] = value;
    setIsCheckedList(updatedIsCheckedList);

    const updatedIsCheckedAll = updatedIsCheckedList.every((isChecked) => isChecked);
    setIsCheckedAll(updatedIsCheckedAll);
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
                  <PrimaryText style={{ display: "inline-flex" }}>
                    Selected POs:&nbsp;<PrimaryTextHighlighted>4&nbsp;</PrimaryTextHighlighted>
                    <IconButton src={toDoList} alt="List" onClick={handleClick} />
                  </PrimaryText>

                  <TextDivider></TextDivider>
                  <PrimaryText>SKUs: 32</PrimaryText>
                  <TextDivider></TextDivider>
                  <PrimaryText>Units: 1850</PrimaryText>
                </Stack>
              </Stack>

              <Stack direction="column" spacing="16px" marginBottom="8px">
                {/* Dropdowns disabled before integration */}
                <div style={{ flex: 1 }}>
                  <Dropdown data={dropdownTestOptions} placeholder="Shipment From" disabled />
                </div>

                <div style={{ display: "flex", gap: "24px" }}>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Shipment Type" disabled />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Shipping Carrier Type" disabled />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Select Carrier" disabled />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "24px" }}>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Label Preferences" disabled />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Dropdown data={dropdownTestOptions} placeholder="Box Content Preferences" disabled />
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
                <Button
                  type="button"
                  buttonType={BUTTON_TYPE_CLASSES.whiteStretched}
                  width="max-content"
                  onClick={handleSelectPosToCreatePlanOpen}
                >
                  Create Shipment Plan
                  <Ripple color="#1565D8" />
                </Button>
              </div>

              <SelectPosToCreatePlan
                open={isSelectPosToCreatePlanOpen}
                onClose={handleSelectPosToCreatePlanClose}
                data={selectPosData}
              />
            </Item>
          </Grid>

          <Grid item xs={8}>
            <Item>
              <Stack direction="column" spacing="12px">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
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
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "80px auto" }}
                    >
                      <ShipmentPlanError />
                      <SpanText style={{ marginTop: "40px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation{" "}
                      </SpanText>
                    </div>
                  </Fragment>
                ) : reviewShipmentPlanState === "Option 3" ? (
                  <Fragment>
                    <PrimaryText>We are unable to create shipment plans due to following errors.</PrimaryText>
                    <ReviewShippingPlansTable data={checkInItemListOfGoods} />
                  </Fragment>
                ) : reviewShipmentPlanState === "Option 4" ? (
                  <Fragment>
                    <PrimaryText>Review the following amazon shipments.</PrimaryText>
                    <InfoBar
                      style={{ marginTop: "16px" }}
                      infoText="Amazon Says, If you create one of the shipments from the shipping plan then you have to create all the 
                    shipments and send to amazon within 30 Days."
                      type="warning"
                    />
                    <Stack direction="row" spacing="12px" alignItems="center" marginTop="16px">
                      <StyledFormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              checked={isCheckedAll}
                              onChange={handleCheckAll}
                              indeterminate={isIndeterminate}
                            />
                          }
                          label="Choose a Main Shipment"
                        />
                      </StyledFormGroup>
                      <AnimatePresence mode="wait">
                        {isCheckedAll && (
                          <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Button type="button" height="40px" buttonType={BUTTON_TYPE_CLASSES.blueStretched}>
                              Ship ALL Here
                              <Ripple />
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Stack>
                    {checkInItemListOfGoods.map((item, index) => (
                      <ReviewAmazonShipmentsItem
                        key={`item-${index}`}
                        item={item}
                        isChecked={isCheckedList[index]}
                        onCheckboxChange={(value) => handleCheckboxChange(index, value)}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <PrimaryText style={{ marginTop: "150px" }}>
                    Yooo, choose the option above to see the content :)
                  </PrimaryText>
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
