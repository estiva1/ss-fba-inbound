import React from "react";
import { Stack } from "@mui/material";
import ProductsTable from "../UI/products-table/products-table.component";

import { productsData } from "../../constants/print-2d-labels-index";

const ProductsTableStack = ({ handleReceivingHistoryOpen }) => {

  return (
    <Stack direction="column" spacing="10px">
      {productsData.map((item, index) => (
        <ProductsTable key={`table-${index}`} item={item} handleReceivingHistoryOpen={handleReceivingHistoryOpen} />
      ))}
    </Stack>
  );
};

export default ProductsTableStack;
