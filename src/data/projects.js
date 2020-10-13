
const projects = [

    {
        isMockup: true,
        title: 'Coinalyzer',
        image: 'img/thumbnails/coinalyzer.png',
        mockup: 'img/mockup-right-2.png',
        description: `An awesome and special Crypto Coins analyzing tool for the internal use. <br />
        It grabs a lot of data about each coin which exists in <a target="_blank" href="https://coinmarketcap.com/">Coin Market Cap</a>,
        from various APIs, including price history & other details, that combined toghether can tell you whether to invest in that coin or not. <br />
        The success rates are pretty good, and we've already gain a high profit. <br />
        As can be seen in the screenshot, there is a really nice and friendly graph for each coin, which helps you deciding which coin is the best investment for you. <br />
        In addition, this tool integrates with Bitfinex & Cryptopia APIs, and runs Node.js exchange-bots which can sell or buy coins for you in the highest available profit.`
    },

    {
        isMockup: true,
        title: 'AI Web Design',
        image: 'img/thumbnails/futuristic-page.jpg',
        mockup: 'img/mockup-left.webp',
        fallbackMockup: 'img/mockup-left.png',
        link: 'projects/ai-web-design',
        description: `A concept web design of some futuristic AI company.<br />
        Inspired from this Dribbble shot by Howard Chen: <br /><br />
        <a target="_blank" href="https://dribbble.com/shots/7528753-AI-Web-Design">https://dribbble.com/shots/7528753-AI-Web-Design</a>
        <br /><br />`
    },

    {
        title: 'Weather App Concept',
        image: 'img/thumbnails/weather-app.jpg',
        link: 'projects/weather-app',
        description: `A concept design for Weather App.<br />
            Inspired from this Dribbble shot by Tiberiu Neamu: <br /><br />
            <a target="_blank" href="https://dribbble.com/shots/1081917-WhereTO-App/">https://dribbble.com/shots/1081917-WhereTO-App/</a>
            <br /><br />`
    },

    {
        title: 'The Joker Concept Design',
        image: 'img/thumbnails/joker.jpg',
        link: 'projects/the-joker',
        description: `A concept design for The Joker Movie.<br />
            Inspired from this Dribbble shot by Kalenskiy Dmitriy: <br /><br />
            <a target="_blank" href="https://dribbble.com/shots/7302010-Joker-desktop-concept">https://dribbble.com/shots/7302010-Joker-desktop-concept</a>
            <br /><br />`
    },

    {
        title: 'Material Design Login',
        image: 'img/thumbnails/material-login.webp',
        fallbackImage: 'img/thumbnails/material-login.jpg',
        link: 'projects/material-login',
        codepen: 'https://codepen.io/EvyatarDa/full/yaoGOB',
        description: `A concept design for a login page, based on the material design concepts.<br />
            Inspired from this Dribbble shot by Anton Aheichanka: <br /><br />
            <a target="_blank" href="https://dribbble.com/shots/1945593-Login-Home-Screen/">https://dribbble.com/shots/1945593-Login-Home-Screen/</a>
            <br /><br />`
    },

    {
        title: 'Codepen Clone',
        image: 'img/thumbnails/codepen-clone.png',
        link: 'projects/codepen-clone',
        github: 'https://github.com/StyleShit/Codepen-Clone',
        description: `A small clone of Codepen's basic functionality, using React and <a target="_blank" href="https://codemirror.net/">CodeMirror</a>.<br />
            The editor features live preview, syntax highlight and option to minimize each editor when you don't need it.
            <br /><br />`
    },

    {
        title: 'DailyUI Signup',
        image: 'img/thumbnails/flat-signup.jpg',
        link: 'projects/flat-signup',
        description: `A signup form designed for the DailyUI 100 Days Challenge.<br />
            Inspired from this Dribbble shot by Paul Aimé : <br /><br />
            <a target="_blank" href="https://dribbble.com/shots/2468662-Daily-UI-001-Sign-Up-Form/">https://dribbble.com/shots/2468662-Daily-UI-001-Sign-Up-Form/</a>
            <br /><br />`
    },
    
    {
        title: 'React Weather',
        image: 'img/thumbnails/react-weather-app.webp',
        fallbackImage: 'img/thumbnails/react-weather-app.jpg',
        link: 'projects/react-weather',
        github: 'https://github.com/StyleShit/Weather-Around-The-World',
        description: `A small React project that uses <a target="__blank" href="https://openweathermap.org/api">OpenWeather's API</a> to show live weather in places around the world.<br />
            Inspired from this Dribbble shot by kenzch: <br /><br />
            <a target="_blank" href="https://dribbble.com/shots/7112686-Weather-kit">https://dribbble.com/shots/7112686-Weather-kit</a>
            <br /><br />`
    },

    {
        title: 'Navigation Animations',
        image: 'img/thumbnails/navigation-animation.jpg',
        codepen: 'https://codepen.io/EvyatarDa/full/waKXMd/',
        description: `A bunch of inspiring navigation menu hover animations.<br />
            It held the 74th place at Codepen's 
            "<a target="_blank" href="https://codepen.io/2015/popular/pens/3/">Most Hearted of 2015</a>" 
            and still gains a lot of views & likes until this day.
            <br /><br />`
    },

    {
        title: 'ShutterStock Downloader',
        image: 'img/thumbnails/shutterstock-downloader.png',
        description: `A custom Wordpress plugin for <a target="_blank" href="http://nationwideautotransportation.com/">Nationwide Auto Transportation</a>.<br>
        It downloads images from <a target="_blank" href="http://shutterstock.com/">ShutterStock</a>, based on keywords, using their provided API.
        You can set count, keywords and some other parameters, as well as API credentials, and the plugin will download the images for you.<br>
        Simple as clicking a button.`
    },

    {
        title: 'Client for Reddit',
        image: 'img/thumbnails/reddit-client.png',
        link: 'projects/reddit-client',
        github: 'https://github.com/StyleShit/Basic-Client-For-Reddit',
        description: `A small basic client for Reddit with a new design, created using React.<br />
            Inspired from this Dribbble shot by Dmitriy Kharaberyush: <br /><br />
            <a target="_blank" href="https://dribbble.com/shots/3257279-Reddit-Trainy">https://dribbble.com/shots/3257279-Reddit-Trainy</a>
            <br /><br />`
    },

    {
        title: 'DailyUI Login',
        image: 'img/thumbnails/flat-login.webp',
        fallbackImage: 'img/thumbnails/flat-login.png',
        link: 'projects/flat-login',
        description: `A login form designed for the DailyUI 100 Days Challenge.<br />
            Inspired from this Dribbble shot by Paul Flavius Nechita: <br /><br />
            <a target="_blank" href="https://dribbble.com/shots/2125879-Day-001-Login-Form/">https://dribbble.com/shots/2125879-Day-001-Login-Form/</a>
            <br /><br />`
    },

    {
        title: 'Single Div Robot',
        image: 'img/thumbnails/robot.webp',
        fallbackImage: 'img/thumbnails/robot.jpg',
        link: 'projects/robot',
        codepen: 'https://codepen.io/EvyatarDa/full/vYGozEB',
        description: `A robot created using a single div and gradient tricks.<br />
            Inspired from this Codepen by Jon Kantner: <br /><br />
            <a target="_blank" href="https://codepen.io/jkantner/full/XMLVXa/">https://codepen.io/jkantner/full/XMLVXa/</a>
            <br /><br />`
    },

    {
        title: 'Animated Background Login',
        image: 'img/thumbnails/animated-login.webp',
        fallbackImage: 'img/thumbnails/animated-login.jpg',
        link: 'projects/animated-login',
        codepen: 'https://codepen.io/EvyatarDa/full/rwRmVP',
        description: `A concept design for a login page with an animated background.<br />
            Inspired from this Dribbble shot by Nest: <br /><br />
            <a target="_blank" href="https://dribbble.com/shots/1187493-Log-in-GIF-animation">https://dribbble.com/shots/1187493-Log-in-GIF-animation</a>
            <br /><br />`
    }
];

export default projects;