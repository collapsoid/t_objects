export function editTargetObjects(objectsParameters, id) {
  return {
    type: 'EDIT_TARGET_OBJECTS',
    payload: {
      ...objectsParameters,
      id
    }
  };
}