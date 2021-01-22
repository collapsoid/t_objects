export function reviewTargetObjects(objects, template) {
  return {
    type: 'REVIEW_TARGET_OBJECTS',
    payload: {
      current: objects,
      template
    }
  };
}