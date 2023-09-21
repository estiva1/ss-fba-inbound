import React, { useState } from "react";

import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import { IconButton, Stack, Tooltip } from "@mui/material";

import Thumbnail from "../../thumbnail/thumbnail.component";
import CustomDatePicker from "../../datePicker/date-picker.component";
import TableCellTextfield from "../../text-fields/table-cell-textfield/table-cell-textfield.component";
import testImage from "../../../../assets/check-in-item-list-of-goods-image.png";

import {
  ButtonsContainer,
  ItemImage,
  PrimaryText,
  PrimaryTextHighlighted,
  SpanText,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./check-in-item-list-of-goods.styles";

const Buttons = () => {
  const handleClick = () => {
    // Click handler logic here
    alert("Clicked!");
  };

  return (
    <ButtonsContainer>
      <IconButton aria-label="Save" onClick={handleClick}>
        <SaveIcon sx={{ color: "#1565D8" }} />
      </IconButton>
      <IconButton aria-label="Print" onClick={handleClick}>
        <PrintIcon sx={{ color: "#1565D8" }} />
      </IconButton>
    </ButtonsContainer>
  );
};

const CheckInItemListOfGoods = ({ goodsData }) => {
  const goods = goodsData.map(({ title, skuData, itemStatus, quantityData }) => {
    const { sku, asin } = skuData;
    const { order, invoice, working, received } = quantityData;

    return {
      title,
      sku,
      asin,
      itemStatus,
      order,
      invoice,
      working,
      received,
    };
  });

  const [date, setDate] = useState(null);

  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader aria-label="list of goods table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">SKU</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Expiry Date</StyledTableCell>
            <StyledTableCell align="left">Pack Of</StyledTableCell>
            <StyledTableCell align="left">Check-In Qty</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {goods.map(({ title, sku, asin, itemStatus, order, invoice, working, received }) => (
            <StyledTableRow key={asin}>
              <StyledTableCell align="left" sx={{ maxWidth: "160px" }}>
                <Stack direction="row" spacing="10px">
                  <ItemImage src={testImage} style={{ width: "24px", height: "24px" }} loading="lazy" />
                  <Tooltip title={title} placement="top">
                    <PrimaryTextHighlighted>{title}</PrimaryTextHighlighted>
                  </Tooltip>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ width: "150px" }}>
                <Stack direction="column" spacing="6px">
                  <PrimaryText>{sku}</PrimaryText>
                  <SpanText>ASIN: {asin}</SpanText>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>
                  <Thumbnail primaryColor="#009C34" secondaryColor="rgba(0, 156, 52, 0.03)" text={itemStatus} />
                </PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Stack direction="row" spacing="14px">
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{order}</PrimaryText>
                    <SpanText>Order</SpanText>
                  </Stack>
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{invoice}</PrimaryText>
                    <SpanText>Invoice</SpanText>
                  </Stack>
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{working}</PrimaryText>
                    <SpanText>Working</SpanText>
                  </Stack>
                  <Stack direction="column" spacing="4px">
                    <PrimaryText>{received}</PrimaryText>
                    <SpanText>Recieved</SpanText>
                  </Stack>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="left">
                <CustomDatePicker onChange={(newDate) => setDate(newDate)} />
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ maxWidth: "90px" }}>
                <TableCellTextfield />
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ maxWidth: "90px" }}>
                <TableCellTextfield />
              </StyledTableCell>
              <StyledTableCell align="right">
                <Buttons />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CheckInItemListOfGoods;
