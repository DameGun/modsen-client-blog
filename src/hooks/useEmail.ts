import { useCallback, useRef, useState } from 'react';

import { BASE_ALERT_RESET_TIME } from '@/constants/alert';
import { sendEmail } from '@/services/email';
import { SendEmailProps } from '@/types/contact';

type EmailHooksProps = {
  resetAfter?: number;
  resetForm?: VoidFunction;
};

export function useEmail({ resetAfter = BASE_ALERT_RESET_TIME, resetForm }: EmailHooksProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const resetCallback = useCallback(() => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }

    timerId.current = setTimeout(() => {
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(false);
    }, resetAfter);
  }, [resetAfter]);

  const handleEmail = useCallback(
    async (props: SendEmailProps) => {
      setIsLoading(true);

      try {
        await sendEmail(props);
        resetForm?.();
        setIsSuccess(true);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
        resetCallback();
      }
    },
    [resetForm, resetCallback]
  );

  return { isLoading, isError, isSuccess, handleEmail };
}
