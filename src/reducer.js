import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  // token:
  // "BQDPcstjev2GxR51fXiBSRofSN0h1vYR72fo000LrcReyQskS6PuWXBgwHLlEl2vGtuWLWxZkZYlJ_NCcrspU8L76A49q0Cj_pkVK85NhWycTU8YAx4m6SGte8VtY0eki-brJxLiIoymQqgagHUgX9xX4HlZ6rXxM4cXfCe_OxScCmz5r66LBuvBsP0cXHy2ozRIqPA_enuXxgGEX8vCZw",
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;