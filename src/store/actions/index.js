import getCookie from "../../function/getCookie";
import writeCookie from "../../function/writeCookie";
import i18n from "i18next";
import { NEWS } from "../../constants";

// 基本型
export const setApp = () => {
  return {
    type: "SET_APP"
  };
};

// 呼叫其他 action 型
export const selectLv1Option = index => async dispatch => {
  await dispatch(setApp(index));
};

// 執行多件 function 型
export const fetchProduct = cbu => async dispatch => {
  fetch(`/shopping/v1/compositions/productDetails/info/${cbu}`, {
    credentials: "include",
    headers: { "content-type": "application/json" },
    mode: "cors"
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

const primaryTheme = {
  primaryPink: "#F8CDDB"
};

const darkTheme = {
  primaryPink: "#F8CDDB"
};

export const readThemeCookie = () => dispatch => {
  // 更換網站介面顏色
  const theme_cookie = getCookie("theme");
  if (!theme_cookie) {
    // 1. 預設主題顏色為亮色
    writeCookie("theme", "primary");
    const themeName = "primary";
    const themeColors = primaryTheme;
    dispatch(updateTheme(themeName, themeColors));
  } else {
    // 1. 抓取目前的主題顏色
    const themeName = getCookie("theme");
    const themeColors = themeName === "primary" ? primaryTheme : darkTheme;
    dispatch(updateTheme(themeName, themeColors));
  }
};

export const changeTheme = themeName => dispatch => {
  if (themeName === "primary") {
    const themeColors = primaryTheme;
    writeCookie("theme", themeName);
    dispatch(updateTheme(themeName, themeColors));
  } else {
    const themeColors = darkTheme;
    writeCookie("theme", themeName);
    dispatch(updateTheme(themeName, themeColors));
  }
};

export const updateTheme = (themeName, themeColors) => {
  return {
    type: "UPDATE_THEME",
    themeName,
    themeColors
  };
};

export const setLanguage = () => dispatch => {
  // 設置語言包
  // 1. 抓取語言的Cookie
  const language_cookie = getCookie("language");
  if (!language_cookie) {
    // 2. 沒有語言的Cookie的話先設定預設為tw
    writeCookie("language", "tw");
  } else {
    // 3. 有語言的Cookie的話便抓取
    const now_language_cookie = getCookie("language");
    dispatch(updateLanguage(now_language_cookie));
    i18n.changeLanguage(now_language_cookie);
    console.log("now_language_cookie", now_language_cookie);
  }
};

export const updateLanguage = lang => {
  writeCookie("language", lang);
  i18n.changeLanguage(lang);
  return {
    type: "UPDATE_LANGUAGE",
    lang
  };
};

export const fetchNews = () => async dispatch => {
  try {
    const response = await fetch(NEWS);
    if (response.status === 200) {
      const result = await response.json();
      dispatch(updateNews(result.feed.entry));
    } else {
      throw new Error("fetch news failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateNews = result => {
  return {
    type: "UPDATE_NEWS",
    result
  };
};
