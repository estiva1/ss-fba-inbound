import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Table, TableBody, TableHead, TableRow } from "@mui/material";

import {
  PrimaryText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./edit-checked-in-pos-po-table.styles";

const EditCheckedInPosPoTable = ({ po }) => {
  const [tableData, setTableData] = useState(Array.from({ length: 15 }, () => po));

  const handleDelete = (id) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(id, 1);
    setTableData(updatedTableData);
  };

  return (
    <StyledTableContainer>
      <Table sx={{ minWidth: 700 }} stickyHeader aria-label="edit checked in pos po table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">PO #</StyledTableCell>
            <StyledTableCell align="left">Tracking/PO Numbers</StyledTableCell>
            <StyledTableCell align="left">SKU</StyledTableCell>
            <StyledTableCell align="left">Units</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((rowData, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left">
                <PrimaryText>{rowData.poNumber}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{rowData.trackingPoNumbers}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{rowData.sku}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{rowData.units}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton aria-label="Delete" onClick={() => handleDelete(index)}>
                  <DeleteIcon sx={{ color: "#CF0909" }} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default EditCheckedInPosPoTable;
