import React from "react";

import { Paper, Table, TableBody, TableHead, TableRow } from "@mui/material";

import {
  PrimaryText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./check-in-history-tracking-info-table.styles";

const TrackingInfoTable = ({ trackingData }) => {
  const trackingItems = trackingData.map(({ lastCheckedInData, trackingPoNumber }) => {
    const { date, time } = lastCheckedInData;

    return {
      date,
      time,
      trackingPoNumber,
    };
  });

  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader aria-label="tracking info table">
        <TableHead>
          <TableRow>
            <StyledTableCell width="35%" align="left">
              Check In At
            </StyledTableCell>
            <StyledTableCell align="left">Tracking/Po Number</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {trackingItems.map(({ date, time, trackingPoNumber }) => (
            <StyledTableRow>
              <StyledTableCell width="35%" align="left">
                <PrimaryText>
                  {date} - {time}
                </PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{trackingPoNumber}</PrimaryText>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TrackingInfoTable;
