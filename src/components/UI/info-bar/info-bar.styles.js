import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #00a3ff;
  background: rgba(0, 163, 255, 0.05);
`;

export const InfoText = styled.h3`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  margin: 0;
`;

export const SpoilerText = styled.h3`
  color: #1565d8;
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  text-decoration-line: underline;
  margin: 0;
`;

export const Exclamation = styled.span`
  width: 20px;
  height: 20px;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none'%3e%3cg fill='%2300A3FF' clip-path='url(%23a)'%3e%3cpath d='M10 18.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5ZM10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z'/%3e%3cpath d='M8.752 13.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm.123-7.506a1.131 1.131 0 0 1 2.201-.468c.049.15.066.31.049.468l-.438 4.383a.69.69 0 0 1-1.374 0l-.438-4.383Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h20v20H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;