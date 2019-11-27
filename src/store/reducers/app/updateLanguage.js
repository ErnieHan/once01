const initialState = {
  lang: "tw"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LANGUAGE":
      return {
        ...state,
        lang: action.lang
      };

    default:
      return state;
  }
};
