// Types
interface IClientBState {
  users: IUser[]
}
interface IUser {
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
      return Object.assign({}, { users: state.users + action.user} );
    case SET_USER_COUNT:
    case REMOVE_USER:
    default: return state;
  }
}

// Action Creators
export const addUser = (user) => ({ type: ADD_USER, user });

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getUser() {
//   return dispatch => get('/api/endpoint').then(user => dispatch(updateUser(user)))
// }