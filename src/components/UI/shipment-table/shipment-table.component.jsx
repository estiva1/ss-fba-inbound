import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ButtonsContainer, StyledTableCell, StyledTableContainer, StyledTableRow } from "./shipment-table.styles";
import IconButton from "../buttons/icon-button/icon-button.component";

import arrowLeftShortIcon from "../../../assets/arrow-left-short-icon.png";
import pencilSquareIcon from "../../../assets/pencil-square-icon.png";

const Buttons = () => {
  const handleClick = () => {
    // Click handler logic here
    console.log("Clicked!");
  };

  return (
    <ButtonsContainer>
      <IconButton src={pencilSquareIcon} alt="Edit" onClick={handleClick} />
      <IconButton src={arrowLeftShortIcon} alt="Open" onClick={handleClick} />
    </ButtonsContainer>
  );
};

const ShipmentTable = ({ user }) => {
  const { username, email, companyName, totalPOS, sku, units } = user || {};

  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="shipment table">
        <TableHead>
          <TableRow>
            <StyledTableCell width="20%">Username</StyledTableCell>
            <StyledTableCell width="20%" align="left">Email</StyledTableCell>
            <StyledTableCell width="20%" align="left">Company Name</StyledTableCell>
            <StyledTableCell width="12%" align="left">Total PO's</StyledTableCell>
            <StyledTableCell width="12%" align="left">SKU</StyledTableCell>
            <StyledTableCell width="12%" align="left">Units</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          <StyledTableRow key={username}>
            <StyledTableCell width="20%" component="th" scope="row">
              {username}
            </StyledTableCell>
            <StyledTableCell width="20%" align="left">{email}</StyledTableCell>
            <StyledTableCell width="20%" align="left">{companyName}</StyledTableCell>
            <StyledTableCell width="12%" align="left">{totalPOS}</StyledTableCell>
            <StyledTableCell width="12%" align="left">{sku}</StyledTableCell>
            <StyledTableCell width="12%" align="left">{units}</StyledTableCell>
            <StyledTableCell align="right">
              <Buttons />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ShipmentTable;
