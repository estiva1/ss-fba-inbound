import React from "react";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import { IconButton, Stack } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { StyledTableCell, StyledTableContainer, StyledTableRow } from "./shipment-table.styles";

const ShipmentTable = ({ user, handleEditCheckedInPosOpen, handleReviewShipmentPlanOpen }) => {
  const { id, username, email, companyName, totalPOS, sku, units } = user || {};

  return (
    <StyledTableContainer>
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
          <StyledTableRow key={id}>
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
              <Stack direction="row" gap="10px" alignItems="center">
                <IconButton aria-label="Edit" onClick={() => handleEditCheckedInPosOpen(user)}>
                  <EditNoteIcon sx={{ color: "#1565D8" }} />
                </IconButton>
                <IconButton aria-label="Open" onClick={() => handleReviewShipmentPlanOpen(user)}>
                  <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8", transform: "rotate(180deg)" }} />
                </IconButton>
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ShipmentTable;
