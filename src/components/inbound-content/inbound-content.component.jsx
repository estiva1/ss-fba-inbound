import React, { Fragment } from "react";
import ShipmentTableStack from "../shipment-table-stack/shipment-table-stack.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import { Container } from "./inbound-content.styles";

const InboundContent = ({ content }) => {
  switch (content) {
    case 1:
      return <div>Check In Content</div>;
    case 2:
      return (
        <Container>
          <CustomizedSearchField
            placeholder="Search invoice, PO, Order ID, Tracking ID"
            ariaLabel="Search invoice, PO, Order ID, Tracking ID"
          />
          <ShipmentTableStack />
        </Container>
      );
    case 3:
      return <div>Print 2D Labels Content</div>;
    default:
      return null;
  }
};

export default InboundContent;
