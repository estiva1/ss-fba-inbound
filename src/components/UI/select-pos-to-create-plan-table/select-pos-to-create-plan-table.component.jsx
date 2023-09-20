import React, { Fragment, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Collapse from "@mui/material/Collapse";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";
import { Checkbox, Stack, Tooltip } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import testImage from "../../../assets/check-in-item-list-of-goods-image.png";

import {
  ItemImage,
  PrimaryTextHighlighted,
  StyledTableCell,
  StyledTableContainer,
} from "./select-pos-to-create-plan-table.styles";

const generateHighlightedText = (text, filterValue) => {
  const lowerText = text.toLowerCase();
  const lowerFilterValue = filterValue.toLowerCase();

  if (!lowerText.includes(lowerFilterValue)) {
    return text;
  }

  const startIndex = lowerText.indexOf(lowerFilterValue);
  const endIndex = startIndex + lowerFilterValue.length;

  return (
    <>
      {text.substring(0, startIndex)}
      <span style={{ backgroundColor: "#1565D8", color: "#fff" }}>{text.substring(startIndex, endIndex)}</span>
      {text.substring(endIndex)}
    </>
  );
};

const Row = ({ row, isChecked, onCheckboxChange, itemFilter }) => {
  const { poNumber, vendor, orderId } = row;
  const [openRow, setOpenRow] = useState(false);

  const handleCheck = () => {
    onCheckboxChange(!isChecked);
  };

  return (
    <Fragment>
      <TableRow>
        <StyledTableCell sx={{ maxWidth: "20px" }} width="4%" align="left">
          <Checkbox sx={{ padding: 0, margin: 0 }} size="small" checked={isChecked} onChange={handleCheck} />
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {poNumber}
        </StyledTableCell>
        <StyledTableCell>{generateHighlightedText(vendor, itemFilter)}</StyledTableCell>
        <StyledTableCell>{orderId}</StyledTableCell>
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
                    <StyledTableCell width="27%">{generateHighlightedText(item.asin, itemFilter)}</StyledTableCell>
                    <StyledTableCell width="27%">{generateHighlightedText(item.sku, itemFilter)}</StyledTableCell>
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

const SelectPosTable = ({ data, itemFilter }) => {
  const matchingData = data.filter((item) => {
    const vendorMatch = item.vendor.toLowerCase().includes(itemFilter);
    const skuMatch = item.poData && item.poData.some((poItem) => poItem.sku.toLowerCase().includes(itemFilter));
    const asinMatch = item.poData && item.poData.some((poItem) => poItem.asin.toLowerCase().includes(itemFilter));
    return vendorMatch || skuMatch || asinMatch;
  });

  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedList, setIsCheckedList] = useState(matchingData.map(() => false));

  const isIndeterminate = isCheckedList.some((isChecked) => isChecked) && !isCheckedAll;

  const handleCheckAll = () => {
    const updatedIsCheckedAll = !isCheckedAll;
    setIsCheckedAll(updatedIsCheckedAll);
    setIsCheckedList(Array(data.length).fill(updatedIsCheckedAll));
  };

  const handleCheckboxChange = (index, checked) => {
    const updatedIsCheckedList = [...isCheckedList];
    updatedIsCheckedList[index] = checked;
    setIsCheckedList(updatedIsCheckedList);

    const updatedIsCheckedAll = updatedIsCheckedList.every((isChecked) => isChecked);
    setIsCheckedAll(updatedIsCheckedAll);
  };

  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="shipment table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ maxWidth: "20px" }} width="4%" align="left">
              <Checkbox
                sx={{ padding: 0, margin: 0 }}
                size="small"
                checked={isCheckedAll}
                onChange={handleCheckAll}
                indeterminate={isIndeterminate}
              />
            </StyledTableCell>
            <StyledTableCell align="left">PO#</StyledTableCell>
            <StyledTableCell align="left">Vendor</StyledTableCell>
            <StyledTableCell align="left">Order ID</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {matchingData.map((row, index) => (
            <Row
              key={row.id}
              row={row}
              isChecked={isCheckedList[index]}
              onCheckboxChange={(value) => handleCheckboxChange(index, value)}
              itemFilter={itemFilter}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default SelectPosTable;
