import React, { useState } from "react";

import { Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

import {
  IconContainer,
  PrimaryText,
  PrimaryTextHighlighted,
  PrinterIcon,
  SpanText,
  StyledIconButton,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
  TrashIcon,
  TruckWithBarCodeIcon,
} from "./receiving-history-table.styles";

const ReceivingHistoryTable = ({ data }) => {
  const [tableData, setTableData] = useState(Array(15).fill(data[0]));

  const handleDelete = (id) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(id, 1);
    setTableData(updatedTableData);
  };

  return (
    <StyledTableContainer>
      <Table stickyHeader aria-label="receiving history table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Received By</StyledTableCell>
            <StyledTableCell align="left">User</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Shipment</StyledTableCell>
            <StyledTableCell align="left">Box Category</StyledTableCell>
            <StyledTableCell align="left">Bndle Qty</StyledTableCell>
            <StyledTableCell align="left">Expiry</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((rowData, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                <PrimaryText>{rowData.date}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell>
                <PrimaryText>{rowData.receivedBy}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{rowData.userData.username}</PrimaryText>
                  <SpanText>{rowData.userData.companyName}</SpanText>
                </Stack>
              </StyledTableCell>
              <StyledTableCell>
                <Stack direction="row" spacing="8px">
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{rowData.quantityData.boxes}</PrimaryText>
                    <SpanText>Boxes</SpanText>
                  </Stack>

                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{rowData.quantityData.inABox}</PrimaryText>
                    <SpanText>In a Box</SpanText>
                  </Stack>
                </Stack>
              </StyledTableCell>
              <StyledTableCell>
                <Stack direction="column" spacing="4px">
                  <PrimaryTextHighlighted>{rowData.shipmentData.number}</PrimaryTextHighlighted>
                  <SpanText>{rowData.shipmentData.shipmentName}</SpanText>
                </Stack>
              </StyledTableCell>
              <StyledTableCell>
                <PrimaryText>{rowData.boxCategory}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell>
                <PrimaryText>{rowData.bundleQty}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell>
                <PrimaryText>{rowData.expiry}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{rowData.locationData.location}</PrimaryText>
                  <SpanText>{rowData.locationData.warehouseName}</SpanText>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Stack direction="row" gap="4px" justifyContent="end">
                  <StyledIconButton>
                    <IconContainer>
                      <TruckWithBarCodeIcon />
                    </IconContainer>
                  </StyledIconButton>
                  <StyledIconButton>
                    <IconContainer>
                      <PrinterIcon />
                    </IconContainer>
                  </StyledIconButton>
                  <StyledIconButton onClick={() => handleDelete(index)}>
                    <IconContainer>
                      <TrashIcon />
                    </IconContainer>
                  </StyledIconButton>
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ReceivingHistoryTable;
