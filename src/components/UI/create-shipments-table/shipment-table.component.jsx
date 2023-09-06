import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

import IconButton from "../buttons/icon-button/icon-button.component";

import pencilSquareIcon from "../../../assets/pencil-square-icon.png";
import arrowRightShortIcon from "../../../assets/arrow-right-short-icon.png";

import { ButtonsContainer, StyledTableCell, StyledTableContainer, StyledTableRow } from "./shipment-table.styles";

const Buttons = ({ handleReviewShipmentPlanOpen, user }) => {
  return (
    <ButtonsContainer>
      <IconButton src={pencilSquareIcon} alt="Edit" />
      <IconButton src={arrowRightShortIcon} alt="Open" onClick={() => handleReviewShipmentPlanOpen(user)} />
    </ButtonsContainer>
  );
};

const ShipmentTable = ({ user, handleReviewShipmentPlanOpen }) => {
  const { username, email, companyName, totalPOS, sku, units } = user || {};

  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="shipment table">
        <TableHead>
          <TableRow>
            <StyledTableCell width="20%">Username</StyledTableCell>
            <StyledTableCell width="20%" align="left">
              Email
            </StyledTableCell>
            <StyledTableCell width="20%" align="left">
              Company Name
            </StyledTableCell>
            <StyledTableCell width="12%" align="left">
              Total PO's
            </StyledTableCell>
            <StyledTableCell width="12%" align="left">
              SKU
            </StyledTableCell>
            <StyledTableCell width="12%" align="left">
              Units
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow key={username}>
            <StyledTableCell width="20%">
              {username}
            </StyledTableCell>
            <StyledTableCell width="20%" align="left">
              {email}
            </StyledTableCell>
            <StyledTableCell width="20%" align="left">
              {companyName}
            </StyledTableCell>
            <StyledTableCell width="12%" align="left">
              {totalPOS}
            </StyledTableCell>
            <StyledTableCell width="12%" align="left">
              {sku}
            </StyledTableCell>
            <StyledTableCell width="12%" align="left">
              {units}
            </StyledTableCell>
            <StyledTableCell align="right">
              <Buttons handleReviewShipmentPlanOpen={handleReviewShipmentPlanOpen} user={user} />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ShipmentTable;
