import styled from "styled-components";

export const Content = styled.div`
  background: #fff;
  margin: 0 -15px;
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Button = styled.div`
  border: 1px solid #fc5b9d;
  padding: 6px;
  min-width: 100px;
  text-align: center;
  border-radius: 50px;
  color: #fc5b9d;
`;

export const Dialog = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.active ? "1" : "0")};
  pointer-events: ${props => (props.active ? "" : "none")};
  transition: all 350ms ease;
`;

export const Outline = styled.div`
  width: 300px;
  min-height: 100px;
  transition: all 350ms ease;
  transform: ${props => (props.active ? "scale(1)" : "scale(0.5)")};
`;

export const Head = styled.div`
  background: #f1f0f7;
  border-radius: 10px 10px 0 0;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Body = styled.div`
  background: #fff;
  padding: 0 15px;
`;

export const SubmitButton = styled.div`
  width: 100%;
  border: 0;
  border-radius: 0 0 10px 10px;
  background: #f1f0f7;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Option = styled.div`
  padding: 12px;
  border-bottom: 1px solid #e9e8e7;
  &:last-child {
    border-bottom: 0;
  }
`;
