import usePodcasts from '../../../hooks/usePodcasts';
import { iPodcast, iPodcastImage } from '../../../interfaces/podcast.d';

export default function PodcastsList() {
  const { podcasts } = usePodcasts();

  return (
    <ul>
      {podcasts && podcasts.feed.entry
        .map((item: iPodcast) => (
          <li key={item.id.attributes['im:id']}>
            <article>
              <h2>{item['im:name'].label}</h2>
              <span>
                Author:
                {item['im:artist'].label}
              </span>
              {
                item['im:image']
                  .filter((image: iPodcastImage) => image.attributes.height === '170')
                  .map((image: iPodcastImage) => (
                    <img
                      key={item['im:image'][0].label}
                      src={image ? image.label : item['im:image'][0].label}
                      alt={item.title.label}
                    />
                  ))
              }
            </article>
          </li>
        ))}
    </ul>
  );
}
