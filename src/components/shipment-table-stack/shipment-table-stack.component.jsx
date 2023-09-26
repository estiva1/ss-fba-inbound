import React from "react";
import { Stack } from "@mui/material";
import ShipmentTable from "../UI/shipments-table/shipments-table.component";

import { shipmentTableData } from "../../constants/print-2d-labels-index";

const ShipmentTableStack = ({ selectedUsername, handleReceivingHistoryOpen }) => {
  const filteredData = selectedUsername
    ? shipmentTableData.filter((user) => user.username === selectedUsername)
    : shipmentTableData;

  return (
    <Stack direction="column" spacing="10px">
      {filteredData.map((item, index) => (
        <ShipmentTable key={`table-${index}`} item={item} handleReceivingHistoryOpen={handleReceivingHistoryOpen} />
      ))}
    </Stack>
  );
};

export default ShipmentTableStack;
