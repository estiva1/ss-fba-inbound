import React from "react";
import { Stack } from "@mui/material";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

import IconButton from "../UI/buttons/icon-button/icon-button.component";
import arrowRightShortIcon from "../../assets/arrow-right-short-icon.png";
import POInfoTable from "../UI/check-in-history-tables/check-in-history-po-info-table/check-in-history-po-info-table.component";
import TrackingInfoTable from "../UI/check-in-history-tables/check-in-history-tracking-info-table/check-in-history-tracking-info-table.component";

import { trackingInfoData } from "../../constants";
import { CheckInContainer, Heading, ModalContent } from "./check-in-history.styles";

const CheckInHistory = ({ open, onClose, user }) => {
  return (
    <Modal
      aria-labelledby="check-in-modal"
      open={open}
      onClose={onClose}
      closeAfterTransition
      disableScrollLock
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{
        "& > .MuiBackdrop-root": {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgb(8, 40, 85, 0.3)",
        },
      }}
    >
      <Fade in={open}>
        <ModalContent>
          <CheckInContainer>
            <Stack direction="row" spacing="12px">
              <IconButton src={arrowRightShortIcon} alt="Back" onClick={onClose} rotated enlarged />
              <Heading>Check In History</Heading>
            </Stack>
            <POInfoTable poData={user} />
            <TrackingInfoTable trackingData={trackingInfoData} />
          </CheckInContainer>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

export default CheckInHistory;
