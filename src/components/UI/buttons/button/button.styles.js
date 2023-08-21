import styled from "styled-components";

export const BaseButton = styled.button`
  position: relative;
  overflow: hidden;
  min-width: 210px;
  width: auto;
  height: 48px;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: #1565d8;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: ${(props) => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
