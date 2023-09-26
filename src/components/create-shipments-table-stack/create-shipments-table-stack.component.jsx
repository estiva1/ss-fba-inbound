import React from "react";
import { Stack } from "@mui/material";
import CreateShipmentsTable from "../UI/create-shipments-table/create-shipments-table.component";

import { shipmentTableData } from "../../constants";

const CreateShipmentsTableStack = ({ selectedUsername, handleEditCheckedInPosOpen, handleReviewShipmentPlanOpen }) => {
  const filteredData = selectedUsername
    ? shipmentTableData.filter((user) => user.username === selectedUsername)
    : shipmentTableData;

  return (
    <Stack direction="column" spacing="10px">
      {filteredData.map((user, index) => (
        <CreateShipmentsTable
          key={`table-${index}`}
          user={user}
          handleEditCheckedInPosOpen={handleEditCheckedInPosOpen}
          handleReviewShipmentPlanOpen={handleReviewShipmentPlanOpen}
        />
      ))}
    </Stack>
  );
};

export default CreateShipmentsTableStack;
