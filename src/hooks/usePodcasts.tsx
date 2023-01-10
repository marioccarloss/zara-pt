import { useQuery } from 'react-query';
import { getPodcasts } from '../api/podcasts';

export default function usePodcasts() {
  const hours = 24;
  const seconds = 3600;
  const {
    data: podcasts,
    error: podcastsError,
  } = useQuery(['Podcasts'], getPodcasts, {
    refetchInterval: hours * seconds,
  });

  return {
    podcasts,
    podcastsError,
  };
}
