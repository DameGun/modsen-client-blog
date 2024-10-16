import { forwardRef, type InputHTMLAttributes } from 'react';

import { FormField } from '@/components/containers';
import type { FormControlElementProps } from '@/types/formControl';

type FormInputProps = FormControlElementProps<InputHTMLAttributes<HTMLInputElement>>;

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(function FormInput(
  { errorText, ...props },
  ref
) {
  return (
    <FormField errorText={errorText}>
      <input ref={ref} {...props} />
    </FormField>
  );
});
