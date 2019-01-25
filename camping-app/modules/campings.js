
// Actions
const SET_CAMPINGS = "Spots/campings/SET_CAMPINGS";
const SET_LOCATION = "Spots/campings/SET_LOCATION";
const SET_FILTERS = "Spots/campings/SET_FILTERS";
const SET_LOADING = "Spots/campings/SET_LOADING";

// Initial state
const INITIAL_STATE = {
  spots: [],
  mylocation: {
    latitude: 37.79035,
    longitude: -122.4384,
  },
  filters: {
    sort: 'distance',
    type: 'all',
    price: 'free',
    option_full: true,
    option_rated: true,
    option_free: false,
  },
  loading: false,
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_CAMPINGS:
      return {
        ...state,
        spots: action.payload
      }
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};

// Actions
export function setCampings(payload) {
  return dispatch => {
    dispatch({
      type: SET_CAMPINGS,
      payload
    })
  }
};

export function setLocation(payload) {
  return dispatch => {
    dispatch({
      type: SET_LOCATION,
      payload
    })
  }
};

export function setFilters(payload) {
  return dispatch => {
    dispatch({
      type: SET_FILTERS,
      payload
    })
  }
};

export function setLoading(payload) {
  return dispatch => {
    dispatch({
      type: SET_LOADING,
      payload
    })
  }
};