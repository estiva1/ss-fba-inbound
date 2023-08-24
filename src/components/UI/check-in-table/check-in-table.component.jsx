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
import { Stack } from "@mui/material";

const Buttons = ({ onOpenModal }) => {
  return (
    <ButtonsContainer>
      <Button type="button" width="61px" buttonType={BUTTON_TYPE_CLASSES.whiteSmall}>
        Check In History
        <Ripple color="#1565D8" />
      </Button>
      <Button type="button" width="61px" buttonType={BUTTON_TYPE_CLASSES.blueSmall} onClick={onOpenModal}>
        <Arrow />
        Check In
        <Ripple />
      </Button>
    </ButtonsContainer>
  );
};

const generateHighlightedCell = (text, filterValue) => {
  const lowerText = text.toLowerCase();
  const lowerFilterValue = filterValue.toLowerCase();

  if (!lowerText.includes(lowerFilterValue)) {
    return text;
  }

  const startIndex = lowerText.indexOf(lowerFilterValue);
  const endIndex = startIndex + lowerFilterValue.length;

  return (
    <>
      {text.substring(0, startIndex)}
      <span style={{ backgroundColor: "#1565D8", color: "#fff" }}>{text.substring(startIndex, endIndex)}</span>
      {text.substring(endIndex)}
    </>
  );
};

const CheckInTable = ({ data, userNameFilter, vendorFilter, onOpenModal }) => {
  const matchingData = data.filter((user) => {
    const userNameMatch = user.userData.userName.toLowerCase().includes(userNameFilter);
    const vendorMatch = user.vendorData.vendorName.toLowerCase().includes(vendorFilter);
    return userNameMatch && vendorMatch;
  });

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
          {matchingData.map((user) => (
            <StyledTableRow key={user.orderId}>
              <StyledTableCell align="left">
                <Buttons onOpenModal={() => onOpenModal(user)} />
              </StyledTableCell>
              <StyledTableCell>
                {user.poNumber}
                <Button
                  style={{ marginTop: "4px" }}
                  type="button"
                  width="78px"
                  buttonType={BUTTON_TYPE_CLASSES.whiteCondenced}
                >
                  View PO
                  <Ripple color="#1565D8" />
                </Button>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Stack direction="column" spacing="6px">
                  <PrimaryText>{generateHighlightedCell(user.userData.userName, userNameFilter)}</PrimaryText>
                  <SecondaryText>{user.userData.company}</SecondaryText>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Stack direction="column" spacing="6px">
                  <PrimaryText>{generateHighlightedCell(user.vendorData.vendorName, vendorFilter)}</PrimaryText>
                  <SecondaryText>{user.vendorData.adress}</SecondaryText>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Stack direction="row" spacing="14px">
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{user.quantityData.order}</PrimaryText>
                    <SpanText>Order</SpanText>
                  </Stack>
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{user.quantityData.invoice}</PrimaryText>
                    <SpanText>Invoice</SpanText>
                  </Stack>
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{user.quantityData.working}</PrimaryText>
                    <SpanText>Working</SpanText>
                  </Stack>
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{user.quantityData.recieved}</PrimaryText>
                    <SpanText>Recieved</SpanText>
                  </Stack>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{user.orderId}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{user.invoiceNumber}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Stack direction="column" spacing="6px">
                  <PrimaryText>{user.lastCheckedInData.date}</PrimaryText>
                  <SecondaryText>{user.lastCheckedInData.time}</SecondaryText>
                </Stack>
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
