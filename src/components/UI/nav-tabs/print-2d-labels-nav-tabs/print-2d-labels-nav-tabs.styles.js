import styled from "styled-components";

export const TabsContainer = styled.div`
  border-radius: 4px;
  border: 1px solid #1565d8;
  display: flex;
  flex-direction: row;
  width: 450px;
  overflow: hidden;
`;

export const Tab = styled.div`
  flex: 1;
  align-items: center;
  background: ${(props) => (props.isActive ? "#1565d8" : "none")};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 20px;
  justify-content: center;
  padding: 8px 16px;
  transition: all ease 0.3s;

  &:nth-child(2) {
    border-left: 1px solid #1565d8;
    border-right: 1px solid #1565d8;
  }

  &:hover {
    color: #1565d8;
  }
`;

export const TabText = styled.h4`
  color: ${(props) => (props.isActive ? "#fff" : "#4e5969")};
  text-align: center;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  font-style: normal;
  line-height: 1rem;
  margin: 0;

  &:hover {
    color: ${(props) => (props.isActive ? "#fff" : "#1565d8")};
  }
`;
