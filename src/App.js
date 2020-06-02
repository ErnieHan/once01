import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import {
  setApp,
  readThemeCookie,
  changeTheme,
  setLanguage,
  fetchNews,
} from "./store/actions";
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Style-Components
import { Content, FlexContent, PhoneContent, Body } from "./App-css";
// Pages
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Page404 from "./pages/Page404";
// function
// import getCookie from "./function/getCookie";
// import writeCookie from "./function/writeCookie";
import Header from "./components/Header";
import Menu from "./components/Menu";

class App extends React.Component {
  state = {
    headerHide: false,
    bodyScrollTop: 0,
  };

  componentDidMount() {
    const { readThemeCookie, setLanguage } = this.props;
    // 設置語言
    setLanguage();
    // 設置主題色
    readThemeCookie();
    // 首頁 API
    this.homePageFetchEvent();
  }

  async homePageFetchEvent() {
    // 1.fetch跑馬燈圖片
    // 2.fetch新聞
    this.props.fetchNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.getThemeSuccessfully !== this.props.getThemeSuccessfully) {
      const element = this.refs.body;
      element.addEventListener("scroll", (e) => {
        const { bodyScrollTop } = this.state;
        if (e.target.scrollTop > bodyScrollTop && e.target.scrollTop > 150) {
          // 往下滑動
          this.setState({
            headerHide: true,
          });
        } else {
          //往上滑動
          this.setState({
            headerHide: false,
          });
        }
        this.setState({
          bodyScrollTop: e.target.scrollTop,
        });
      });
    }
  }

  handleChangeTheme = () => {
    const { changeTheme, themeName } = this.props;
    if (themeName === "primary") {
      // 切換為暗色主題
      changeTheme("dark");
    } else {
      // 切換為亮色主題
      changeTheme("primary");
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 當取得主題顏色以及滾動事件改變時才去重新render
    if (
      nextProps.getThemeSuccessfully !== this.props.getThemeSuccessfully ||
      nextState.headerHide !== this.state.headerHide
    )
      return true;
    return false;
  }

  render() {
    const { getThemeSuccessfully, themeColors } = this.props;
    const { headerHide } = this.state;
    return (
      getThemeSuccessfully && (
        <Router>
          <Content>
            <FlexContent>
              <PhoneContent>
                <Header themeColors={themeColors} headerHide={headerHide} />
                <Body ref="body">
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/setting">
                      <Setting />
                    </Route>
                    <Route path="*">
                      <Page404 />
                    </Route>
                  </Switch>
                </Body>
                <Menu />
              </PhoneContent>
            </FlexContent>
          </Content>
        </Router>
      )
    );
  }
}

App.propTypes = {
  setApp: PropTypes.func,
  setAppActive: PropTypes.bool,
  readThemeCookie: PropTypes.func,
  themeName: PropTypes.string,
  themeColors: PropTypes.object,
  getThemeSuccessfully: PropTypes.bool,
  changeTheme: PropTypes.func,
};

const mapStateToProps = (state) => ({
  setAppActive: state.app.active,
  themeName: state.app.updateTheme.themeName,
  themeColors: state.app.updateTheme.themeColors,
  getThemeSuccessfully: state.app.updateTheme.getThemeSuccessfully,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setApp: () => dispatch(setApp()),
    readThemeCookie: () => dispatch(readThemeCookie()),
    changeTheme: (themeName) => dispatch(changeTheme(themeName)),
    setLanguage: () => dispatch(setLanguage()),
    fetchNews: () => dispatch(fetchNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
