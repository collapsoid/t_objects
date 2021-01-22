export function createTargetObjects(template) {
  return {
    type: 'CREATE_TARGET_OBJECTS',
    payload: {
      template
    }
  };
}