export function targetObjects(state = [], action) {
  switch (action.type) {
    case 'ADD_TARGET_OBJECTS':
      return [...state, {...action.payload}];

    case 'DELETE_TARGET_OBJECTS':
      return state.filter(el => el.id !== action.payload.id);

    case 'EDIT_TARGET_OBJECTS':
      return [...state.filter(el => el.id !== action.payload.id), {...action.payload}];

    default:
      return state;
  }
}