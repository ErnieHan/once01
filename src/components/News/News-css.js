import styled from "styled-components";

export const Content = styled.div`
  padding: 15px;
`;

export const Section = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Image = styled.div`
  width: 30%;
  height: 0;
  padding-bottom: 30%;
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Text = styled.div`
  width: 70%;
  padding-left: 8px;
  h3 {
    font-size: 17px;
    margin-bottom: 8px;
  }
  p {
    font-size: 13px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  left: ${props => (props.active ? "0" : "100%")};
  z-index: 99;
  transition: all 350ms ease;
`;

export const ModalHead = styled.div`
  width: 100%;
  height: 60px;
  background: #f8cddb;
`;
