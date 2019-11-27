const initialState = {
  fetched: false,
  result: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEWS":
      return {
        ...state,
        fetched: true,
        result: action.result
      };

    default:
      return state;
  }
};
