const initialState = {
  isLoading: false,
  error: [],
  data: [],

};

const Data = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case 'GET_DATA_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default Data;
