import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #e9e8e7;
  background: #fff;
  z-index: 99;
  display: flex;
`;

export const Option = styled.div`
  width: 20%;
  border-right: 1px solid #e9e8e7;
  background: ${props => (props.active ? "#F8CDDB" : "#ffffff")};
  a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:last-child {
    border-right: 0;
  }
`;
