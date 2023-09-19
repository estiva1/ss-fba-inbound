import React, { Fragment, useState } from "react";

import Stack from "@mui/material/Stack";

import Switch from "../UI/switch/switch.component";
import DeletableChip from "../UI/chip/chip.component";
import FullScreenDialog from "../UI/dialog/dialog.component";
import CheckInTable from "../UI/check-in-main-table/check-in-table.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import CustomDropdown from "../UI/dropdowns/custom-dropdown/custom-dropdown.component";

import CheckIn from "../check-in/check-in.component";
import CompletedPOS from "../completed-pos/completed-pos.component";
import CheckInHistory from "../check-in-history/check-in-history.component";
import EditCheckedInPos from "../edit-checked-in-pos/edit-checked-in-pos.component";
import ShipmentTableStack from "../shipment-table-stack/shipment-table-stack.component";
import ReviewShipmentPlan from "../review-shipment-plan/review-shipment-plan.component";

import { checkInTableData, shipmentTableData } from "../../constants";
import { Container, SwitchLabel, SwitchValue } from "./inbound-content.styles";
import PrintTwoDLabelsNavTabs from "../UI/nav-tabs/print-2d-labels-nav-tabs/print-2d-labels-nav-tabs.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";

const InboundContent = ({ content }) => {
  //-----------------case 1------------------------
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [vendorFilter, setVendorFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [userNameFilter, setUserNameFilter] = useState("");
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckInHistoryOpen, setIsCheckInHistoryOpen] = useState(false);

  //-----------------case 2------------------------
  const [isEditCheckedInPosOpen, setIsEditCheckedInPosOpen] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState(null);
  const [isReviewShipmentPlanOpen, setIsReviewShipmentPlanOpen] = useState(false);

  //-----------------case 1------------------------
  const handleUserNameFilterChange = (event) => setUserNameFilter(event.target.value);
  const handleVendorFilterChange = (event) => setVendorFilter(event.target.value);

  const isUserNameFilterEmpty = userNameFilter.trim() === "";
  const isVendorFilterEmpty = vendorFilter.trim() === "";

  const handleUserNameInputClear = () => {
    setUserNameFilter("");
  };
  const handleVendorInputClear = () => {
    setVendorFilter("");
  };

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleOpenCheckIn = (user) => {
    setSelectedUser(user);
    setIsCheckInOpen(true);
  };
  const handleCloseCheckIn = () => {
    setIsCheckInOpen(false);
  };

  const handleCheckInHistoryOpen = (user) => {
    setSelectedUser(user);
    setIsCheckInHistoryOpen(true);
  };
  const handleCheckInHistoryClose = () => {
    setIsCheckInHistoryOpen(false);
  };

  //-----------------case 2------------------------
  const handleReviewShipmentPlanOpen = (user) => {
    setSelectedUser(user);
    setIsReviewShipmentPlanOpen(true);
  };
  const handleReviewShipmentPlanClose = () => {
    setIsReviewShipmentPlanOpen(false);
  };

  const handleEditCheckedInPosOpen = (user) => {
    setSelectedUser(user);
    setIsEditCheckedInPosOpen(true);
  };
  const handleEditCheckedInPosClose = () => {
    setIsEditCheckedInPosOpen(false);
  };

  const completedPOS = 30;

  switch (content) {
    case 1:
      return (
        <Container>
          <Stack direction="row" spacing="16px" alignItems="center">
            <Fragment>
              <Stack direction="row" spacing="10px" alignItems="center">
                <div style={{ width: "320px" }}>
                  <CustomizedSearchField
                    placeholder="Search by Invoice#, PO#, Order ID, Tracking"
                    ariaLabel="Search by invoice#, PO #, Order ID, Tracking"
                    disabled={isSwitchOn}
                  />
                </div>
                <div style={{ width: "150px" }}>
                  <CustomizedSearchField
                    placeholder="Vendor Adress"
                    ariaLabel="Vendor Adress"
                    value={vendorFilter}
                    onChange={handleVendorFilterChange}
                    disabled={isSwitchOn}
                  />
                </div>
                <div style={{ width: "150px" }}>
                  <CustomizedSearchField
                    placeholder="Filter by user"
                    ariaLabel="Filter by user"
                    value={userNameFilter}
                    onChange={handleUserNameFilterChange}
                    disabled={isSwitchOn}
                  />
                </div>
              </Stack>
            </Fragment>
            <Fragment>
              <Stack direction="row" spacing="12px" alignItems="center">
                <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
                <SwitchLabel>
                  Show Completed PO's <SwitchValue>({completedPOS})</SwitchValue>
                </SwitchLabel>
              </Stack>
            </Fragment>
          </Stack>
          <Fragment>
            {(!isUserNameFilterEmpty || !isVendorFilterEmpty) && (
              <Stack
                sx={{ marginTop: "10px", marginBottom: "-12px" }}
                direction="row"
                spacing="10px"
                alignItems="center"
              >
                {!isUserNameFilterEmpty && (
                  <DeletableChip
                    value={userNameFilter}
                    filterType="userName"
                    onDelete={handleUserNameInputClear}
                    clearInput={handleUserNameInputClear}
                  />
                )}
                {!isVendorFilterEmpty && (
                  <DeletableChip
                    value={vendorFilter}
                    filterType="vendor"
                    onDelete={handleVendorInputClear}
                    clearInput={handleVendorInputClear}
                  />
                )}
              </Stack>
            )}
          </Fragment>
          {isSwitchOn ? (
            <CompletedPOS />
          ) : (
            <Fragment>
              <CheckInTable
                data={checkInTableData}
                userNameFilter={userNameFilter.toLowerCase()}
                vendorFilter={vendorFilter.toLowerCase()}
                onOpenCheckIn={handleOpenCheckIn}
                onOpenCheckInHistory={handleCheckInHistoryOpen}
              />
              <CheckIn open={isCheckInOpen} onClose={handleCloseCheckIn} user={selectedUser} />
              <CheckInHistory open={isCheckInHistoryOpen} onClose={handleCheckInHistoryClose} user={selectedUser} />
            </Fragment>
          )}
        </Container>
      );

    case 2:
      return (
        <Container>
          <Stack direction="row" spacing="24px" alignItems="center">
            <div style={{ flex: 2 }}>
              <CustomizedSearchField
                placeholder="Search by invoice#, PO#, Order ID, Tracking"
                ariaLabel="Search by invoice#, PO#, Order ID, Tracking"
              />
            </div>

            <div style={{ flex: 1 }}>
              <CustomDropdown data={shipmentTableData} placeholder="User" setSelectedUsername={setSelectedUsername} />
            </div>
          </Stack>
          <Fragment>
            <ShipmentTableStack
              selectedUsername={selectedUsername}
              handleEditCheckedInPosOpen={handleEditCheckedInPosOpen}
              handleReviewShipmentPlanOpen={handleReviewShipmentPlanOpen}
            />
            <FullScreenDialog open={isReviewShipmentPlanOpen} onClose={handleReviewShipmentPlanClose}>
              <ReviewShipmentPlan user={selectedUser} onClose={handleReviewShipmentPlanClose} />
            </FullScreenDialog>

            <EditCheckedInPos open={isEditCheckedInPosOpen} onClose={handleEditCheckedInPosClose} user={selectedUser} />
          </Fragment>
        </Container>
      );
    case 3:
      return (
        <Container>
          <Stack>
            <Stack direction="row" gap="24px" alignItems="center">
              <Button
                style={{ marginTop: "4px" }}
                type="button"
                width="78px"
                height="56px"
                buttonType={BUTTON_TYPE_CLASSES.whiteCondenced}
              >
                Add to Storage
                <Ripple color="#1565D8" />
              </Button>
              <PrintTwoDLabelsNavTabs />
            </Stack>
          </Stack>
        </Container>
      );
    default:
      return null;
  }
};

export default InboundContent;
