import { useEffect, useState } from "react";
import axios from "axios";
import type { GNewsResponse, News, NewsQuery } from "../types/news";

const API_URL = "https://gnews.io/api/v4/top-headlines";

interface UseNewsData {
  articles: News[];
  loading: boolean;
  error: boolean;
}

export function useNewsData({ category, max, lang }: NewsQuery): UseNewsData {
  const [articles, setArticles] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);

    axios
      .get<GNewsResponse>(API_URL, {
        params: {
          category,
          max,
          lang,
          apikey: import.meta.env.VITE_GNEWS_API_KEY,
        },
        signal: controller.signal,
      })
      .then((res) => setArticles(res.data.articles))
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setArticles([]);
        setError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [category, max, lang]);

  return { articles, loading, error };
}
