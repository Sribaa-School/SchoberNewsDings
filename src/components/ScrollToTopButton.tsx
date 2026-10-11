import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTexts } from "../stores/useLanguageStore";

interface Props {
  visible: boolean;
  onClick: () => void;
}

export default function ScrollToTopButton({ visible, onClick }: Props) {
  const t = useTexts();

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="medium"
        aria-label={t.scrollTop}
        onClick={onClick}
        sx={{ position: "fixed", bottom: 24, right: 24 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
