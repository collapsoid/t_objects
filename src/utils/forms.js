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