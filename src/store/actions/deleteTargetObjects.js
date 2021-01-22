export function deleteTargetObjects(id) {
  return {
    type: 'DELETE_TARGET_OBJECTS',
    payload: {id}
  };
}