/**
 * Theme initialization script
 * This script runs before hydration to prevent flash of unstyled content (FOUC)
 * It checks localStorage and system preference to set the initial theme
 *
 * Note: dangerouslySetInnerHTML is safe here as we control the content
 */
export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const stored = localStorage.getItem('theme');
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = stored || 'system';
        const resolved = theme === 'system' ? systemPreference : theme;

        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(resolved);
      } catch (e) {
        // Fallback to dark mode if there's an error
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
