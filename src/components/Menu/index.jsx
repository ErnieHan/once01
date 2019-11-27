import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Content, Option } from "./Menu-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCogs,
  faCompactDisc,
  faGift,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const menuLists = [
  {
    name: "setting",
    icon: faCogs,
    url: "/setting"
  },
  {
    name: "disc",
    icon: faCompactDisc,
    url: "/disc"
  },
  {
    name: "home",
    icon: faHome,
    url: "/"
  },
  {
    name: "products",
    icon: faGift,
    url: "/products"
  },
  {
    name: "members",
    icon: faUser,
    url: "/members"
  }
];

class Menu extends Component {
  state = {
    active: 2
  };

  componentDidMount() {
    const activeUrl = window.location.hash.replace("#", "");
    console.log(activeUrl, menuLists);
    const foundActive = menuLists.findIndex(data => data.url === activeUrl);
    console.log(foundActive);
    if (foundActive !== -1) {
      this.setState({
        active: foundActive
      });
    } else {
      // 以首頁作為預設
      this.setState({
        active: 2
      });
    }
  }

  handleClick = index => {
    this.setState({
      active: index
    });
  };

  render() {
    return (
      <Content>
        {menuLists.map((data, index) => (
          <Option
            key={index}
            active={this.state.active === index}
            onClick={this.handleClick.bind(this, index)}
          >
            <Link to={data.url}>
              <FontAwesomeIcon
                icon={data.icon}
                size="lg"
                color={this.state.active === index ? "#fff" : "#666666"}
              />
            </Link>
          </Option>
        ))}
      </Content>
    );
  }
}

export default Menu;
