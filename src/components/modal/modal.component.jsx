import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ModalContent } from "./modal.styles";
import CheckIn from "../../pages/check-in/check-in.component";

const TransitionsModal = ({ open, onClose }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <ModalContent>
            <CheckIn />
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
