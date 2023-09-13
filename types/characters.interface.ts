interface IThumbnail {
  path: string;
  extension: string;
}

interface IComic {
  resourceURI: string;
  name: string;
}

interface ISeries {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
  }[];
  returned: number;
}

interface IStory {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    type: string;
  }[];
  returned: number;
}

interface IEvent {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
  }[];
  returned: number;
}

interface IUrl {
  type: string;
  url: string;
}

interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: IComic[];
    returned: number;
  };
  series: ISeries;
  stories: IStory;
  events: IEvent;
  urls: IUrl[];
}

export interface IMarvelApiCharactersResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ICharacter[];
  };
}
