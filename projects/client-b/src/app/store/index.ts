// Types
export interface IClientBState {
  users: IUser[]
}
export interface IUser {
  name: string
}

// Defaults
const DEFAULT_STATE: IClientBState = {
  users: []
}

// Actions
const SET_USER_COUNT = 'SET_USER';
const ADD_USER       = 'ADD_USER';
const REMOVE_USER    = 'REMOVE_USER';

// Reducer
export default function reducer(state: IClientBState = DEFAULT_STATE, action: any = {}) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, { users: [ ...state.users, action.user ] });

    case SET_USER_COUNT:
      return state;

    case REMOVE_USER:
      return state;

    default:
      return state;
  }
}

// Action Creators
export const addUser = (user: IUser) => ({ type: ADD_USER, user });

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getUser() {
//   return dispatch => get('/api/endpoint').then(user => dispatch(updateUser(user)))
// }
