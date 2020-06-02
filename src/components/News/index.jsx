import React, { Component } from "react";
import {
  Content,
  Section,
  Image,
  Text,
  ModalContent,
  ModalHead
} from "./News-css";
// Redux
import { connect } from "react-redux";
//
import i18n from "i18next";

class News extends Component {
  state = {
    showModal: false,
    modal: {
      title: "",
      contentText: ""
    }
  };

  handleClick = data => {
    const lang = i18n.language;
    console.log(data[`gsx$${lang}title`]);
    this.setState({
      showModal: true,
      modal: {
        ...this.state.modal,
        title: data[`gsx$${lang}title`].$t,
        contentText: data.gsx$subtitle.$t
      }
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const { newsResult } = this.props;
    const lang = i18n.language;
    return (
      <Content>
        {/* 新聞列表 */}
        {newsResult.fetched
          ? newsResult.result.map((data, index) => (
              <Section key={index} onClick={this.handleClick.bind(this, data)}>
                <Image img={data.gsx$imgurl.$t} />
                <Text>
                  <h3>{data[`gsx$${lang}title`].$t}</h3>
                </Text>
              </Section>
            ))
          : null}
        {/* 新聞文章區塊 */}
        <ModalContent active={this.state.showModal}>
          <ModalHead onClick={this.closeModal}>
            {this.state.modal.title}
          </ModalHead>
        </ModalContent>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  newsResult: state.app.newsResult
});

// const mapDispatchToProps = dispatch => {
//   return {
//     setApp: () => dispatch(setApp())
//   };
// };

export default connect(mapStateToProps, null)(News);
