import { useCallback, useEffect, useRef, useState } from 'react';

import { DISABLE_TRANSITION_TIMEOUT } from '@/constants/hooks';

export function useDisableTransition() {
  const [disableTransition, setDisableTransition] = useState(false);
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleResize = useCallback(() => {
    setDisableTransition(true);
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setDisableTransition(false);
    }, DISABLE_TRANSITION_TIMEOUT);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer.current);
    };
  }, [handleResize]);

  return disableTransition;
}
