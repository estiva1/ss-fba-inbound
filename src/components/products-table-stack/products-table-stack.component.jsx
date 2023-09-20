import React from "react";
import { Stack } from "@mui/material";
import ProductsTable from "../UI/products-table/products-table.component";

import { productsData } from "../../constants/print-2d-labels-index";

const ProductsTableStack = ({ selectedItem, handleEditCheckedInPosOpen, handleReviewShipmentPlanOpen }) => {
  const filteredData = selectedItem
    ? productsData.filter((item) => item.id === selectedItem)
    : productsData;

  return (
    <Stack direction="column" spacing="10px">
      {filteredData.map((item, index) => (
        <ProductsTable
          key={`table-${index}`}
          item={item}
        //   handleEditCheckedInPosOpen={handleEditCheckedInPosOpen}
        //   handleReviewShipmentPlanOpen={handleReviewShipmentPlanOpen}
        />
      ))}
    </Stack>
  );
};

export default ProductsTableStack;
