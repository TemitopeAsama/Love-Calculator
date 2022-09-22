import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
	/* COLORS */
	--bg-grey: 	hsl(12, 15%, 94%);
	--btn-red: hsl(4, 87%, 71%);
    --logo-pink: hsl(348, 84%, 50%);
	--heading-pink: hsl(348, 88%, 66%);
	--border-orange: hsl(29, 89%, 69%);

    /* GRADIENT */
    --gradient: linear-gradient(
            255deg,
            hsl(0deg 91% 54%) 0%,
            hsl(355deg 89% 52%) 8%,
            hsl(351deg 86% 51%) 17%,
            hsl(348deg 84% 50%) 25%,
            hsl(354deg 86% 55%) 33%,
            hsl(359deg 91% 60%) 42%,
            hsl(4deg 96% 61%) 50%,
            hsl(14deg 98% 60%) 58%,
            hsl(22deg 98% 59%) 67%,
            hsl(29deg 96% 59%) 75%,
            hsl(37deg 100% 57%) 83%,
            hsl(46deg 100% 54%) 92%,
            hsl(54deg 97% 52%) 100%
    );

	/* ICONS */
	--icon: url("/arrow-icon-dark.png");

	/* MODULAR SCALE */
	--ratio: 1.5;
	--s-6: calc(var(--s-5) / var(--ratio));
	--s-5: calc(var(--s-4) / var(--ratio));
	--s-4: calc(var(--s-3) / var(--ratio));
	--s-3: calc(var(--s-2) / var(--ratio));
	--s-2: calc(var(--s-1) / var(--ratio));
	--s-1: calc(var(--s0) / var(--ratio));
	--s0: 1rem;
	--s1: calc(var(--s0) * var(--ratio));
	--s2: calc(var(--s1) * var(--ratio));
	--s3: calc(var(--s2) * var(--ratio));
	--s4: calc(var(--s3) * var(--ratio));
	--s5: calc(var(--s4) * var(--ratio));
	--s6: calc(var(--s5) * var(--ratio));
}

html,
body {
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	height: 100%;
	${'' /* width: 100%; */}
	${'' /* overflow: hidden; */}
}

body {
	-webkit-font-smoothing: antialiased;
	font-display: fallback;
	background-color: var(--bg-grey);
}

*,
*::before,
*::after {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}


img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

input,
button,
textarea,
select {
	font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

ul {
	padding: 0;
}

li {
	text-decoration: none;
	list-style-type: none;
	margin: 0;
}

a, button{
	cursor: pointer;
}

a {
	text-decoration: none;
}

button {
	border: none;
	background-color: var(--logo-pink);
}
`;
