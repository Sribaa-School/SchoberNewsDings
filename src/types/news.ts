export type Language = "de" | "en";

export type Category =
  | "general"
  | "world"
  | "nation"
  | "business"
  | "technology"
  | "sports"
  | "science"
  | "health"
  | "entertainment";

export interface NewsSource {
  name: string;
  url: string;
}

export interface News {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string | null;
  publishedAt: string;
  source: NewsSource;
}

export interface GNewsResponse {
  totalArticles: number;
  articles: News[];
}

export interface NewsQuery {
  category: Category;
  max: number;
  lang: Language;
}
