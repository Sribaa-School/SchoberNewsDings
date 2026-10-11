import { Navigate, Route, Routes } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NewsPage from "./pages/NewsPage";
import CategoriesPage from "./pages/CategoriesPage";
import { useScrollToTop } from "./hooks/useScrollToTop";

export default function App() {
  const { topRef, visible, scrollToTop } = useScrollToTop(300);

  return (
    <>
      <Header />
      <Toolbar />
      <Box ref={topRef} sx={{ scrollMarginTop: "72px" }} />
      <Routes>
        <Route path="/" element={<Navigate to="/news" replace />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      <ScrollToTopButton visible={visible} onClick={scrollToTop} />
    </>
  );
}
