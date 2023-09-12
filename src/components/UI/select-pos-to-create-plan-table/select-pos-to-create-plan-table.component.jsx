import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import Counter from "../counter/counter.component";
//import IconButton from "../buttons/icon-button/icon-button.component";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Collapse from "@mui/material/Collapse";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";
import { Checkbox, Stack, TableCell, Tooltip } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
} from "./select-pos-to-create-plan-table.styles";

const Row = ({ row }) => {
  const [openRow, setOpenRow] = useState(false);

  return (
    <Fragment>
      <TableRow>
        <StyledTableCell sx={{ maxWidth: "20px" }} width="4%" align="left">
          <Checkbox sx={{ padding: 0, margin: 0 }} size="small" />
          {/* checked={isChecked} onChange={handleCheck} */}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.poNumber}
        </StyledTableCell>
        <StyledTableCell>{row.vendor}</StyledTableCell>
        <StyledTableCell>{row.orderId}</StyledTableCell>
        <StyledTableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpenRow(!openRow)}>
            {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
      </TableRow>

      <TableRow>
        <StyledTableCell style={{ padding: "0px 24px" }} colSpan={6}>
          <Collapse in={openRow} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ maxWidth: "20px", backgroundColor: "#F2F2F2 !important" }} width="4%">
                    <Checkbox sx={{ padding: 0, margin: 0 }} size="small" />
                    {/* checked={isChecked} onChange={handleCheck} */}
                  </StyledTableCell>
                  <StyledTableCell sx={{ backgroundColor: "#F2F2F2 !important" }} width="27%">
                    Item
                  </StyledTableCell>
                  <StyledTableCell sx={{ backgroundColor: "#F2F2F2 !important" }} width="27%">
                    ASIN
                  </StyledTableCell>
                  <StyledTableCell sx={{ backgroundColor: "#F2F2F2 !important" }} width="27%">
                    SKU
                  </StyledTableCell>
                  <StyledTableCell sx={{ backgroundColor: "#F2F2F2 !important" }} width="16%">
                    Quantity
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.poData.map((item) => (
                  <TableRow key={item.id}>
                    <StyledTableCell sx={{ maxWidth: "20px" }} width="4%">
                      <Checkbox sx={{ padding: 0, margin: 0 }} size="small" />
                      {/* checked={isChecked} onChange={handleCheck} */}
                    </StyledTableCell>
                    <StyledTableCell width="27%">
                      <Stack direction="row" spacing="10px" width="180px">
                        <ItemImage src={testImage} style={{ width: "24px", height: "24px" }} loading="lazy" />
                        <Tooltip title={item.item} placement="top">
                          <PrimaryTextHighlighted noWrap>{item.item}</PrimaryTextHighlighted>
                        </Tooltip>
                      </Stack>
                    </StyledTableCell>
                    <StyledTableCell width="27%">{item.asin}</StyledTableCell>
                    <StyledTableCell width="27%">{item.sku}</StyledTableCell>
                    <StyledTableCell width="16%">{item.quantity}</StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </Fragment>
  );
};

const SelectPosTable = ({ data }) => {
  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="shipment table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ maxWidth: "20px" }} width="4%" align="left">
              <Checkbox sx={{ padding: 0, margin: 0 }} size="small" />
              {/* checked={isChecked} onChange={handleCheck} */}
            </StyledTableCell>
            <StyledTableCell align="left">PO#</StyledTableCell>
            <StyledTableCell align="left">Vendor</StyledTableCell>
            <StyledTableCell align="left">Order ID</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default SelectPosTable;
