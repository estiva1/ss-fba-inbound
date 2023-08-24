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
  const { orderId, poNumber, userData, vendorData, quantityData, createdDate } = user || {};
  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="shipment table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PO #</StyledTableCell>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="left">Vendor</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Created Date</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow key={orderId}>
            <StyledTableCell>{poNumber}</StyledTableCell>
            <StyledTableCell align="left">
              <Stack direction="column" spacing="6px">
                {userData && (
                  <>
                    <PrimaryText>{userData.userName}</PrimaryText>
                    <SecondaryText>{userData.company}</SecondaryText>
                  </>
                )}
              </Stack>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Stack direction="column" spacing="6px">
                {vendorData && (
                  <>
                    <PrimaryText>{vendorData.vendorName}</PrimaryText>
                    <SecondaryText>{vendorData.adress}</SecondaryText>
                  </>
                )}
              </Stack>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Stack direction="row" spacing="14px">
                {quantityData && (
                  <>
                    <Stack direction="column" spacing="4px">
                      <PrimaryText>{quantityData.order}</PrimaryText>
                      <SpanText>Order</SpanText>
                    </Stack>
                    <Stack direction="column" spacing="4px">
                      <PrimaryText>{quantityData.invoice}</PrimaryText>
                      <SpanText>Invoice</SpanText>
                    </Stack>
                    <Stack direction="column" spacing="4px">
                      <PrimaryText>{quantityData.received}</PrimaryText>
                      <SpanText>Received</SpanText>
                    </Stack>
                    <Stack direction="column" spacing="4px">
                      <PrimaryText>{quantityData.remaining}</PrimaryText>
                      <SpanText>Recieved</SpanText>
                    </Stack>
                    <Stack direction="column" spacing="4px">
                      <PrimaryText>{quantityData.shipped}</PrimaryText>
                      <SpanText>Shipped</SpanText>
                    </Stack>
                  </>
                )}
              </Stack>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Stack direction="column" spacing="6px">
                {createdDate && (
                  <>
                    <PrimaryText>{createdDate.date}</PrimaryText>
                    <SecondaryText>{createdDate.time}</SecondaryText>
                  </>
                )}
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CheckInItem;
