import React, { Fragment, useState } from "react";
import ShipmentTableStack from "../shipment-table-stack/shipment-table-stack.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import { Container, SwitchLabel, SwitchValue } from "./inbound-content.styles";
import Dropdown from "../UI/dropdown/dropdown.component";
import TextFieldComponent from "../UI/textf";
import TableComponent from "../UI/check-in-table/check-in-table.component";
import CheckInTable from "../UI/check-in-table/check-in-table.component";
import { checkInTableData } from "../../constants";
import Switch from "../UI/switch/switch.component";
import Stack from "@mui/material/Stack";
import DeletableChip from "../UI/chip/chip.component";

const InboundContent = ({ content }) => {

  const completedPOS = 30;

  switch (content) {
    case 1:
      return (
        <Container>
          <div style={{ display: "flex", gap: "16px" }}>
            <Fragment>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "320px" }}>
                  <CustomizedSearchField
                    placeholder="Search by Invoice#, PO#, Order ID, Tracking"
                    ariaLabel="Search by invoice#, PO #, Order ID, Tracking"
                  />
                </div>
                <div style={{ width: "150px" }}>
                  <CustomizedSearchField placeholder="Vendor Adress" ariaLabel="Vendor Adress" />
                </div>
                <DeletableChip />
              </div>
            </Fragment>
            <Fragment>
              <Stack direction="row" spacing="12px" alignItems="center">
                <Switch />
                <SwitchLabel>
                  Show Completed PO's <SwitchValue>({completedPOS})</SwitchValue>
                </SwitchLabel>
              </Stack>
            </Fragment>
          </div>
          <CheckInTable data={checkInTableData} />
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
