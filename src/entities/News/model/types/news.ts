export interface News {
  id: number;
  abstract: string;
  web_url: string;
  multimedia: Array<{
    rank: number;
    subtype: string;
    caption: null;
    credit: null;
    type: string;
    url: string;
    height: number;
    width: number;
    subType: string;
    crop_name: string;
    legacy: {};
  }>;
  pub_date: string;
  source: string;
}

export interface NewsResponse {
  copyright: string;
  response: {
    docs: News[];
  };
}
