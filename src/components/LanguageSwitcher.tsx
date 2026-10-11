import { Button } from "@mui/material";
import { useLanguageStore, useTexts } from "../stores/useLanguageStore";

export default function LanguageSwitcher() {
  const toggleLanguage = useLanguageStore((s) => s.toggleLanguage);
  const t = useTexts();

  return (
    <Button variant="outlined" color="inherit" size="small" onClick={toggleLanguage}>
      {t.switchTo}
    </Button>
  );
}
