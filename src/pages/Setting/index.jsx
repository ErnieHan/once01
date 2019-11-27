import React, { Component } from "react";
import LanguageBar from "../../components/LanguageBar";
import styled from "styled-components";
//
import { Translation } from "react-i18next";

const Content = styled.div`
  background: #f1f0f7;
  padding: 15px;
  min-height: 100%;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

class Setting extends Component {
  render() {
    return (
      <Content>
        <SubTitle>
          <Translation>{t => <>{t("setting.settingTitle")}</>}</Translation>
        </SubTitle>
        <LanguageBar />
      </Content>
    );
  }
}

export default Setting;
