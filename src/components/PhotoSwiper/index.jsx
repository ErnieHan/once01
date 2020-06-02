import React, { Component } from "react";
import Swiper from "swiper";
import { SWIPER_LISTS } from "../../constants";
import styled from "styled-components";

const Photo = styled.img`
  width: 100%;
  height: 250px;
`;

class PhotoSwiper extends Component {
  state = {
    lists: [],
    fetched: false,
  };

  async componentDidMount() {
    // fetch資料
    try {
      const response = await fetch(SWIPER_LISTS);
      if (response.status === 200) {
        const data = await response.json();
        this.setState({
          fetched: true,
          lists: data.feed.entry,
        });
      } else {
        this.setState({
          fetched: false,
        });
        throw new Error("fetch swiper photos failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lists !== this.state.lists) {
      // 滾動相片設定
      new Swiper(".swiper-container", {
        speed: 600,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          bulletClass: "swiper-button",
          bulletActiveClass: "swiper-button-active",
        },
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false
        // }
      });
    }
  }

  render() {
    const { fetched, lists } = this.state;
    return (
      <div>
        {fetched && (
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {lists.map((data, index) => (
                <div className="swiper-slide" key={index}>
                  <Photo
                    data-src={data.gsx$url.$t}
                    className="lazyload"
                    alt="images"
                  />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        )}
      </div>
    );
  }
}

export default PhotoSwiper;
