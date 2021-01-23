export const getInputFieldValue = element => {
  let value = null;

  if (element.dataset.type === 'text') {
    value = element.value;
  } else if (element.dataset.type === 'value') {
    value = +element.value;
  } else if (element.dataset.type === 'date') {
    value = element.value;
  }

  return value;
};

export const getObjectsParameters = form => {
  const objectsParameters = {
    objectsQuantity: +form.planes.value * +form.objectsOnPlane.value
  };

  for (let element of form.getElementsByTagName('input')) {
    objectsParameters[element.name] = getInputFieldValue(element);      
  }

  return objectsParameters;
};