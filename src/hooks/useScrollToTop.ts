import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

interface UseScrollToTop {
  topRef: RefObject<HTMLDivElement>;
  visible: boolean;
  scrollToTop: () => void;
}

export function useScrollToTop(threshold = 300): UseScrollToTop {
  const topRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () =>
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return { topRef, visible, scrollToTop };
}
