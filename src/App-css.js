import styled from "styled-components";

export const Content = styled.div`
  padding: 35px;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export const FlexContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhoneContent = styled.div`
  width: 375px;
  height: 667px;
  border-radius: 10px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const Body = styled.div`
  padding-top: 60px;
  padding-bottom: 50px;
  padding-right: 18px;
  width: calc(100% + 18px);
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-right: 0px;
  }
`;
