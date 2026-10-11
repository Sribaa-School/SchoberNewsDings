import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTexts } from "../stores/useLanguageStore";

const linkSyadling = {
  color: "inherit",
  borderRadius: 0,
  borderBottom: "2px solid transparent",
  "&.active": { borderBottomColor: "#fff" },
} as const;

export default function Header() {
  const t = useTexts();

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {t.appTitle}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={NavLink} to="/news" sx={linkSyadling}>
          {t.navNews}
        </Button>
        <Button component={NavLink} to="/categories" sx={linkSyadling}>
          {t.navCategories}
        </Button>
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
}
