import styled from "styled-components";
import Chip from "@mui/material/Chip";

export const StyledChip = styled(Chip)(() => ({
  border: "1px solid #1565D8 !important",

  "& .MuiChip-deleteIcon": {
    color: "#1565D8 !important",
    transition: "color .3s ease",

    "&:hover": {
      color: "#D32F2F !important",
    },
  },
}));

export const ChipLabel = styled.h4`
  display: inline;
  color: #4e5969;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;

export const ChipValue = styled(ChipLabel)`
  color: #000;
  font-weight: 700;
  margin-right: 10px;
`;
