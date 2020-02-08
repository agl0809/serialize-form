import serializeForm from './index';

describe('serialize form', () => {
  const formId = 'any-form-id';
  const formReferences = {
    user: {
      name: 'any name',
      email: {
        primary: ''
      }
    },
    business: ''
  };
  const documentBody = `
    <form id="${formId}">
        <input type="text" name="user.name" value="${formReferences.user.name}">
        <input type="text" name="user.email.primary">
        <input type="text" name="business">
    </form>
    `;

  test('should return an object with references corresponding to the form id', () => {
    document.body.innerHTML = documentBody;

    expect(serializeForm(formId)).toEqual(formReferences);
  });
});
