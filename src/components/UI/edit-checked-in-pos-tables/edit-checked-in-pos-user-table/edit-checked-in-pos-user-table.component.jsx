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
} from "./edit-checked-in-pos-user-table.styles";

const EditCheckedInPosUserTable = ({ user }) => {
  const { username, companyName, email } = user || {};

  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="shipment table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="left">Vendor</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Created Date</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="left">
              <PrimaryText>{username}</PrimaryText>
            </StyledTableCell>
            {/* <StyledTableCell align="left">
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
            </StyledTableCell> */}
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default EditCheckedInPosUserTable;
