import { forwardRef, type SelectHTMLAttributes } from 'react';

import { FormField } from '@/components/containers';
import type { FormControlElementProps } from '@/types/formControl';

type FormSelectProps = FormControlElementProps<SelectHTMLAttributes<HTMLSelectElement>> & {
  options: string[];
};

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(function FormSelect(
  { errorText, options, ...props },
  ref
) {
  return (
    <FormField errorText={errorText}>
      <select ref={ref} {...props}>
        {options.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </FormField>
  );
});
