import React from "react";
import { Stack } from "@mui/material";
import ShipmentTable from "../UI/create-shipments-table/shipment-table.component";

import { shipmentTableData } from "../../constants";

const ShipmentTableStack = ({ selectedUsername, handleReviewShipmentPlanOpen }) => {
  const filteredData = selectedUsername
    ? shipmentTableData.filter((user) => user.username === selectedUsername)
    : shipmentTableData;

  return (
    <Stack direction="column" spacing="10px">
      {filteredData.map((user, index) => (
        <ShipmentTable key={`table-${index}`} user={user} handleReviewShipmentPlanOpen={handleReviewShipmentPlanOpen} />
      ))}
    </Stack>
  );
};

export default ShipmentTableStack;
