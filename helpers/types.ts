export type ProjectContent = {
  key: number;
  id: string;
  title: string;
  desc: string;
  tech: string;
  photos: Photos;
  links: Links;
  date: string;
};

interface Photos {
  mobile: string;
  desktop: string;
}

interface Links {
  view: string;
  github: string;
}
