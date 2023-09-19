import React from "react";
import { Paper, Stack, Table, TableBody, TableHead, TableRow } from "@mui/material";

import Thumbnail from "../../thumbnail/thumbnail.component";

import {
  HighlightedText,
  PrimaryText,
  SecondaryText,
  SpanText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./check-in-item.styles";

const CheckInItem = ({ user }) => {
  const { orderId, fulfillment, poNumber, userData, vendorData, quantityData, createdDate } = user || {};

  return (
    <StyledTableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="check in item">
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
            <StyledTableCell>
              <Stack direction="column" spacing="6px">
                <HighlightedText>{poNumber}</HighlightedText>
                <Thumbnail primaryColor="#1565D8" secondaryColor="#009C340D" text={fulfillment} />
              </Stack>
            </StyledTableCell>
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
              <Stack direction="row" spacing="16px">
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
                    <SecondaryText>at {createdDate.time}</SecondaryText>
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
