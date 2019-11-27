import React, { Component } from "react";
import { Content, Section, Image, Text } from "./News-css";
// Redux
import { connect } from "react-redux";

class News extends Component {
  render() {
    const { newsResult } = this.props;
    return (
      <Content>
        {newsResult.fetched
          ? newsResult.result.map((data, index) => (
              <Section key={index}>
                <Image img={data.gsx$imgurl.$t} />
                <Text>
                  <h3>{data.gsx$title.$t}</h3>
                </Text>
              </Section>
            ))
          : null}
        {console.log(newsResult)}
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
