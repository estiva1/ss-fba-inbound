import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Arrow,
  ButtonsContainer,
  PrimaryText,
  SecondaryText,
  SpanText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./check-in-table.styles";

import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../buttons/button/button.component";

const Buttons = () => {
  const handleClick = () => {
    // Click handler logic here
    console.log("Clicked!");
  };

  return (
    <ButtonsContainer>
      <Button type="button" width="61px" buttonType={BUTTON_TYPE_CLASSES.whiteSmall} onClick={handleClick}>
        Check In History
        <Ripple color="#1565D8" />
      </Button>
      <Button type="button" width="61px" buttonType={BUTTON_TYPE_CLASSES.blueSmall} onClick={handleClick}>
        <Arrow />
        Check In
        <Ripple />
      </Button>
    </ButtonsContainer>
  );
};

const CheckInTable = ({ data }) => {
  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="shipment table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Actions</StyledTableCell>
            <StyledTableCell>PO #</StyledTableCell>
            <StyledTableCell align="left">User</StyledTableCell>
            <StyledTableCell align="left">Vendor</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Order ID</StyledTableCell>
            <StyledTableCell align="left">Invoice #</StyledTableCell>
            <StyledTableCell align="left">Last Checked In</StyledTableCell>
            <StyledTableCell align="left">Exp. Delivery Date</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((user) => (
            <StyledTableRow key={user.orderId}>
              <StyledTableCell align="left">
                <Buttons />
              </StyledTableCell>
              <StyledTableCell>
                {user.poNumber}
                <Button style={{ marginTop: "4px" }} type="button" width="78px" buttonType={BUTTON_TYPE_CLASSES.whiteCondenced}>
                  View PO
                  <Ripple color="#1565D8" />
                </Button>
              </StyledTableCell>
              <StyledTableCell align="left">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <PrimaryText>{user.userData.userName}</PrimaryText>
                  <SecondaryText>{user.userData.company}</SecondaryText>
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <PrimaryText>{user.vendorData.vendorName}</PrimaryText>
                  <SecondaryText>{user.vendorData.adress}</SecondaryText>
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">
                <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                  {Object.entries(user.quantityData).map(([key, value]) => {
                    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
                    return (
                      <div key={key} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <PrimaryText>{value}</PrimaryText>
                        <SpanText>{capitalizedKey}</SpanText>
                      </div>
                    );
                  })}
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{user.orderId}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{user.invoiceNumber}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <PrimaryText>{user.lastCheckedInData.date}</PrimaryText>
                  <SecondaryText>{user.lastCheckedInData.time}</SecondaryText>
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{user.expectedDeliveryDate}</PrimaryText>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CheckInTable;
