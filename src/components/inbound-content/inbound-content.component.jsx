import React, { Fragment, useState } from "react";
import ShipmentTableStack from "../shipment-table-stack/shipment-table-stack.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import { Container, SwitchLabel, SwitchValue } from "./inbound-content.styles";
import Dropdown from "../UI/dropdown/dropdown.component";
import CheckInTable from "../UI/check-in-table/check-in-table.component";
import { checkInTableData } from "../../constants";
import Switch from "../UI/switch/switch.component";
import Stack from "@mui/material/Stack";
import DeletableChip from "../UI/chip/chip.component";
import CompletedPOS from "../completed-pos/completed-pos.component";

const InboundContent = ({ content }) => {
  const [userNameFilter, setUserNameFilter] = useState("");
  const [vendorFilter, setVendorFilter] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleUserNameFilterChange = (event) => setUserNameFilter(event.target.value);
  const handleVendorFilterChange = (event) => setVendorFilter(event.target.value);

  const isUserNameFilterEmpty = userNameFilter.trim() === "";
  const isVendorFilterEmpty = vendorFilter.trim() === "";

  const handleUserNameInputClear = () => {
    setUserNameFilter(""); // Clear the userName input value
  };
  const handleVendorInputClear = () => {
    setVendorFilter(""); // Clear the vendor input value
  };
  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const completedPOS = 30;

  switch (content) {
    case 1:
      return (
        <Container>
          <div style={{ display: "flex", gap: "16px" }}>
            <Fragment>
              <Stack direction="row" spacing="10px" alignItems="center">
                <div style={{ width: "320px" }}>
                  <CustomizedSearchField
                    placeholder="Search by Invoice#, PO#, Order ID, Tracking"
                    ariaLabel="Search by invoice#, PO #, Order ID, Tracking"
                  />
                </div>
                <div style={{ width: "150px" }}>
                  <CustomizedSearchField
                    placeholder="Vendor Adress"
                    ariaLabel="Vendor Adress"
                    value={vendorFilter}
                    onChange={handleVendorFilterChange}
                  />
                </div>
                <div style={{ width: "150px" }}>
                  <CustomizedSearchField
                    placeholder="Filter by user"
                    ariaLabel="Filter by user"
                    value={userNameFilter}
                    onChange={handleUserNameFilterChange}
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
          </div>
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
            <CheckInTable
              data={checkInTableData}
              userNameFilter={userNameFilter.toLowerCase()}
              vendorFilter={vendorFilter.toLowerCase()}
            />
          )}
        </Container>
      );
    case 2:
      return (
        <Container>
          <div style={{ display: "flex", gap: "24px" }}>
            <div style={{ flex: 2 }}>
              <CustomizedSearchField
                placeholder="Search by invoice#, PO#, Order ID, Tracking"
                ariaLabel="Search by invoice#, PO#, Order ID, Tracking"
              />
            </div>

            <div style={{ flex: 1 }}>
              <Dropdown />
            </div>
          </div>
          <ShipmentTableStack />
        </Container>
      );
    case 3:
      return <div>3</div>;
    default:
      return null;
  }
};

export default InboundContent;
