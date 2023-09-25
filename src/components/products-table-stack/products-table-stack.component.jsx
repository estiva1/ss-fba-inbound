import React from "react";
import { Stack } from "@mui/material";
import ProductsTable from "../UI/products-table/products-table.component";

import { productsData } from "../../constants/print-2d-labels-index";

const ProductsTableStack = ({ selectedUsername, handleReceivingHistoryOpen }) => {
  const filteredData = selectedUsername
    ? productsData.filter((user) => user.username === selectedUsername)
    : productsData;

  return (
    <Stack direction="column" spacing="10px">
      {filteredData.map((item, index) => (
        <ProductsTable key={`table-${index}`} item={item} handleReceivingHistoryOpen={handleReceivingHistoryOpen} />
      ))}
    </Stack>
  );
};

export default ProductsTableStack;
