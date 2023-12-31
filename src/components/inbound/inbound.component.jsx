import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Stack } from "@mui/material";

import InboundNav from "../inbound-nav/inbound-nav.component";
import InboundContent from "../inbound-content/inbound-content.component";

const Inbound = () => {
  const [tab, setTab] = useState(1);
  const [content, setContent] = useState(tab);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setContent(newTab);
  };

  return (
    <Stack direction="column" spacing="20px">
      <InboundNav tab={tab} handleTabChange={handleTabChange} />
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <InboundContent content={content} />
        </motion.div>
      </AnimatePresence>
    </Stack>
  );
};

export default Inbound;
