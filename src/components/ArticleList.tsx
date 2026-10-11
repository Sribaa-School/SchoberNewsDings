import { Alert, CircularProgress, Typography } from "@mui/material";
import NewsCard from "./NewsCard";
import type { News } from "../types/news";
import { useTexts } from "../stores/useLanguageStore";

interface Props {
  articles: News[];
  loading: boolean;
  error: boolean;
}

export default function ArticleList({ articles, loading, error }: Props) {
  const t = useTexts();

  if (!import.meta.env.VITE_GNEWS_API_KEY) return <Alert severity="warning">{t.noApiKey}</Alert>;
  if (loading) return <CircularProgress aria-label={t.loading} sx={{ mt: 4 }} />;
  if (error) return <Alert severity="error">{t.error}</Alert>;
  if (articles.length === 0) return <Typography>{t.noResults}</Typography>;

  return (
    <>
      <Typography className="article-count">
        {t.articleCount}: {articles.length}
      </Typography>
      {articles.map((a) => (
        <NewsCard key={a.id ?? a.url} article={a} />
      ))}
    </>
  );
}
