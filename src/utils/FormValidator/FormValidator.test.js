import {FormValidator} from './FormValidator';

describe('FormValidator', () => {
  describe('validateForm', () => {
    describe('form with valid fields', () => {
      test('returns an empty array', () => {
        const validator = new FormValidator();
        const form = generateValidForm();

        const invalidFields = validator.validateForm(form);

        expect(invalidFields.length).toBe(0);
      });
    });

    describe('form with invalid fields', () => {
      test('returns an array with invalid fields', () => {
        const validator = new FormValidator();
        const form = generateInvalidForm();

        const invalidFields = validator.validateForm(form);

        expect(invalidFields.length).not.toBe(0);
      });
    });

    describe('unexpected argument', () => {
      test('throws an error', () => {
        const validator = new FormValidator();
        
        const actual = () => validator.validateForm(null);

        expect(actual).toThrow('can only take a <form> element reference');
      });
    });
  });
});

const generateValidForm = () => {
  const form = document.createElement('form');
  const validField = document.createElement('input');
  validField.value = 'allowed value';
  form.append(validField);

  return form;
};

const generateInvalidForm = () => {
  const form = document.createElement('form');
  const invalidField = document.createElement('input');
  invalidField.required = true;
  invalidField.value = null;
  form.append(invalidField);

  return form;
};