import React from "react";

import { IconButton, Stack } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { Container, Heading } from "./receiving-history.styles";
import { receivingHistoryData, receivingHistoryItem } from "../../constants/print-2d-labels-index";
import ReceivingHistoryTable from "../UI/receiving-history-tables/receiving-history-table/receiving-history-table.components";
import ReceivingHistoryItem from "../UI/receiving-history-tables/receiving-history-item/receiving-history-item.component";

const ReceivingHistory = ({ onClose }) => {
  return (
    <Container>
      <Stack direction="row" spacing="12px" alignItems="center" marginBottom="20px">
        <IconButton aria-label="back" onClick={onClose}>
          <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
        </IconButton>
        <Heading>Receiving History</Heading>
      </Stack>
      <Stack direction="column" spacing="16px" alignItems="center">
        <ReceivingHistoryItem item={receivingHistoryItem} />
        <ReceivingHistoryTable data={receivingHistoryData} />
      </Stack>
    </Container>
  );
};

export default ReceivingHistory;
