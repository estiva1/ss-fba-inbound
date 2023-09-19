import React from "react";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";

import {
  PrimaryText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./edit-checked-in-pos-user-table.styles";

const EditCheckedInPosUserTable = ({ user }) => {
  const { username = "", companyName = "", email = "", totalPOS = 0, sku = 0, units = 0 } = user || {};

  return (
    <StyledTableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="edit checked in pos user table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="left">Company Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Total PO's</StyledTableCell>
            <StyledTableCell align="left">SKU</StyledTableCell>
            <StyledTableCell align="left">Units</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="left">
              <PrimaryText>{username}</PrimaryText>
            </StyledTableCell>
            <StyledTableCell align="left">
              <PrimaryText>{companyName}</PrimaryText>
            </StyledTableCell>
            <StyledTableCell align="left">
              <PrimaryText>{email}</PrimaryText>
            </StyledTableCell>
            <StyledTableCell align="left">
              <PrimaryText>{totalPOS}</PrimaryText>
            </StyledTableCell>
            <StyledTableCell align="left">
              <PrimaryText>{sku}</PrimaryText>
            </StyledTableCell>
            <StyledTableCell align="left">
              <PrimaryText>{units}</PrimaryText>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default EditCheckedInPosUserTable;
