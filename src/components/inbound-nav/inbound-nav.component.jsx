import React, { Fragment } from "react";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";

import {
  InboundNavContainer,
  InboundTitle,
  Tab,
  TabHint,
  TabNumber,
  TabText,
  TabTextContainer,
  TabsContainer,
} from "./inbound-nav.styles";

const InboundNav = ({ tab, handleTabChange }) => {
  return (
    <Fragment>
      <InboundTitle>Inbound</InboundTitle>
      <InboundNavContainer>
        <Button type="button" buttonType={BUTTON_TYPE_CLASSES.blue} width="210px" height="48px" padding="8px 24px">
          Create a New Order
          <Ripple />
        </Button>
        <TabsContainer>
          <Tab onClick={() => handleTabChange(1)} isActive={tab === 1}>
            <TabTextContainer>
              <TabNumber isActive={tab === 1}>1</TabNumber>
              <TabText>Check In</TabText>
            </TabTextContainer>
            <TabHint isActive={tab === 1}>?</TabHint>
          </Tab>
          <Tab onClick={() => handleTabChange(2)} isActive={tab === 2}>
            <TabTextContainer>
              <TabNumber isActive={tab === 2}>2</TabNumber>
              <TabText>Create Shipments</TabText>
            </TabTextContainer>
            <TabHint isActive={tab === 2}>?</TabHint>
          </Tab>
          <Tab onClick={() => handleTabChange(3)} isActive={tab === 3}>
            <TabTextContainer>
              <TabNumber isActive={tab === 3}>3</TabNumber>
              <TabText>Print 2D Labels</TabText>
            </TabTextContainer>
            <TabHint isActive={tab === 3}>?</TabHint>
          </Tab>
        </TabsContainer>
      </InboundNavContainer>
    </Fragment>
  );
};

export default InboundNav;
