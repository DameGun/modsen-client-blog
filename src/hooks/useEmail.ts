import { useCallback, useState } from 'react';

import { sendEmail } from '@/services/email';
import { SendEmailProps } from '@/types/contact';

export function useEmail(resetForm?: VoidFunction) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleEmail = useCallback(
    async (props: SendEmailProps) => {
      setIsLoading(true);

      try {
        await sendEmail(props);
        resetForm?.();
        setIsSuccess(true);
      } catch {
        setIsError(false);
      } finally {
        setIsLoading(false);
      }
    },
    [resetForm]
  );

  return { isLoading, isError, isSuccess, handleEmail };
}
