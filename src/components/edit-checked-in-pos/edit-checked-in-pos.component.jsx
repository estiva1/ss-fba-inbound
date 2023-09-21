import React from "react";

import { IconButton, Stack } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import CustomModal from "../UI/modal/custom-modal.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import EditCheckedInPosPoTable from "../UI/edit-checked-in-pos-tables/edit-checked-in-pos-po-table/edit-checked-in-pos-po-table.component";
import EditCheckedInPosUserTable from "../UI/edit-checked-in-pos-tables/edit-checked-in-pos-user-table/edit-checked-in-pos-user-table.component";

import { EditCheckInPosContainer, Heading, LinkText } from "./edit-checked-in-pos.styles";

const EditCheckedInPos = ({ open, onClose, user }) => {
  return (
    <CustomModal open={open} onClose={onClose}>
      <EditCheckInPosContainer>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing="12px" alignItems="center">
            <IconButton aria-label="back" onClick={onClose}>
              <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
            </IconButton>
            <Heading>Edit Checked in PO's</Heading>
          </Stack>
          <CustomizedSearchField sx={{ width: "300px" }} placeholder="Search by PO Number" />
        </Stack>
        <EditCheckedInPosUserTable user={user} />
        <Stack direction="column" spacing="16px">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <LinkText>Heading Here</LinkText>
            <LinkText>Deleted Check In Records</LinkText>
          </Stack>
          <EditCheckedInPosPoTable po={user} />
        </Stack>
      </EditCheckInPosContainer>
    </CustomModal>
  );
};

export default EditCheckedInPos;
