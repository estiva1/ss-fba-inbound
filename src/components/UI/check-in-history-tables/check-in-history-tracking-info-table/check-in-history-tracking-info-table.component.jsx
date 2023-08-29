import React from "react";

import { Paper, Table, TableBody, TableHead, TableRow } from "@mui/material";
import {
  PrimaryText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./check-in-history-tracking-info-table.styles";

const TrackingInfoTable = ({ trackingData }) => {
  const trackingItems = trackingData.map(({ lastCheckedInData, trackingProNumber }) => {
    const { date, time } = lastCheckedInData;

    return {
      date,
      time,
      trackingProNumber,
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
            <StyledTableCell align="left">Tracking/Pro Number</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {trackingItems.map(({ date, time, trackingProNumber }) => (
            <StyledTableRow>
              <StyledTableCell width="35%" align="left">
                <PrimaryText>
                  {date} - {time}
                </PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{trackingProNumber}</PrimaryText>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TrackingInfoTable;
