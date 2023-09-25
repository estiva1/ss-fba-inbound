import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Stack } from "@mui/material";

import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/button/button.component";
import PrintTwoDLabelsNavTabs from "../UI/nav-tabs/print-2d-labels-nav-tabs/print-2d-labels-nav-tabs.component";

import PrintTwoDLablesContent from "../print-2d-labels-content/print-2d-labels-content.component";
import AddProductToInternalStorage from "../add-product-to-internal-storage/add-product-to-internal-storage.component";

import { Subheader } from "./print-2d-labels.styles";

const tabLabels = {
  1: "Shipments",
  2: "Products",
  3: "Storage",
};

const PrintTwoDLabels = () => {
  const [tab, setTab] = useState(2);
  const [content, setContent] = useState(tab);
  const [isAddProductToIntStorageOpen, setIsAddProductToIntStorageOpen] = useState(false);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setContent(newTab);
  };

  const handleAddProductToIntStorageClose = () => {
    setIsAddProductToIntStorageOpen(false);
  };

  return (
    <Stack direction="column" spacing="20px">
      <Stack direction="row" alignItems="center" justifyContent="space-between" marginBottom="20px">
        <Subheader>{tabLabels[tab]}</Subheader>
        <Stack direction="row" gap="24px" alignItems="center">
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.white}
            onClick={() => setIsAddProductToIntStorageOpen(true)}
            padding="8px 24px"
          >
            Add to Storage
            <Ripple color="#1565D8" />
          </Button>
          <PrintTwoDLabelsNavTabs tab={tab} handleTabChange={handleTabChange} />
        </Stack>
      </Stack>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <PrintTwoDLablesContent content={content} />
        </motion.div>
      </AnimatePresence>

      <AddProductToInternalStorage open={isAddProductToIntStorageOpen} onClose={handleAddProductToIntStorageClose} />
    </Stack>
  );
};

export default PrintTwoDLabels;
