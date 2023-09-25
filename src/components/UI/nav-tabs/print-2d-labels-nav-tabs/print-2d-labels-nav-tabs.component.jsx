import React, { Fragment } from "react";
import { Tab, TabText, TabsContainer } from "./print-2d-labels-nav-tabs.styles";

const PrintTwoDLabelsNavTabs = ({ tab, handleTabChange }) => {
  return (
    <Fragment>
      <TabsContainer>
        <Tab onClick={() => handleTabChange(1)} isActive={tab === 1}>
          <TabText isActive={tab === 1}>Shipment Mode</TabText>
        </Tab>
        <Tab onClick={() => handleTabChange(2)} isActive={tab === 2}>
          <TabText isActive={tab === 2}>Product Mode</TabText>
        </Tab>
        <Tab onClick={() => handleTabChange(3)} isActive={tab === 3}>
          <TabText isActive={tab === 3}>Storage PO</TabText>
        </Tab>
      </TabsContainer>
    </Fragment>
  );
};

export default PrintTwoDLabelsNavTabs;
