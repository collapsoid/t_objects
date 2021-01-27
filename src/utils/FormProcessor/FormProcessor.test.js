import {FormProcessor} from './FormProcessor';

describe('FormProcessor', () => {
  describe('collectFormFieldsValue', () => {
    describe('form with fields', () => {
      test('returns an object with field name and its value', () => {
        const formProcessor = new FormProcessor();
        const form = generateForm('field', 'value');

        const result = formProcessor.collectFormFieldsValue(form);

        expect(result).toEqual({field: 'value'});
      });
    });

    describe('unexpected argument', () => {
      test('throws an error', () => {
        const formProcessor = new FormProcessor();

        const actual = () => formProcessor.collectFormFieldsValue(null);

        expect(actual).toThrow('can only take a <form> element reference')
      });
    });
  });
});

const generateForm = (fieldName, fieldValue) => {
  const form = document.createElement('form');
  const field = document.createElement('input');
  field.name = fieldName;
  field.value = fieldValue;
  field.dataset.type = 'text';
  form.append(field);

  return form;
};