import React from "react";
import {
  PrimaryText,
  PrimaryTextHighlighted,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./check-in-history-po-info-table.styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Thumbnail from "../../thumbnail/thumbnail.component";

const POInfoTable = ({ poData }) => {
  const { poNumber, fulfillment, userData, vendorData, createdDate, quantityData } = poData || {};

  return (
    <StyledTableContainer>
      <PrimaryTextHighlighted>PO#: {poNumber}</PrimaryTextHighlighted>
      <Table aria-label="check in history po info table 1">
        <TableHead>
          <TableRow>
            <StyledTableCell width="20%" align="left">PO Type</StyledTableCell>
            <StyledTableCell width="20%" align="left">Username</StyledTableCell>
            <StyledTableCell width="30%" align="left">Company Name</StyledTableCell>
            <StyledTableCell width="30%" align="left">Vendor Name</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow>
            <StyledTableCell width="20%" align="left">
              <Thumbnail enlarged primaryColor="#1565D8" secondaryColor="#009C340D" text={fulfillment} />
            </StyledTableCell>
            <StyledTableCell width="20%" align="left">{userData && <PrimaryText>{userData.userName}</PrimaryText>}</StyledTableCell>
            <StyledTableCell width="30%" align="left">{userData && <PrimaryText>{userData.company}</PrimaryText>}</StyledTableCell>
            <StyledTableCell width="30%" align="left">
              {vendorData && <PrimaryText>{vendorData.vendorName}</PrimaryText>}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>

      <Table aria-label="check in history po info table 2">
        <TableHead>
          <TableRow>
            <StyledTableCell width="40%" align="left">Created Date</StyledTableCell>
            <StyledTableCell width="30%" align="left">Received Units</StyledTableCell>
            <StyledTableCell width="30%" align="left">Remaining Units</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow>
            <StyledTableCell width="40%" align="left">
              {createdDate && (
                <PrimaryText>
                  {createdDate.date} at {createdDate.time}
                </PrimaryText>
              )}
            </StyledTableCell>
            <StyledTableCell width="30%" align="left">
              {quantityData && <PrimaryText>{quantityData.received}</PrimaryText>}
            </StyledTableCell>
            <StyledTableCell width="30%" align="left">
              {quantityData && <PrimaryText>{quantityData.remaining}</PrimaryText>}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default POInfoTable;
