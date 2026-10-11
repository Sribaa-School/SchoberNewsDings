import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import type { News } from "../types/news";
import { useLanguageStore, useTexts } from "../stores/useLanguageStore";

interface Props {
  article: News;
}

export default function NewsCard({ article }: Props) {
  const language = useLanguageStore((s) => s.language);
  const t = useTexts();
  const date = new Date(article.publishedAt).toLocaleDateString(
    language === "de" ? "de-AT" : "en-GB"
  );

  return (
    <Card sx={{ mb: 3, textAlign: "center" }}>
      {article.image && (
        <CardMedia component="img" height="220" image={article.image} alt={article.title} />
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <Link href={article.url} target="_blank" rel="noopener noreferrer" underline="hover">
            {article.title}
          </Link>
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
          {t.author}: {article.source.name} – {date}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {article.description}
        </Typography>
        <Typography variant="body2">{article.content}</Typography>
      </CardContent>
    </Card>
  );
}
