import { GET_VISIBLE } from '../actions/types';

const initialState = { visible: 10 };


export const visibleReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_VISIBLE:
      return { ...state, visible: state.visible + action.payload }

    default:
      return state
  }
};