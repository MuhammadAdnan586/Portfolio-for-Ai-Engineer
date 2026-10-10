"use client";

import { useEffect } from "react";

// On a hard load / refresh, always start at the top of the page
// (no restored scroll position, no leftover #hash from an earlier click).
export default function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);
  return null;
}