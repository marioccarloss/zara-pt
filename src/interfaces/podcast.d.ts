export interface iPodcast {
  id: {
    attributes: {
      ['im:id']: string
    }
  },
  ['im:name']: {
    label: string
  },
  ['im:artist']: {
    label: string
  },
  ['im:image']: iPodcastImage[],
  title: {
    label: string
  }
}

export interface iPodcastImage {
  attributes: {
    height: string
  },
  label: string
}
