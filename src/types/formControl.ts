import type { PropsWithChildren } from 'react';

import type { PropsWithTestId } from './helpers';

type FormFieldProps = PropsWithChildren & {
  errorText?: string;
};

type FormControlElementProps<TElementAttributes> = FormFieldProps &
  TElementAttributes &
  PropsWithTestId;

export type { FormControlElementProps, FormFieldProps };
