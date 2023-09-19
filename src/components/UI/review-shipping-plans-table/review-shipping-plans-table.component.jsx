import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Stack, Tooltip } from "@mui/material";

import Counter from "../counter/counter.component";
import testImage from "../../../assets/check-in-item-list-of-goods-image.png";
import {
  ItemImage,
  PrimaryText,
  PrimaryTextHighlighted,
  SpanText,
  SpanTextThin,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./review-shipping-plans-table.styles";

const ReviewShippingPlansTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  const handleDelete = (id) => {
    setTableData((prevPosts) => prevPosts.filter((_, index) => index !== id));
  };

  return (
    <StyledTableContainer>
      <Table aria-label="review shipping plans table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Product</StyledTableCell>
            <StyledTableCell align="left">Statement</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((item, id) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell width={100} align="left">
                <Stack direction="row" spacing="10px">
                  <ItemImage src={testImage} style={{ width: "36px", height: "36px" }} loading="lazy" />
                  <Stack direction="column" spacing="7px" width="140px">
                    <Tooltip title={item.title} placement="top">
                      <PrimaryTextHighlighted noWrap>{item.title}</PrimaryTextHighlighted>
                    </Tooltip>
                    <SpanText style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
                      SKU: <SpanTextThin>{item.skuData.sku}</SpanTextThin>
                    </SpanText>
                  </Stack>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>Error because your items exceeds limit</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Counter />
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton aria-label="Delete" onClick={() => handleDelete(id)}>
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

export default ReviewShippingPlansTable;
