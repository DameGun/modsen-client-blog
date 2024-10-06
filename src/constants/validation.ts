export const MESSAGE_LENGTH_CONSTRAINT = 200;

export const ValidationErrors = {
  Required: 'This is a required field',
  EmailFormat: 'Incorrect email format',
  LengthConstraint: (length: number) => `Must be less than ${length} characters`,
};
