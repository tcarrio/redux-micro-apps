// Types
interface IShellState {
  userCount: number
}

export interface IAppState { };

// Defaults
const DEFAULT_STATE: IShellState = { userCount: 0 };

// Actions
const SET_USER_COUNT = 'SET_USER';
const ADD_USER       = 'ADD_USER';
const REMOVE_USER    = 'REMOVE_USER';

// Reducer
export default function reducer(state: IShellState = DEFAULT_STATE, action: any = {}) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, { userCount: state.userCount + 1 });

    case SET_USER_COUNT:
      return Object.assign({}, state, { userCount: action.userCount });

    case REMOVE_USER:
      return state;

    default:
      return state;
  }
}

// Action Creators
// The shell won't be making any of the actions,
// only registers reducers to maintain state
