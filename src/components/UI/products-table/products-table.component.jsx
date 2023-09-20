import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { IconButton, Stack, Tooltip } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import EditNoteIcon from "@mui/icons-material/EditNote";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { ReactComponent as PrinterLogo } from "../../../assets/printer.svg";
import { ReactComponent as ReceivingHistory } from "../../../assets/recent.svg";
import { ReactComponent as View } from "../../../assets/arrow-right-green.svg";

import testImage from "../../../assets/product-test-image.png";

import {
  ButtonsContainer,
  ItemImage,
  PrimaryText,
  PrimaryTextHighlighted,
  SpanText,
  SpanTextHighlighted,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow,
} from "./products-table.styles";
import Thumbnail from "../thumbnail/thumbnail.component";

const Buttons = ({ handleEditCheckedInPosOpen, handleReviewShipmentPlanOpen, user }) => {
  return (
    <ButtonsContainer>
      <IconButton aria-label="Edit" onClick={() => handleEditCheckedInPosOpen(user)}>
        <PrinterLogo style={{ width: "24px", height: "auto" }} />
      </IconButton>
      <IconButton aria-label="Edit" onClick={() => handleEditCheckedInPosOpen(user)}>
        <ReceivingHistory style={{ width: "24px", height: "auto" }} />
      </IconButton>
      <IconButton aria-label="Edit" onClick={() => handleEditCheckedInPosOpen(user)}>
        <View style={{ width: "24px", height: "auto" }} />
      </IconButton>
    </ButtonsContainer>
  );
};

const ProductsTable = ({ item }) => {
  const { id, title, quantityData, status, dimensions, sku, fnSku, asin, poNumber, clientData } = item || {};

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
                    <SpanTextHighlighted>{asin}</SpanTextHighlighted>
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
                  <SpanTextHighlighted>{sku}</SpanTextHighlighted>
                </SpanText>
              </Stack>
            </StyledTableCell>
            <StyledTableCell>{poNumber}</StyledTableCell>
            <StyledTableCell>
              <Stack direction="column" spacing="4px">
                <PrimaryText>{clientData.clientName}</PrimaryText>
                <SpanText>{clientData.companyName}</SpanText>
              </Stack>
            </StyledTableCell>

            <StyledTableCell align="right">
              <Buttons
                item={item}
                // handleEditCheckedInPosOpen={handleEditCheckedInPosOpen}
                // handleReviewShipmentPlanOpen={handleReviewShipmentPlanOpen}
              />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ProductsTable;
