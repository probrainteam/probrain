import React from 'react';

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 0,
      dangerouslySetInnerHTML: {
        __html: `
        (() => {

          let preferredTheme;
          try {
            preferredTheme = localStorage.getItem('color-mode');
          } catch (err) { }

          const setTheme = (newTheme) => {
            window.__theme = newTheme;
            preferredTheme = newTheme;
            document.body.className = newTheme;
          }

          window.__setPreferredTheme = (newTheme) => {
            setTheme(newTheme);
            try {
              localStorage.setItem('color-mode', newTheme);
            } catch (err) {}
          }

          let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

          darkQuery.addListener(function (e) {
            window.__setPreferredTheme(e.matches ? 'dark' : 'light')
          })

          setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
        })();
        `,
      },
    }),
  ]);
};
