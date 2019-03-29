// Types
interface IShellState {
  userCount: number
  testing: boolean
}

// Defaults
const DEFAULT_STATE: IShellState = {
  userCount: 0,
  testing: false
};

// Actions
export const SET_USER_COUNT = 'SET_USER';
export const ADD_USER       = 'ADD_USER';
export const REMOVE_USER    = 'REMOVE_USER';
export const TOGGLE_DEBUGGING = 'TOGGLE_DEBUGGING';

// Reducer
export default function reducer(state: IShellState = DEFAULT_STATE, action: any = {}) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        userCount: state.userCount + 1
      });
    case SET_USER_COUNT:
      return Object.assign({}, state, {
        userCount: action.userCount
      });
    case TOGGLE_DEBUGGING:
      return Object.assign({}, state, {
        testing: !state.testing
      });
    case REMOVE_USER:
    default: return state;
  }
}

// Action Creators
export function toggleDebugging() {
  return { type: TOGGLE_DEBUGGING };
}