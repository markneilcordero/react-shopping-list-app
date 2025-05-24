// utils/scrollToTop.js

/**
 * Smoothly scrolls the window to the top.
 */
export default function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
