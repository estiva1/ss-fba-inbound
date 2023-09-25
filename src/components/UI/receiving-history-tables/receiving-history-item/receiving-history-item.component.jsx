import React from "react";
import {
  ItemImage,
  ItemImageContainer,
  PrimaryText,
  ReceivingHistoryItemContainer,
  StyledTableCell,
  StyledTableRow,
} from "./receiving-history-item.styles";

import testImage from "../../../../assets/product-test-image-2.png";
import { Stack, Table, TableBody, TableHead, TableRow, Tooltip } from "@mui/material";
import { StyledTableContainer } from "../receiving-history-table/receiving-history-table.styles";

const ReceivingHistoryItem = ({ item }) => {
  const { itemName, sku, fnSku, poNumber, productStatus } = item || {};
  return (
    <ReceivingHistoryItemContainer>
      <Stack direction="row" gap="16px" alignItems="center" width="350px">
        <ItemImageContainer>
          <ItemImage src={testImage} />
        </ItemImageContainer>
        <Tooltip title={itemName} placement="top">
          <PrimaryText>{itemName}</PrimaryText>
        </Tooltip>
      </Stack>

      <StyledTableContainer>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">SKU</StyledTableCell>
              <StyledTableCell align="left">FNSKU</StyledTableCell>
              <StyledTableCell align="left">PO #</StyledTableCell>
              <StyledTableCell align="left">Product Status</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="left">
                <PrimaryText>{sku}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{fnSku}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{poNumber}</PrimaryText>
              </StyledTableCell>
              <StyledTableCell align="left">
                <PrimaryText>{productStatus}</PrimaryText>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
    </ReceivingHistoryItemContainer>
  );
};

export default ReceivingHistoryItem;
