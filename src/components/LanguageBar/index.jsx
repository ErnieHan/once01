import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { updateLanguage } from "../../store/actions";
//
import {
  Content,
  Title,
  Button,
  Dialog,
  Body,
  SubmitButton,
  Head,
  Outline,
  Option
} from "./LanguageBar-css";
//
import { Translation } from "react-i18next";

class LanguageBar extends Component {
  state = {
    show: false
  };
  handleChange = value => {
    this.props.updateLanguage(value);
  };

  showSelection = () => {
    this.setState({
      show: true
    });
  };

  closeSelection = () => {
    this.setState({
      show: false
    });
  };

  transferText = text => {
    let result;
    switch (text) {
      case "tw":
        result = "繁體中文";
        break;
      case "en":
        result = "English";
        break;
      case "jp":
        result = "日本語";
        break;
      case "kr":
        result = "한국어";
        break;
      default:
        result = "default";
    }
    return result;
  };

  render() {
    const { show } = this.state;
    const lists = [
      { name: "繁體中文", value: "tw" },
      { name: "English", value: "en" },
      { name: "日本語", value: "jp" },
      { name: "한국어", value: "kr" }
    ];
    return (
      <Content>
        <Title>
          <Translation>{t => <>{t("setting.languageTitle")}</>}</Translation>
        </Title>
        {/* <select onChange={this.handleChange} value={this.props.lang}>
          <option value="tw">繁體中文</option>
          <option value="en">ENGLISH</option>
          <option value="jp">日本語</option>
          <option value="kr">한국어</option>
        </select> */}
        <Button onClick={this.showSelection}>
          {this.transferText(this.props.lang)}
        </Button>
        <Dialog active={show} onClick={this.closeSelection}>
          <Outline active={show}>
            <Head>
              {/* 請選擇所要更改的語言 */}
              <Translation>
                {t => <>{t("setting.languageTitle")}</>}
              </Translation>
            </Head>
            <Body>
              {lists.map((data, index) => (
                <Option
                  key={index}
                  onClick={this.handleChange.bind(this, data.value)}
                >
                  {data.name}
                </Option>
              ))}
            </Body>
            <SubmitButton>確認</SubmitButton>
          </Outline>
        </Dialog>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.app.updateLanguage.lang
});

const mapDispatchToProps = dispatch => {
  return {
    updateLanguage: lang => dispatch(updateLanguage(lang))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBar);
