import {nanoid} from 'nanoid';

export function addTargetObjects(objects) {
  return {
    type: 'ADD_TARGET_OBJECTS',
    payload: {...objects, id: nanoid()}
  };
}