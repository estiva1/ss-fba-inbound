import React from "react";

import { IconButton, Stack } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import CustomModal from "../UI/modal/custom-modal.component";
import POInfoTable from "../UI/check-in-history-tables/check-in-history-po-info-table/check-in-history-po-info-table.component";
import TrackingInfoTable from "../UI/check-in-history-tables/check-in-history-tracking-info-table/check-in-history-tracking-info-table.component";

import { trackingInfoData } from "../../constants";
import { CheckInContainer, Heading } from "./check-in-history.styles";

const CheckInHistory = ({ open, onClose, user }) => {
  return (
    <CustomModal open={open} onClose={onClose}>
      <CheckInContainer>
        <Stack direction="row" spacing="12px" alignItems="center">
          <IconButton aria-label="back" onClick={onClose}>
            <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
          </IconButton>
          <Heading>Check In History</Heading>
        </Stack>
        <POInfoTable poData={user} />
        <TrackingInfoTable trackingData={trackingInfoData} />
      </CheckInContainer>
    </CustomModal>
  );
};

export default CheckInHistory;
