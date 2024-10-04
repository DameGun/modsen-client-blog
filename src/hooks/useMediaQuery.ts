import { useEffect, useState } from 'react';

type MediaQueryHooksProp = {
  query: string;
  onMatch?: VoidFunction;
};

export function useMediaQuery({ query, onMatch }: MediaQueryHooksProp) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  useEffect(() => {
    if (matches) onMatch?.();
  }, [matches, onMatch]);

  return matches;
}
