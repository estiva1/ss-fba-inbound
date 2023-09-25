import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import { Stack, Tooltip } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

import Thumbnail from "../thumbnail/thumbnail.component";
import testImage from "../../../assets/product-test-image.png";

import {
  ArrowRightPinkIcon,
  ButtonsContainer,
  IconContainer,
  ItemImage,
  PrimaryText,
  PrimaryTextHighlighted,
  PrinterIcon,
  RecentIcon,
  SpanText,
  SpanTextThin,
  StyledIconButton,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./products-table.styles";

const ProductsTable = ({ item, handleReceivingHistoryOpen }) => {
  const { id, title, quantityData, status, dimensions, sku, fnSku, asin, poNumber, username, companyName } = item || {};

  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 1100 }} aria-label="shipment table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ maxWidth: "250px" }}>Title</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Dimensions</StyledTableCell>
            <StyledTableCell>FNSKU</StyledTableCell>
            <StyledTableCell>PO #</StyledTableCell>
            <StyledTableCell>Client Name</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow key={id}>
            <StyledTableCell sx={{ maxWidth: "250px" }}>
              <Stack direction="row" spacing="10px" alignItems="center">
                <ItemImage src={testImage} style={{ width: "32px" }} loading="lazy" />
                <Stack direction="column" spacing="4px">
                  <Tooltip title={title} placement="top">
                    <PrimaryTextHighlighted>{title}</PrimaryTextHighlighted>
                  </Tooltip>
                  <SpanText>
                    ASIN:&nbsp;
                    <SpanTextThin>{asin}</SpanTextThin>
                  </SpanText>
                </Stack>
              </Stack>
            </StyledTableCell>
            <StyledTableCell>
              <Stack direction="row" spacing="14px">
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{quantityData.received}</PrimaryText>
                  <SpanText>Received</SpanText>
                </Stack>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{quantityData.ordered}</PrimaryText>
                  <SpanText>Ordered</SpanText>
                </Stack>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{quantityData.missing}</PrimaryText>
                  <SpanText>Missing</SpanText>
                </Stack>
              </Stack>
            </StyledTableCell>
            <StyledTableCell>
              <Thumbnail primaryColor="#1565D8" secondaryColor="#1565D808" text={status} enlarged />
            </StyledTableCell>
            <StyledTableCell>
              <Stack direction="row" spacing="0px">
                <Stack direction="column" spacing="4px">
                  <PrimaryText>{dimensions.l}&nbsp;x</PrimaryText>
                  <SpanText>L (in)</SpanText>
                </Stack>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>&nbsp;{dimensions.w}&nbsp;x</PrimaryText>
                  <SpanText>W (in)</SpanText>
                </Stack>
                <Stack direction="column" spacing="4px">
                  <PrimaryText>&nbsp;{dimensions.d}</PrimaryText>
                  <SpanText>D (in)</SpanText>
                </Stack>
              </Stack>
            </StyledTableCell>
            <StyledTableCell>
              <Stack direction="column" spacing="4px">
                <PrimaryText>{fnSku}</PrimaryText>
                <SpanText>
                  SKU:&nbsp;
                  <SpanTextThin>{sku}</SpanTextThin>
                </SpanText>
              </Stack>
            </StyledTableCell>
            <StyledTableCell>{poNumber}</StyledTableCell>
            <StyledTableCell>
              <Stack direction="column" spacing="4px">
                <PrimaryText>{username}</PrimaryText>
                <SpanText>{companyName}</SpanText>
              </Stack>
            </StyledTableCell>

            <StyledTableCell align="right">
              <Stack direction="row" gap="4px" justifyContent="end">
                <StyledIconButton>
                  <IconContainer>
                    <PrinterIcon />
                  </IconContainer>
                </StyledIconButton>
                <StyledIconButton onClick={handleReceivingHistoryOpen}>
                  <IconContainer>
                    <RecentIcon />
                  </IconContainer>
                </StyledIconButton>
                <StyledIconButton>
                  <IconContainer>
                    <ArrowRightPinkIcon />
                  </IconContainer>
                </StyledIconButton>
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ProductsTable;
