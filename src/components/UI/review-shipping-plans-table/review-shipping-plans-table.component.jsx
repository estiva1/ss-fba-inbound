import React from "react";

import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../buttons/button/button.component";

import {
  Arrow,
  ButtonsContainer,
  PrimaryText,
  SecondaryText,
  SpanText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./review-shipping-plans-table.styles";

const ReviewShippingPlansTable = ({ data, userNameFilter, vendorFilter, onOpenCheckIn, onOpenCheckInHistory }) => {

  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="shipment table">
        <TableHead>
          <TableRow>
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
                  <PrimaryText></PrimaryText>
                  <SecondaryText>{user.userData.company}</SecondaryText>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Stack direction="column" spacing="6px">
                  <PrimaryText></PrimaryText>
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
                    <PrimaryText>{user.quantityData.received}</PrimaryText>
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

export default ReviewShippingPlansTable;
