import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import type { Category } from "../types/news";
import { useTexts } from "../stores/useLanguageStore";

export const CATEGORIES: Category[] = [
  "general",
  "nation",
  "business",
  "sports",
  "technology",
  "world",
  "science",
  "health",
  "entertainment",
];
export const AMOUNTS: number[] = [1, 2, 5, 10];

interface Props {
  category: Category;
  amount: number;
  onCategoryChange: (category: Category) => void;
  onAmountChange: (amount: number) => void;
}

export default function CategorieCard({
  category,
  amount,
  onCategoryChange,
  onAmountChange,
}: Props) {
  const t = useTexts();

  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 1 }}>
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel id="category-label">{t.category}</InputLabel>
        <Select
          labelId="category-label"
          label={t.category}
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as Category)}
        >
          {CATEGORIES.map((c) => (
            <MenuItem key={c} value={c}>
              {t.categories[c]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 100 }}>
        <InputLabel id="amount-label">{t.amount}</InputLabel>
        <Select
          labelId="amount-label"
          label={t.amount}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        >
          {AMOUNTS.map((n) => (
            <MenuItem key={n} value={n}>
              {n}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
