import { FormGroup } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
`;

export const Heading = styled.h2`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

export const Subheading = styled(Heading)`
  font-size: 1rem;
  line-height: 1.25rem;
`;

export const SpanText = styled(Heading)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
`;

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8;
  font-weight: 700;
`;

export const LabelText = styled.h4`
  color: #78909c;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: 0.00375rem;
  margin: 0;
`;

export const TextDivider = styled.span`
  width: 1px;
  height: 16px;
  background: #c4c4c4;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ShipmentPlanEmpty = styled.div`
  width: 274px;
  height: 268px;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='274' height='268' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%23F2F2F2' d='M173.95 60.27h-73.83a6.35 6.35 0 0 0-6.35 6.36v164.42l-.85.26-18.1 5.56a3.38 3.38 0 0 1-4.23-2.25L16.7 58.28a3.4 3.4 0 0 1 2.25-4.23l27.9-8.56 80.92-24.82 27.91-8.57a3.38 3.38 0 0 1 4.23 2.25l13.77 45.07.26.85Z'/%3e%3cpath fill='%233F3D56' d='M190.06 59.42 173.46 5.1a7.2 7.2 0 0 0-8.98-4.78l-39.24 12.03-80.91 24.83L5.09 49.22a7.2 7.2 0 0 0-4.77 9l56.72 185.65a7.22 7.22 0 0 0 8.98 4.78l26.9-8.25.85-.26v-.89l-.85.26-27.15 8.33a6.34 6.34 0 0 1-7.92-4.22L1.13 57.97a6.36 6.36 0 0 1 4.2-7.94l39.25-12.04 80.9-24.82 39.25-12.04a6.4 6.4 0 0 1 5.63.97 6.3 6.3 0 0 1 2.3 3.25l16.51 54.07.27.85h.88l-.26-.85Z'/%3e%3cpath fill='%231565D8' d='M51.9 54.19a3.81 3.81 0 0 1-3.64-2.7l-5.45-17.84a3.82 3.82 0 0 1 2.53-4.76l74.43-22.84a3.8 3.8 0 0 1 4.76 2.53l5.45 17.84a3.83 3.83 0 0 1-2.53 4.77L53.02 54.02c-.36.11-.74.17-1.12.17Z'/%3e%3cpath fill='%231565D8' d='M80.45 19.06a8.47 8.47 0 1 0-.02-16.94 8.47 8.47 0 0 0 .02 16.94Z'/%3e%3cpath fill='%23fff' d='M80.45 15.95a5.36 5.36 0 1 0-.01-10.73 5.36 5.36 0 0 0 .01 10.73Z'/%3e%3cpath fill='%23E6E6E6' d='M254.96 246.8h-143a3.6 3.6 0 0 1-3.6-3.6V71.5a3.61 3.61 0 0 1 3.6-3.6h143a3.6 3.6 0 0 1 3.6 3.6v171.7a3.62 3.62 0 0 1-3.6 3.6Z'/%3e%3cpath fill='%233F3D56' d='M189.17 59.42h-89.05a7.2 7.2 0 0 0-7.2 7.21v172.88l.85-.26V66.63a6.37 6.37 0 0 1 6.34-6.36h89.33l-.27-.85Zm77.64 0H100.1a7.2 7.2 0 0 0-7.19 7.21V260.8a7.22 7.22 0 0 0 7.2 7.21H266.8a7.2 7.2 0 0 0 7.19-7.2V66.62a7.23 7.23 0 0 0-7.2-7.2Zm6.34 201.37a6.38 6.38 0 0 1-6.34 6.36H100.1a6.34 6.34 0 0 1-6.34-6.36V66.63a6.37 6.37 0 0 1 6.34-6.36h166.7a6.35 6.35 0 0 1 6.34 6.36V260.8Z'/%3e%3cpath fill='%231565D8' d='M222.38 78.08h-77.84a3.8 3.8 0 0 1-3.8-3.82V55.61a3.83 3.83 0 0 1 3.8-3.82h77.84a3.8 3.8 0 0 1 3.81 3.82v18.65a3.83 3.83 0 0 1-3.8 3.82Z'/%3e%3cpath fill='%231565D8' d='M183.46 53.07a8.47 8.47 0 1 0-.02-16.94 8.47 8.47 0 0 0 .02 16.94Z'/%3e%3cpath fill='%23fff' d='M183.46 49.75a5.16 5.16 0 1 0 0-10.32 5.16 5.16 0 0 0 0 10.32Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h274v268H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;

export const ShipmentPlanError = styled.span`
  width: 176px;
  height: 176px;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='176' height='176' fill='none'%3e%3cg fill='%23CF0909' clip-path='url(%23a)'%3e%3cpath fill-opacity='.05' stroke='%23CF0909' stroke-width='3' d='M174.5 53.68v68.64c0 .96-.39 1.9-1.07 2.58l-48.53 48.53a3.66 3.66 0 0 1-2.59 1.07H53.69c-.96 0-1.9-.39-2.58-1.07L2.57 124.9a3.66 3.66 0 0 1-1.07-2.59V53.69c0-.96.39-1.9 1.07-2.58L51.1 2.57a3.66 3.66 0 0 1 2.58-1.07h68.64c.97 0 1.9.39 2.58 1.07l48.53 48.53a3.65 3.65 0 0 1 1.07 2.58Z'/%3e%3cpath d='M81.53 36.44h11.94c3 0 5.37 2.55 5.14 5.54l-3.4 58.44a5.16 5.16 0 0 1-5.13 4.77h-4.16a5.16 5.16 0 0 1-5.14-4.77l-4.4-58.44a5.16 5.16 0 0 1 5.15-5.54Zm-3.83 92.79v.04a10.3 10.3 0 1 0 20.6 0v-.04a10.3 10.3 0 1 0-20.6 0Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h176v176H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;

export const StyledFormGroup = styled(FormGroup)`
  border: 1px solid #0057d3 !important;
  border-radius: 4px;
  width: max-content;
  padding: 0px 16px 0px 7px; // 7px - 16px minus padding of checkbox (9px)
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  }

  .MuiTypography-root {
    color: #0057d3;
    font-family: Titillium Web;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 0.01625rem;
    margin: 0;
  }

  .MuiFormControlLabel-root {
    margin: 0;
  }
`;
