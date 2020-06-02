import React, { Component } from "react";
import { Content } from "./Header-css";
import { Translation } from "react-i18next";

class Header extends Component {
  render() {
    const { themeColors, headerHide } = this.props;
    return (
      <Content themeColors={themeColors} headerHide={headerHide}>
        <Translation>{t => <>{t("app.twice")}</>}</Translation>
      </Content>
    );
  }
}

export default Header;
