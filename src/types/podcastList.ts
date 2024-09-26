export interface PodcastListApiResponse {
  status: number;
  statusText: string;
  data: {
    feed: PodcastFeed;
  };
}

export interface PodcastFeed {
  author?: Author;
  entry: PodcastEntry[];
  updated?: Label;
  rights?: Label;
  title?: Label;
  icon?: Label;
  link?: Link[];
  id?: Label;
}

export interface Author {
  name: Label;
  uri: Label;
}

export interface Label {
  label: string;
}

export interface PodcastEntry {
  "im:name"?: Label;
  "im:image"?: PodcastImage[];
  summary?: Label;
  "im:price"?: Price;
  "im:contentType"?: ContentType;
  rights?: Label;
  title?: Label;
  link?: Link;
  id: PodcastId;
  "im:artist"?: Artist;
  category?: Category;
  "im:releaseDate"?: ReleaseDate;
}

export interface PodcastImage {
  label: string;
  attributes?: ImageAttributes;
}

export interface ImageAttributes {
  height: string;
}

export interface Price {
  label: string;
  attributes: PriceAttributes;
}

export interface PriceAttributes {
  amount: string;
  currency: string;
}

export interface ContentType {
  attributes: ContentTypeAttributes;
}

export interface ContentTypeAttributes {
  term: string;
  label: string;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: string;
  type?: string;
  href: string;
}

export interface PodcastId {
  label: string;
  attributes: IdAttributes;
}

export interface IdAttributes {
  "im:id": string;
}

export interface Artist {
  label: string;
  attributes?: ArtistAttributes;
}

export interface ArtistAttributes {
  href: string;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
}

export interface ReleaseDate {
  label: string;
  attributes: ReleaseDateAttributes;
}

export interface ReleaseDateAttributes {
  label: string;
}
