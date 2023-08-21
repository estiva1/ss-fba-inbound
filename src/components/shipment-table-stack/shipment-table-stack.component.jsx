import React from "react";

import ShipmentTable from "../UI/shipment-table/shipment-table.component";
import { shipmentTableData } from "../../constants";
import { Container } from "./shipment-table-stack.styles";

const ShipmentTableStack = () => {
  return (
    <Container>
      {shipmentTableData.map((user, index) => (
        <ShipmentTable key={`table-${index}`} user={user} />
      ))}
    </Container>
  );
};

export default ShipmentTableStack;
