import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  --color-indigo-50:#eef2ff;
  --color-indigo-700:#4338ca;
  --color-violet-200:#ede9fe;
  --color-violet-300:#c4b5fd;
  --color-neutral-600:#525252;
  --color-neutral-950:#0a0a0a;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  color: var(--color-neutral-600);
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

`

export default GlobalStyles
