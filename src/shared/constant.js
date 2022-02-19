export const techIcon = (icon) =>
  `https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/${icon}.svg`;

export const characters = [
  "M43.875 24.4375C43.875 31.375 41.5 36.7188 36.75 40.4688C32.0312 44.1875 25.2656 46.0469 16.4531 46.0469H8.39062V73H0.421875V4.46875H18.1875C35.3125 4.46875 43.875 11.125 43.875 24.4375ZM8.39062 39.2031H15.5625C22.625 39.2031 27.7344 38.0625 30.8906 35.7812C34.0469 33.5 35.625 29.8438 35.625 24.8125C35.625 20.2812 34.1406 16.9062 31.1719 14.6875C28.2031 12.4688 23.5781 11.3594 17.2969 11.3594H8.39062V39.2031Z",
  "M92.25 73V39.7656C92.25 35.5781 91.2969 32.4531 89.3906 30.3906C87.4844 28.3281 84.5 27.2969 80.4375 27.2969C75.0312 27.2969 71.0781 28.7656 68.5781 31.7031C66.1094 34.6406 64.875 39.4531 64.875 46.1406V73H57.0938V0.0625H64.875V22.1406C64.875 24.7969 64.75 27 64.5 28.75H64.9688C66.5 26.2812 68.6719 24.3438 71.4844 22.9375C74.3281 21.5 77.5625 20.7812 81.1875 20.7812C87.4688 20.7812 92.1719 22.2812 95.2969 25.2812C98.4531 28.25 100.031 32.9844 100.031 39.4844V73H92.25Z",
  "M160.406 47.2656C160.406 55.6406 158.297 62.1875 154.078 66.9062C149.859 71.5938 144.031 73.9375 136.594 73.9375C132 73.9375 127.922 72.8594 124.359 70.7031C120.797 68.5469 118.047 65.4531 116.109 61.4219C114.172 57.3906 113.203 52.6719 113.203 47.2656C113.203 38.8906 115.297 32.375 119.484 27.7188C123.672 23.0312 129.484 20.6875 136.922 20.6875C144.109 20.6875 149.812 23.0781 154.031 27.8594C158.281 32.6406 160.406 39.1094 160.406 47.2656ZM121.266 47.2656C121.266 53.8281 122.578 58.8281 125.203 62.2656C127.828 65.7031 131.688 67.4219 136.781 67.4219C141.875 67.4219 145.734 65.7188 148.359 62.3125C151.016 58.875 152.344 53.8594 152.344 47.2656C152.344 40.7344 151.016 35.7812 148.359 32.4062C145.734 29 141.844 27.2969 136.688 27.2969C131.594 27.2969 127.75 28.9688 125.156 32.3125C122.562 35.6562 121.266 40.6406 121.266 47.2656Z",
  "M209.25 73V39.7656C209.25 35.5781 208.297 32.4531 206.391 30.3906C204.484 28.3281 201.5 27.2969 197.438 27.2969C192.062 27.2969 188.125 28.75 185.625 31.6562C183.125 34.5625 181.875 39.3594 181.875 46.0469V73H174.094V21.625H180.422L181.688 28.6562H182.062C183.656 26.125 185.891 24.1719 188.766 22.7969C191.641 21.3906 194.844 20.6875 198.375 20.6875C204.562 20.6875 209.219 22.1875 212.344 25.1875C215.469 28.1562 217.031 32.9219 217.031 39.4844V73H209.25Z",
  "M275.109 21.625V26.5469L265.594 27.6719C266.469 28.7656 267.25 30.2031 267.938 31.9844C268.625 33.7344 268.969 35.7188 268.969 37.9375C268.969 42.9688 267.25 46.9844 263.812 49.9844C260.375 52.9844 255.656 54.4844 249.656 54.4844C248.125 54.4844 246.688 54.3594 245.344 54.1094C242.031 55.8594 240.375 58.0625 240.375 60.7188C240.375 62.125 240.953 63.1719 242.109 63.8594C243.266 64.5156 245.25 64.8438 248.062 64.8438H257.156C262.719 64.8438 266.984 66.0156 269.953 68.3594C272.953 70.7031 274.453 74.1094 274.453 78.5781C274.453 84.2656 272.172 88.5938 267.609 91.5625C263.047 94.5625 256.391 96.0625 247.641 96.0625C240.922 96.0625 235.734 94.8125 232.078 92.3125C228.453 89.8125 226.641 86.2812 226.641 81.7188C226.641 78.5938 227.641 75.8906 229.641 73.6094C231.641 71.3281 234.453 69.7812 238.078 68.9688C236.766 68.375 235.656 67.4531 234.75 66.2031C233.875 64.9531 233.438 63.5 233.438 61.8438C233.438 59.9688 233.938 58.3281 234.938 56.9219C235.938 55.5156 237.516 54.1562 239.672 52.8438C237.016 51.75 234.844 49.8906 233.156 47.2656C231.5 44.6406 230.672 41.6406 230.672 38.2656C230.672 32.6406 232.359 28.3125 235.734 25.2812C239.109 22.2188 243.891 20.6875 250.078 20.6875C252.766 20.6875 255.188 21 257.344 21.625H275.109ZM234.141 81.625C234.141 84.4062 235.312 86.5156 237.656 87.9531C240 89.3906 243.359 90.1094 247.734 90.1094C254.266 90.1094 259.094 89.125 262.219 87.1562C265.375 85.2188 266.953 82.5781 266.953 79.2344C266.953 76.4531 266.094 74.5156 264.375 73.4219C262.656 72.3594 259.422 71.8281 254.672 71.8281H245.344C241.812 71.8281 239.062 72.6719 237.094 74.3594C235.125 76.0469 234.141 78.4688 234.141 81.625ZM238.359 38.0781C238.359 41.6719 239.375 44.3906 241.406 46.2344C243.438 48.0781 246.266 49 249.891 49C257.484 49 261.281 45.3125 261.281 37.9375C261.281 30.2188 257.438 26.3594 249.75 26.3594C246.094 26.3594 243.281 27.3438 241.312 29.3125C239.344 31.2812 238.359 34.2031 238.359 38.0781Z",
];

export const canvasImages = [
  "html",
  "javascript",
  "css",
  "react",
  "typescript",
  "vue",
  "svelte",
  "nodejs",
  "tailwindcss",
  "sass",
  "next",
  "firebase",
  "vscode",
  "git",
  "vite",
  "webpack",
].map(techIcon);

export const roles = [
  "Developer",
  "Student",
  "Designer",
  "Google Searcher",
  "Software Engineer",
  "Coding Lover",
  "Gamer",
  "Freelancer",
];

export const skills = [
  {
    name: "HTML",
    icon: "html",
    link: "https://www.w3schools.com/html/default.asp",
  },
  {
    name: "CSS",
    icon: "css",
    link: "https://www.w3schools.com/css/default.asp",
  },
  {
    name: "Javascript",
    icon: "javascript",
    link: "https://www.w3schools.com/js/default.asp",
  },
  {
    name: "Typescript",
    icon: "typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Node JS",
    icon: "nodejs",
    link: "https://nodejs.org/",
  },
  {
    name: "React",
    icon: "react",
    link: "https://reactjs.org/",
  },
  {
    name: "Next JS",
    icon: "next",
    link: "https://nextjs.org/",
  },
  {
    name: "Vue",
    icon: "vue",
    link: "https://v3.vuejs.org/",
  },
  {
    name: "Svelte",
    icon: "svelte",
    link: "https://svelte.dev/",
  },
  {
    name: "Sass",
    icon: "sass",
    link: "https://sass-lang.com/",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Firebase",
    icon: "firebase",
    link: "https://firebase.google.com/",
  },
].map((item) => ({
  ...item,
  icon: techIcon(item.icon),
}));

export const projects = [
  {
    name: "Filmhot",
    description: "A rapid movie website from the LokLok API",
    image:
      "https://res.cloudinary.com/naptest/image/upload/v1641805138/filmhot/filmhot_npivh7.jpg",
    link: "https://filmhot.live",
    git: "https://github.com/napthedev/filmhot.git",
    techs: ["react", "typescript", "tailwindcss", "firebase"],
  },
  {
    name: "React CSSFX Loading",
    description:
      "React Wrapper for the CSSFX collections. It's a component library, just import to use",
    image:
      "https://res.cloudinary.com/naptest/image/upload/v1634719726/cssfx_ecuj37.gif",
    link: "https://www.npmjs.com/package/react-cssfx-loading",
    git: "https://github.com/napthedev/react-cssfx-loading.git",
    techs: ["react", "typescript"],
  },
  {
    name: "MacOS Big Sur on the Web",
    description:
      "MacOS Big Sur user interface on the web using Vue and Typescript. The UI is almost identical, with light/dark mode changing, wallpapers of other macos, animated dock.",
    image:
      "https://res.cloudinary.com/naptest/image/upload/v1645257008/mac-big-sur_mlxmn0.png",
    link: "https://mac-bigsur.vercel.app",
    git: "https://github.com/napthedev/mac-big-sur.git",
    techs: ["vue", "typescript", "sass"],
  },
  {
    name: "FireVerse",
    description:
      "A chat app made with react, typescript, tailwind, firebase. It's a full-feature messenger clone",
    image:
      "https://res.cloudinary.com/naptest/image/upload/v1644039987/fireverse/preview-1_yujhpl.png",
    link: "https://fireverse.pages.dev",
    git: "https://github.com/napthedev/fireverse.git",
    techs: ["react", "typescript", "tailwindcss", "firebase"],
  },
].map((item) => ({
  ...item,
  techs: item.techs.map(techIcon),
}));
