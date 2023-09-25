import React, { useState } from "react";

import { Stack } from "@mui/material";

import FullScreenDialog from "../UI/dialog/dialog.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import CustomDropdown from "../UI/dropdowns/custom-dropdown/custom-dropdown.component";

import ReceivingHistory from "../receiving-history/receiving-history.component";
import ProductsTableStack from "../products-table-stack/products-table-stack.component";

import { Container } from "./print-2d-labels-content.styles";
import { productsData } from "../../constants/print-2d-labels-index";

const PrintTwoDLablesContent = ({ content }) => {
  const [isReceivingHistoryOpen, setIsReceivingHistoryOpen] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState(null);

  const handleReceivingHistoryOpen = () => {
    setIsReceivingHistoryOpen(true);
  };
  const handleReceivingHistoryClose = () => {
    setIsReceivingHistoryOpen(false);
  };

  switch (content) {
    case 1:
      return <div>Shipment Mode Table</div>;
    case 2:
      return (
        <Container>
          <Stack direction="row" gap="30px" alignItems="center" width="100%">
            <div style={{ flex: 1 }}>
              <CustomizedSearchField placeholder="Search by invoice #, PO #, Order ID, Tracking" />
            </div>
            <div style={{ flex: 1 }}>
              <CustomizedSearchField placeholder="By UPC/ASIN/SKU/FNSKU/Vendor UPC" />
            </div>
            <div style={{ flex: 1 }}>
              <CustomDropdown placeholder="User" data={productsData} setSelectedUsername={setSelectedUsername} />
            </div>
          </Stack>
          <ProductsTableStack
            selectedUsername={selectedUsername}
            handleReceivingHistoryOpen={handleReceivingHistoryOpen}
          />
          <FullScreenDialog open={isReceivingHistoryOpen} onClose={handleReceivingHistoryClose}>
            <ReceivingHistory onClose={handleReceivingHistoryClose} />
          </FullScreenDialog>
        </Container>
      );
    case 3:
      return <div>Case 3</div>;
  }
};

export default PrintTwoDLablesContent;
