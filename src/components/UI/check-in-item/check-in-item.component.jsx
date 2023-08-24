import React from "react";
import {
  PrimaryText,
  SecondaryText,
  SpanText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./check-in-item.styles";
import { Paper, Stack, Table, TableBody, TableHead, TableRow } from "@mui/material";

const CheckInItem = ({ user }) => {
  const { orderId, poNumber, userData, vendorData, quantityData, lastCheckedInData } = user || {};
  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="shipment table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PO #</StyledTableCell>
            <StyledTableCell align="left">User</StyledTableCell>
            <StyledTableCell align="left">Vendor</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Last Checked In</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow key={orderId}>
            <StyledTableCell>{poNumber}</StyledTableCell>
            <StyledTableCell align="left">
              <Stack direction="column" spacing="6px">
                <PrimaryText>{userData.userName}</PrimaryText>
                <SecondaryText>{userData.company}</SecondaryText>
              </Stack>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Stack direction="column" spacing="6px">
                <PrimaryText>{vendorData.vendorName}</PrimaryText>
                <SecondaryText>{vendorData.adress}</SecondaryText>
              </Stack>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Stack direction="row" spacing="14px">
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{quantityData.order}</PrimaryText>
                  <SpanText>Order</SpanText>
                </Stack>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{quantityData.invoice}</PrimaryText>
                  <SpanText>Invoice</SpanText>
                </Stack>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{quantityData.working}</PrimaryText>
                  <SpanText>Working</SpanText>
                </Stack>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{quantityData.recieved}</PrimaryText>
                  <SpanText>Recieved</SpanText>
                </Stack>
              </Stack>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Stack direction="column" spacing="6px">
                <PrimaryText>{lastCheckedInData.date}</PrimaryText>
                <SecondaryText>{lastCheckedInData.time}</SecondaryText>
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CheckInItem;
