# 澳門透視錯覺

`original.html` preserves the user's uploaded HTML without changes. The deployed root page uses the same scene and interaction code, with Tailwind CSS 3.4.17 compiled ahead of time and Three.js 0.128.0 served from `assets/macau/`. Google Fonts remain optional with local font fallbacks. Both libraries retain their MIT licenses beside the deployed files.

To rebuild CSS, install `tailwindcss@3.4.17` outside the deployed repository, create an input CSS file containing `@tailwind base; @tailwind components; @tailwind utilities;`, then run its CLI with `-i INPUT --content ./macau_perspective_illusion.html -o ./assets/macau/tailwind.min.css --minify` from the repository root. Three.js is the unmodified `three@0.128.0/build/three.min.js` npm distribution.
