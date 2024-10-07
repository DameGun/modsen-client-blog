import * as yup from 'yup';

import { ValidationErrors } from '@/constants/validation';

export const footerEmailValidationSchema = yup.object().shape({
  email: yup.string().email(ValidationErrors.EmailFormat).required(ValidationErrors.Required),
});
