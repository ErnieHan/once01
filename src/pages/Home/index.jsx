import React, { Component } from "react";
import PhotoSwiper from "../../components/PhotoSwiper";
import News from "../../components/News";

export class Home extends Component {
  render() {
    return (
      <>
        <PhotoSwiper />
        <News />
      </>
    );
  }
}

export default Home;
