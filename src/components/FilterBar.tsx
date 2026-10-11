import { Chip, Stack } from "@mui/material";
import { useTexts } from "../stores/useLanguageStore";

interface Props {
  sources: string[];
  selected: string;
  onSelect: (source: string) => void;
}
export default function FilterBar({ sources, selected, onSelect }: Props) {
  const t = useTexts();

  return (
    <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center">
      <Chip
        label={t.allSources}
        color={selected === "" ? "primary" : "default"}
        onClick={() => onSelect("")}
      />
      {sources.map((s) => (
        <Chip
          key={s}
          label={s}
          color={selected === s ? "primary" : "default"}
          onClick={() => onSelect(s)}
        />
      ))}
    </Stack>
  );
}
