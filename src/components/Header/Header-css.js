import styled from "styled-components";

export const Content = styled.header`
  width: 100%;
  min-height: 60px;
  background: ${props => props.themeColors.primaryPink};
  top: 0;
  left: 0;
  position: absolute;
  transition: all 500ms ease;
  z-index: 99;
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;
