import { forwardRef, type TextareaHTMLAttributes } from 'react';

import { FormField } from '@/components/containers';
import type { FormControlElementProps } from '@/types/formControl';

type FormTextAreaProps = FormControlElementProps<TextareaHTMLAttributes<HTMLTextAreaElement>>;

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea({ errorText, ...props }, ref) {
    return (
      <FormField errorText={errorText}>
        <textarea ref={ref} {...props} />
      </FormField>
    );
  }
);
