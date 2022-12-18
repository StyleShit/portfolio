type Link = {
  href: string;
  type: "preview" | "github" | "codepen";
};

export type Project = {
  title: string;
  image: string;
  fallbackImage?: string;
  links: Link[];
  description: () => JSX.Element;
};

export type Mockup = Project & {
  mockupImage: string;
  fallbackMockupImage?: string;
};

export const mockups: Mockup[] = [
  {
    title: "AI Web Design",
    image: "/img/thumbnails/futuristic-page.jpg",
    mockupImage: "/img/mockup-left.webp",
    fallbackMockupImage: "/img/mockup-left.png",
    links: [
      {
        type: "preview",
        href: "https://styleshit-static.netlify.app/ai-web-design",
      },
    ],
    description: () => (
      <>
        A concept web design of some futuristic AI company.
        <br />
        Inspired by this Dribbble shot by Howard Chen: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/7528753-AI-Web-Design"
          rel="noreferrer"
        >
          https://dribbble.com/shots/7528753-AI-Web-Design
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "Coinalyzer",
    image: "/img/thumbnails/coinalyzer.png",
    mockupImage: "/img/mockup-right-2.png",
    links: [],
    description: () => (
      <>
        An awesome and special Crypto Coins analyzing tool for internal use.
        <br />
        It grabs a bunch of data about each coin that exists in{" "}
        <a target="_blank" href="https://coinmarketcap.com/" rel="noreferrer">
          Coin Market Cap
        </a>
        , from various APIs, including price history and other details, that
        combined toghether can tell you whether to invest in that coin or not.
        <br />
        The success rates are pretty good, and we&apos;ve already gain a high
        profit. <br />
        As can be seen in the screenshot, there is a nice and friendly graph for
        each coin, that helps you deciding which coin is the best investment for
        you. <br />
        In addition, this tool integrates with Bitfinex & Cryptopia APIs, and
        runs Node.js exchange-bots that can sell or buy coins for you in the
        highest available profit.
      </>
    ),
  },
];

export const projects: Project[] = [
  {
    title: "Material Design Login",
    image: "/img/thumbnails/material-login.webp",
    fallbackImage: "/img/thumbnails/material-login.jpg",
    links: [
      {
        type: "preview",
        href: "https://codepen.io/EvyatarDa/full/yaoGOB",
      },
      {
        type: "codepen",
        href: "https://codepen.io/EvyatarDa/pen/yaoGOB",
      },
    ],
    description: () => (
      <>
        A concept design for a login page, based on the material design
        concepts.
        <br />
        Inspired by this Dribbble shot by Anton Aheichanka: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/1945593-Login-Home-Screen/"
          rel="noreferrer"
        >
          https://dribbble.com/shots/1945593-Login-Home-Screen/
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "The Joker Concept Design",
    image: "/img/thumbnails/joker.jpg",
    links: [
      {
        type: "preview",
        href: "https://styleshit-static.netlify.app/the-joker",
      },
    ],
    description: () => (
      <>
        A concept design for The Joker Movie.
        <br />
        Inspired by this Dribbble shot by Kalenskiy Dmitriy: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/7302010-Joker-desktop-concept"
          rel="noreferrer"
        >
          https://dribbble.com/shots/7302010-Joker-desktop-concept
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "Codepen Clone",
    image: "/img/thumbnails/codepen-clone.png",
    links: [
      {
        type: "preview",
        href: "https://styleshit-codepen.netlify.app/",
      },
      {
        type: "github",
        href: "https://github.com/StyleShit/Codepen-Clone",
      },
    ],
    description: () => (
      <>
        A small clone of Codepen&apos;s basic functionality, using React and{" "}
        <a target="_blank" href="https://codemirror.net/" rel="noreferrer">
          CodeMirror
        </a>
        .<br />
        The editor features live preview, syntax highlight, and option to
        minimize each editor when you don&apos;t need it.
        <br />
        <br />
      </>
    ),
  },

  {
    title: "React Live Chat",
    image: "/img/thumbnails/react-chat.png",
    links: [
      {
        type: "preview",
        href: "https://react-live-chat.onrender.com",
      },
      {
        type: "github",
        href: "https://github.com/StyleShit/react-live-chat",
      },
    ],
    description: () => (
      <>
        A live chat created using React / Socket.io for the client, and Node.js
        / Express / Socket.io for the server.
        <br />
        The chat features chat rooms, live messages (duh...), live room
        participants list, chat bot to welcome new users, and a typing indicator
        when others are typing. The project is automatically deployed to{" "}
        <a target="_blank" href="https://render.com/" rel="noreferrer">
          Render.com
        </a>{" "}
        using a GitHub workflow.
        <br />
        (It might have a delay on the initial loading because it runs on a
        Render dyno)
        <br />
      </>
    ),
  },

  {
    title: "React Pokédex",
    image: "/img/thumbnails/react-pokedex.jpg",
    links: [
      {
        type: "preview",
        href: "https://styleshit-pokedex.netlify.app/",
      },
      {
        type: "github",
        href: "https://github.com/StyleShit/React-Pokedex",
      },
    ],
    description: () => (
      <>
        A Pokédex created using React &{" "}
        <a target="_blank" href="https://pokeapi.co/docs/v2" rel="noreferrer">
          PokéAPI
        </a>
        .<br />
        Inspired by this Dribbble shot by Saepul Nahwan: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/6540871-Pokedex-App"
          rel="noreferrer"
        >
          https://dribbble.com/shots/6540871-Pokedex-App
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "Client for Reddit",
    image: "/img/thumbnails/reddit-client.png",
    links: [
      {
        type: "preview",
        href: "https://styleshit-reddit-client.netlify.app/",
      },
      {
        type: "github",
        href: "https://github.com/StyleShit/Basic-Client-For-Reddit",
      },
    ],
    description: () => (
      <>
        A small basic client for Reddit, with a new design, created using React.
        <br />
        Inspired by this Dribbble shot by Dmitriy Kharaberyush: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/3257279-Reddit-Trainy"
          rel="noreferrer"
        >
          https://dribbble.com/shots/3257279-Reddit-Trainy
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "DailyUI Signup",
    image: "/img/thumbnails/flat-signup.jpg",
    links: [
      {
        type: "preview",
        href: "https://styleshit-static.netlify.app/flat-signup",
      },
    ],
    description: () => (
      <>
        A signup form designed for the DailyUI 100 Days Challenge.
        <br />
        Inspired by this Dribbble shot by Paul Aimé: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/2468662-Daily-UI-001-Sign-Up-Form/"
          rel="noreferrer"
        >
          https://dribbble.com/shots/2468662-Daily-UI-001-Sign-Up-Form/
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "Navigation Animations",
    image: "/img/thumbnails/navigation-animation.jpg",
    links: [
      {
        type: "preview",
        href: "https://codepen.io/EvyatarDa/full/waKXMd/",
      },
      {
        type: "codepen",
        href: "https://codepen.io/EvyatarDa/pen/waKXMd/",
      },
    ],
    description: () => (
      <>
        A bunch of inspiring navigation menu hover animations.
        <br />
        It held the 74th place at Codepen&apos;s &quot;
        <a
          target="_blank"
          href="https://codepen.io/2015/popular/pens/3/"
          rel="noreferrer"
        >
          Most Hearted of 2015
        </a>
        &quot; and still gains a lot of views & likes until this day.
        <br />
        <br />
      </>
    ),
  },

  {
    title: "React Weather",
    image: "/img/thumbnails/react-weather-app.webp",
    fallbackImage: "/img/thumbnails/react-weather-app.jpg",
    links: [
      {
        type: "preview",
        href: "https://styleshit-weather.netlify.app/",
      },
      {
        type: "github",
        href: "https://github.com/StyleShit/Weather-Around-The-World",
      },
    ],
    description: () => (
      <>
        A small React project that uses{" "}
        <a target="__blank" href="https://openweathermap.org/api">
          OpenWeather&apos;s API
        </a>{" "}
        to show live weather in places around the world.
        <br />
        Inspired by this Dribbble shot by kenzch: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/7112686-Weather-kit"
          rel="noreferrer"
        >
          https://dribbble.com/shots/7112686-Weather-kit
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "DailyUI Login",
    image: "/img/thumbnails/flat-login.webp",
    fallbackImage: "/img/thumbnails/flat-login.png",
    links: [
      {
        type: "preview",
        href: "https://styleshit-static.netlify.app/flat-login",
      },
    ],
    description: () => (
      <>
        A login form designed for the DailyUI 100 Days Challenge.
        <br />
        Inspired by this Dribbble shot by Paul Flavius Nechita: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/2125879-Day-001-Login-Form/"
          rel="noreferrer"
        >
          https://dribbble.com/shots/2125879-Day-001-Login-Form/
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "Weather App Concept",
    image: "/img/thumbnails/weather-app.jpg",
    links: [
      {
        type: "preview",
        href: "https://styleshit-static.netlify.app/weather-app",
      },
    ],
    description: () => (
      <>
        A concept design for Weather App.
        <br />
        Inspired by this Dribbble shot by Tiberiu Neamu: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/1081917-WhereTO-App/"
          rel="noreferrer"
        >
          https://dribbble.com/shots/1081917-WhereTO-App/
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "Quantum Hackbar",
    image: "/img/thumbnails/hackbar.png",
    links: [
      {
        type: "preview",
        href: "https://addons.mozilla.org/en-US/firefox/addon/quantum-hackbar/",
      },
      {
        type: "github",
        href: "https://github.com/StyleShit/Quantum-Hackbar",
      },
    ],
    description: () => (
      <>
        A Web-Extension for web pen-testers, aims to replace the old well-known{" "}
        <a
          target="_blank"
          href="https://web.archive.org/web/20170610195655/https://addons.mozilla.org/en-US/firefox/addon/hackbar/"
          rel="noreferrer"
        >
          hackbar
        </a>{" "}
        due to the deprecation of XUL on Firefox Quantum.
        <br />
        The extension sits in the browser DevTools and features SQLi & XSS
        payloads, as well as encryption & encoding functions, and custom POST
        data & referer.
        <br />
        <br />
      </>
    ),
  },

  {
    title: "Single Div Robot",
    image: "/img/thumbnails/robot.webp",
    fallbackImage: "/img/thumbnails/robot.jpg",
    links: [
      {
        type: "preview",
        href: "https://codepen.io/EvyatarDa/full/vYGozEB",
      },
      {
        type: "codepen",
        href: "https://codepen.io/EvyatarDa/pen/vYGozEB",
      },
    ],
    description: () => (
      <>
        A robot created using a single div and gradient tricks.
        <br />
        Inspired by this Codepen by Jon Kantner: <br />
        <br />
        <a
          target="_blank"
          href="https://codepen.io/jkantner/pen/XMLVXa/"
          rel="noreferrer"
        >
          https://codepen.io/jkantner/pen/XMLVXa/
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "Animated Background Login",
    image: "/img/thumbnails/animated-login.webp",
    fallbackImage: "/img/thumbnails/animated-login.jpg",
    links: [
      {
        type: "preview",
        href: "https://codepen.io/EvyatarDa/full/rwRmVP",
      },
      {
        type: "codepen",
        href: "https://codepen.io/EvyatarDa/pen/rwRmVP",
      },
    ],
    description: () => (
      <>
        A concept design for a login page with an animated background.
        <br />
        Inspired by this Dribbble shot by Nest: <br />
        <br />
        <a
          target="_blank"
          href="https://dribbble.com/shots/1187493-Log-in-GIF-animation"
          rel="noreferrer"
        >
          https://dribbble.com/shots/1187493-Log-in-GIF-animation
        </a>
        <br />
        <br />
      </>
    ),
  },

  {
    title: "ShutterStock Downloader",
    image: "/img/thumbnails/shutterstock-downloader.png",
    links: [],
    description: () => (
      <>
        A custom Wordpress plugin for{" "}
        <a
          target="_blank"
          href="http://nationwideautotransportation.com/"
          rel="noreferrer"
        >
          Nationwide Auto Transportation
        </a>
        .<br />
        It downloads images from{" "}
        <a target="_blank" href="http://shutterstock.com/" rel="noreferrer">
          ShutterStock
        </a>
        , based on keywords, using their provided API. You can set count,
        keywords and some other parameters, as well as API credentials, and the
        plugin will download the images for you.
        <br />
        Simple as clicking a button.
      </>
    ),
  },
];
