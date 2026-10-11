import { useMemo, useState } from "react";
import ArticleList from "../components/ArticleList";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import { useNewsData } from "../hooks/useNewsData";
import { useLanguageStore } from "../stores/useLanguageStore";

export default function NewsPage() {
  const language = useLanguageStore((s) => s.language);
  const { articles, loading, error } = useNewsData({
    category: "general",
    max: 10,
    lang: language,
  });

  const [search, setSearch] = useState<string>("");
  const [source, setSource] = useState<string>("");

  const sources = useMemo(
    () => Array.from(new Set(articles.map((a) => a.source.name))).sort(),
    [articles]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return articles.filter(
      (a) =>
        (source === "" || a.source.name === source) &&
        (q === "" ||
          a.title.toLowerCase().includes(q) ||
          (a.content ?? "").toLowerCase().includes(q) ||
          (a.description ?? "").toLowerCase().includes(q))
    );
  }, [articles, search, source]);

  return (
    <main className="page">
      <FilterBar sources={sources} selected={source} onSelect={setSource} />
      <SearchBar value={search} onChange={setSearch} />
      <ArticleList articles={filtered} loading={loading} error={error} />
    </main>
  );
}
