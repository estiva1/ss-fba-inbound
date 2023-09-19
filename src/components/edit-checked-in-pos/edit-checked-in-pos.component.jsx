import React from "react";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import { IconButton, Stack } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import POInfoTable from "../UI/check-in-history-tables/check-in-history-po-info-table/check-in-history-po-info-table.component";
import TrackingInfoTable from "../UI/check-in-history-tables/check-in-history-tracking-info-table/check-in-history-tracking-info-table.component";

import { trackingInfoData } from "../../constants";
import { EditCheckInPosContainer, Heading, ModalContent } from "./edit-checked-in-pos.styles";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import EditCheckedInPosUserTable from "../UI/edit-checked-in-pos-tables/edit-checked-in-pos-user-table/edit-checked-in-pos-user-table.component";

const EditCheckedInPos = ({ open, onClose, user }) => {
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
          <EditCheckInPosContainer>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" spacing="12px" alignItems="center">
                <IconButton aria-label="back" onClick={onClose}>
                  <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
                </IconButton>
                <Heading>Edit Checked in PO's</Heading>
              </Stack>
              <div style={{ width: "300px" }}>
                <CustomizedSearchField placeholder="Search by PO Number" />
              </div>
            </Stack>
            <EditCheckedInPosUserTable user={user}/>
          </EditCheckInPosContainer>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

export default EditCheckedInPos;
