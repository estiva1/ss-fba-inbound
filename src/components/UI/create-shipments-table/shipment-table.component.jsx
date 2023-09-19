import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { IconButton } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import EditNoteIcon from "@mui/icons-material/EditNote";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { ButtonsContainer, StyledTableCell, StyledTableContainer, StyledTableRow } from "./shipment-table.styles";

const Buttons = ({ handleReviewShipmentPlanEdit, handleReviewShipmentPlanOpen, user }) => {
  return (
    <ButtonsContainer>
      <IconButton aria-label="Edit" onClick={() => handleReviewShipmentPlanEdit(user)}>
        <EditNoteIcon sx={{ color: "#1565D8" }} />
      </IconButton>
      <IconButton aria-label="Open" onClick={() => handleReviewShipmentPlanOpen(user)}>
        <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8", transform: "rotate(180deg)" }} />
      </IconButton>
    </ButtonsContainer>
  );
};

const ShipmentTable = ({ user, handleReviewShipmentPlanEdit, handleReviewShipmentPlanOpen }) => {
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
            <StyledTableCell width="11%" align="left">
              Total PO's
            </StyledTableCell>
            <StyledTableCell width="11%" align="left">
              SKU
            </StyledTableCell>
            <StyledTableCell width="11%" align="left">
              Units
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow key={username}>
            <StyledTableCell width="20%">{username}</StyledTableCell>
            <StyledTableCell width="20%" align="left">
              {email}
            </StyledTableCell>
            <StyledTableCell width="20%" align="left">
              {companyName}
            </StyledTableCell>
            <StyledTableCell width="11%" align="left">
              {totalPOS}
            </StyledTableCell>
            <StyledTableCell width="11%" align="left">
              {sku}
            </StyledTableCell>
            <StyledTableCell width="11%" align="left">
              {units}
            </StyledTableCell>
            <StyledTableCell align="right">
              <Buttons
                handleReviewShipmentPlanOpen={handleReviewShipmentPlanOpen}
                handleReviewShipmentPlanEdit={handleReviewShipmentPlanEdit}
                user={user}
              />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ShipmentTable;
