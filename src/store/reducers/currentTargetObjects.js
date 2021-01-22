export function currentTargetObjects(state = {}, action) {
  switch (action.type) {
    case 'CREATE_TARGET_OBJECTS':
      return {template: action.payload.template};
  
    case 'REVIEW_TARGET_OBJECTS':
      return {current: action.payload.current, template: action.payload.template};

    default:
      return state;
  }
}