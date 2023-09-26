import React from "react";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import { IconButton, Stack } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { SecondaryText, StyledTableCell, StyledTableContainer, StyledTableRow } from "./shipments-table.styles";
import CustomizedProgressBar from "../progress-bar/progress-bar.component";

const ShipmentsTable = ({ item, handleEditCheckedInPosOpen, handleReviewShipmentPlanOpen }) => {
  const { shipmentId, fcId, pos, skus, qty, progressData, user, shipmentFrom, shipmentType, carrierType, createdAt } =
    item || {};

  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Shipment ID</StyledTableCell>
            <StyledTableCell>FC ID</StyledTableCell>
            <StyledTableCell>POs</StyledTableCell>
            <StyledTableCell>SKUs</StyledTableCell>
            <StyledTableCell>Qty.</StyledTableCell>
            <StyledTableCell>Progress</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Shipment From</StyledTableCell>
            <StyledTableCell>Shipment Type</StyledTableCell>
            <StyledTableCell>Carrier Type</StyledTableCell>
            <StyledTableCell>Created At</StyledTableCell>

            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow key={shipmentId}>
            <StyledTableCell>{shipmentId}</StyledTableCell>
            <StyledTableCell>{fcId}</StyledTableCell>
            <StyledTableCell>{pos}</StyledTableCell>
            <StyledTableCell>{skus}</StyledTableCell>
            <StyledTableCell>{qty}</StyledTableCell>
            <StyledTableCell>
              <Stack direction="row" gap="8px" alignItems="center">
                <div style={{ width: "100px" }}>
                  <CustomizedProgressBar progress={(progressData.current / progressData.absolute) * 100} />
                </div>
                <SecondaryText>
                  {progressData.current}/{progressData.absolute}
                </SecondaryText>
              </Stack>
            </StyledTableCell>
            <StyledTableCell>{user}</StyledTableCell>
            <StyledTableCell>{shipmentFrom}</StyledTableCell>
            <StyledTableCell>{shipmentType}</StyledTableCell>
            <StyledTableCell>{carrierType}</StyledTableCell>
            <StyledTableCell>{createdAt}</StyledTableCell>
            <StyledTableCell align="right">
              {/* <Stack direction="row" gap="10px" alignItems="center">
                <IconButton aria-label="Edit" onClick={() => handleEditCheckedInPosOpen(item)}>
                  <EditNoteIcon sx={{ color: "#1565D8" }} />
                </IconButton>
                <IconButton aria-label="Open" onClick={() => handleReviewShipmentPlanOpen(item)}>
                  <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8", transform: "rotate(180deg)" }} />
                </IconButton>
              </Stack> */}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ShipmentsTable;
