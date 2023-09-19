import React from "react";

import Table from "@mui/material/Table";
import { Checkbox } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

import { StyledTableCell, StyledTableContainer, StyledTableRow } from "./review-amazon-shipments-item.styles";

const ReviewAmazonShipmentsItem = ({ item, isChecked, onCheckboxChange }) => {
  const { id, fcId, totalSkus, quantityData } = item || {};

  const handleCheck = () => {
    onCheckboxChange(!isChecked);
  };

  return (
    <StyledTableContainer>
      <Table aria-label="review amazon shipments item">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ maxWidth: "20px" }} width="4%" align="left">
              <Checkbox sx={{ padding: 0, margin: 0 }} size="small" checked={isChecked} onChange={handleCheck} />
            </StyledTableCell>
            <StyledTableCell width="24%" align="left">
              Shipment ID
            </StyledTableCell>
            <StyledTableCell width="24%" align="left">
              FC ID
            </StyledTableCell>
            <StyledTableCell width="24%" align="left">
              Total SKU's
            </StyledTableCell>
            <StyledTableCell width="24%" align="left">
              Quantity
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow key={id}>
            <StyledTableCell sx={{ maxWidth: "20px" }} width="4%" align="left"></StyledTableCell>
            <StyledTableCell width="24%" align="left">
              {id}
            </StyledTableCell>
            <StyledTableCell width="24%" align="left">
              {fcId}
            </StyledTableCell>
            <StyledTableCell width="24%" align="left">
              {totalSkus}
            </StyledTableCell>
            <StyledTableCell width="24%" align="left">
              {quantityData && quantityData.invoice}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ReviewAmazonShipmentsItem;
