import styled from "styled-components";

export const InboundTitle = styled.h2`
  color: #4e5969;
  font-family: Titillium Web;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

export const InboundNavContainer = styled.div`
  align-items: center;
  background: #f8fafb;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  display: inline-flex;
  gap: 40px;
  padding: 16px;
  width: 100%;
`;

export const TabsContainer = styled.div`
  border-radius: 12px;
  border: 1px solid #ced3da;
  display: flex;
  flex-direction: row;
  padding: 4px;
  width: 100%;
`;

export const Tab = styled.div`
  align-items: center;
  background: ${(props) => (props.isActive ? "#F1FBFE" : "none")};
  border-radius: 10px;
  box-shadow: ${(props) => (props.isActive ? "inset 0px 0px 0px 1px #1565D8" : "none")};
  color: ${(props) => (props.isActive ? "#1565d8" : "#4e5969")};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 20px;
  justify-content: center;
  padding: 13px 16px;
  transition: all ease 0.3s;
  width: 280px;

  &:hover {
    background: ${(props) => (!props.isActive ? "none" : "#E8F0FC")};
    color: #1565d8;
  }
`;

export const TabTextContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const TabNumber = styled.div`
  align-items: center;
  background: ${(props) => (props.isActive ? "#1565d8" : "#fff")};
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isActive ? "#1565d8" : "#4e5969")};
  color: ${(props) => (props.isActive ? "#fff" : "#4e5969")};
  display: flex;
  flex-shrink: 0;
  font-family: Titillium Web;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  height: 24px;
  justify-content: center;
  letter-spacing: 0.00563rem;
  line-height: 1.3125rem;
  padding-bottom: 2px;
  transition: all ease 0.3s;
  width: 24px;
`;

export const TabText = styled.h2`
  font-family: Titillium Web;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

export const TabHint = styled.div`
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.isActive ? "#1565d8" : "#4e5969")};
  color: ${(props) => (props.isActive ? "#1565d8" : "#4e5969")};
  display: flex;
  flex-shrink: 0;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.00563rem;
  line-height: 0.6rem;
  transition: all ease 0.3s;
  cursor: help;
`;
