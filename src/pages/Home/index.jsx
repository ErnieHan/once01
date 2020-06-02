import React, { Component, lazy, Suspense } from "react";
// import PhotoSwiper from "../../components/PhotoSwiper";
// import News from "../../components/News";

const PhotoSwiper = lazy(() => import("../../components/PhotoSwiper"));
const News = lazy(() => import("../../components/News"));

export class Home extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>loading</div>}>
          <PhotoSwiper />
          <News />
        </Suspense>
      </>
    );
  }
}

export default Home;
