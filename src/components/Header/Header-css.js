import styled from "styled-components";

export const Content = styled.header`
  width: 100%;
  min-height: 60px;
  background: ${props => props.themeColors.primaryPink};
  top: ${props => (props.headerHide ? "-40px" : "0px")};
  left: 0;
  position: absolute;
  transition: all 500ms ease;
  z-index: 99;
`;
