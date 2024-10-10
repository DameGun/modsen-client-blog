import * as yup from 'yup';

import { MESSAGE_LENGTH_CONSTRAINT, ValidationErrors } from '@/constants/validation';

export const contactValidationSchema = yup.object().shape({
  fullName: yup.string().required(ValidationErrors.Required),
  email: yup.string().email(ValidationErrors.EmailFormat).required(ValidationErrors.Required),
  reason: yup.string().required(ValidationErrors.Required),
  message: yup
    .string()
    .max(MESSAGE_LENGTH_CONSTRAINT, ValidationErrors.LengthConstraint(MESSAGE_LENGTH_CONSTRAINT))
    .required(ValidationErrors.Required),
});
