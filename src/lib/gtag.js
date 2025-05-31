// lib/gtag.js
export const pageview = (url) => {
  if (typeof window.gtag !== "function") {
    console.warn("gtag is not defined");
    return;
  }

  window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
  });
};
