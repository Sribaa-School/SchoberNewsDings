import { useState } from "react";
import ArticleList from "../components/ArticleList";
import CategorieCard from "../components/CategorieCard";
import { useNewsData } from "../hooks/useNewsData";
import { useLanguageStore } from "../stores/useLanguageStore";
import type { Category } from "../types/news";

export default function CategoriesPage() {
  const language = useLanguageStore((s) => s.language);
  const [category, setCategory] = useState<Category>("sports");
  const [amount, setAmount] = useState<number>(10);

  const { articles, loading, error } = useNewsData({
    category,
    max: amount,
    lang: language,
  });

  return (
    <main className="page">
      <CategorieCard
        category={category}
        amount={amount}
        onCategoryChange={setCategory}
        onAmountChange={setAmount}
      />
      <ArticleList articles={articles} loading={loading} error={error} />
    </main>
  );
}
