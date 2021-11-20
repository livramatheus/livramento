const projects = [
    {
        "id": 1, "title": "Matheus Workout Generator", "launchdate": "2020-10-10T03:00:00.000Z", "abstract": "MWG is workout generator that can be used to create random workouts taking some key phisiological variables into consideration.", "description": `<h2 id="about-the-project">About the project</h2><p><strong>Matheus' Workout Generator (MWG)</strong>, is a workout generator developed with PHP, JavaScript, CSS and MySql.</p><p>This project was developed with the intention of <strong>dealing with different technologies and launching a complete product</strong>: from planning, development to hosting. </p><p>By developing this application, I was able to learn new concepts and face various types of problems along the way. </p><p>As I'm very connected to the sport, I didn't hesitate when choosing the topic: workout generator.</p><h2 id="live-demo">Live demo</h2><p>Check out this project running on <a href="https://matheus-workout-generator.herokuapp.com/">Heroku</a></p><h2 id="features">Features</h2><p>The user is greeted by the home page, where he must inform which physical level he fits into: amateur, casual, athlete or professional.</p><p>Depending on the level selected, the system will generate a number of repetitions, number of sets and a specific number of exercises for that type of user. Also, the higher the athlete's level, the greater the chance of generating an exercise with an advanced stimulus.</p><p>The second field on the home page refers to the muscle groups the user wants to train.</p><p>After selecting the user level and groups, the workout will be generated.</p><p>At the top of the exercise list there is a unique code for the generated workout, this code can be copied and shared with another user so that they can view it.</p><p>With the workout code in hand, you can get back to it later by searching the home page.</p><p>All workouts have a view counter, the newly created ones are presented as &quot;Brand New&quot;. The view count only increases when unique users view the training.</p><h2 id="front-end">Front-end</h2><p>The client-side of <strong>MWG</strong> was built with HTML, CSS and JavaScript, using no particular framework.Every page change is performed through requests, preventing the entire page from being loaded from scratch.</p><p>The app's client side is can be summarized in the following layout:</p><h3 id="layout">Layout</h3><h4 id="mobile">Mobile</h4><div class="img-row mobile">    <img alt="Mobile 1" title="Mobile 1" src="/1/1_m.PNG"/><img alt="Mobile 1" title="Mobile 1" src="/1/1_m.PNG"/>    <img alt="Mobile 2" title="Mobile 2" src="/1/2_m.PNG"/>    <img alt="Mobile 3" title="Mobile 3" src="/1/3_m.PNG"/></div><h4 id="desktop">Desktop</h4><div class="img-row desktop">    <img alt="Desktop 1" title="Desktop 1" src="/1/1_d.PNG"/>    <img alt="Desktop 2" title="Desktop 3" src="/1/2_d.PNG"/>    <img alt="Desktop 3" title="Desktop 3" src="/1/3_d.PNG"/></div><h3 id="technologies-front">Technologies</h3><p>The following techlogies were used to build MWG&#39;s front-end:</p><ul>    <li><strong>HTML</strong>: Good and old HTML</li>    <li><strong>JavaScript (jQuery)</strong>: All validations and async requests were performed with jQuery. (I am fully aware that this is an outdated technology, however, I chose this library because as I was already used to the syntax and it is still eventually used in my workplace in legacy code).</li>    <li><strong>CSS</strong>: General CSS styling using Bootstrap.</li></ul><p>Third party plugins:</p><ul>    <li><a href="https://www.npmjs.com/package/bootstrap-select">Bootstrap Select</a></li></ul><h2 id="back-end">Back-end</h2><p>The back-end was developed with PHP, where every class was built from the ground up.Check some of the back-end key points:</p><ul>    <li>All class inclusions were made with composer&#39;s autoloader through namespaces.</li>    <li>Elegantly architectured via Model View Controller.</li>    <li>Class and folder naming are structured in the psr-4 pattern, required by the autoloader.</li>    <li>Friendly urls were created with the help of .htaccess to avoid ugly <em>querystrings</em>.</li>    <li>A cookie system was developed to track workout view counts: the view count of a given workout will only increase when a unique user visualizes it.</li></ul><h3 id="technologies-back">Technologies</h3><p>The following techlogies were used to build MWG's server:</p><ul>    <li><strong>PHP</strong>: All communication with the database and the training generation logic were performed with PHP.</li></ul><h2 id="database">Database</h2><p>MWG's database of choice was <a href="https://www.mysql.com">MySql</a>. Check out a brief description of the tables:</p><ul>    <li><strong>tbexercise:</strong> stores a wide set of available exercies;</li>    <li><strong>tbgroup:</strong> stores muscle group divisions;</li>    <li><strong>tblevel:</strong> stores possible user's level;</li>    <li><strong>tbstimulus:</strong> stores advanced variations for a exercise;</li>    <li><strong>tbworkout:</strong> stores generated workouts basic info;</li>    <li><strong>tbworkoutexercise:</strong> sotres relations between a workout and exercise. Many-to-many table.</li></ul><h3 id="how-to-set-up">How to set up</h3><p>If you wish to fork this project, start by running the <a href="https://github.com/livramatheus/MatheusWorkoutGenerator/blob/main/mwg.sql">SQL provided</a> in the root directory into your MySql database.</p><p>Also, you'll need to set up the following environment variables in your code:</p><h4 id="server-side-">Server-side:</h4><ul>    <li><strong>CLEARDB_DATABASE_URL</strong> (MySql database url)</li></ul><h3 id="author">Author</h3><p>Full stack developed by <strong>Matheus do Livramento</strong>.</p><p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`, "technologies": "HTML, CSS, Bootstrap, JavaScript, MySql", "gitaddr": "https://github.com/livramatheus/MatheusWorkoutGenerator"
    },
    {
        "id": 2, "title": "LuaCrypto", "launchdate": "2021-10-09T03:00:00.000Z", "abstract": "LuaCrypto is a web application that provides a wide array of data and charts about the most popular cryptocurrencies.", "description": `<h2 id="about-the-project">About the project</h2><p><strong>LuaCrypto</strong> is a web application that provides various data about the most popular cryptocurrencies, such as current price, market cap, daily trade volume, charts and much more.</p><p>I actually don't own any cryptocurrency because I think is too volatile, but due to the fact that I love charts it was more than enough motivation to build this project.</p><p>This project is by far the biggest I ever developed on my own. At it's current state I consider it as a whole product, but it's far from finished, as I have a lot of ideas to implement.</p><p>This project is divided into two separate repositories. As follows:</p><a href="https://github.com/livramatheus/luacrypto-front" class="gh-btn"><img src="/github-logo.svg" alt="GitHub Repository Client">Front-end</a><a href="https://github.com/livramatheus/luacrypto-back" class="gh-btn"><img src="/github-logo.svg" alt="GitHub Repository Server">Back-end</a><br/><h3>🤚 Important! Please read</h3><p> As this project took way longer that I expected to complete due to its <strong>complexity</strong>, I decided to rush it at the end to release it as a complete state. What that means is that there is problems with the code and I'm gonna improve it as soon as I have time. <strong>I'm totally aware of issues like:</strong></p><ul><li>Unelegant code on the front and back-end</li><li>Bad directory organization</li><li>Unhandled exceptions</li></ul><h2 id="live-demo">Live demo</h2><p>Check out this project running on <a href="https://luacrypto.com/">Netlify + Heroku</a></p><h2 id="features">Features</h2><p>This application is absolutely feature-rich, check out the main ones:</p><ul>    <li>List of the biggest cryptocurrencies with real time prices and charts</li>    <li>Detailed info of a cryptocurrencies, such as:</li>    <ul>        <li>Daily, weekly, monthly and yearly charts</li>        <li>Daily trading volume, % variation in price in the last 24 hours, 7 days and 30 days</li>        <li>Market cap, total supply and circulating supply</li>        <li>Explanation about the currency and how it works</li>    </ul>    <li>Mechanism that searches by the currency symbol and/or name</li>    <li>Info about the main cryptocurrencies dominance and total global market cap</li>    <li>Info about the main fiat currencies: USD and EUR</li>    <li>Currency converter, which converts every monetary value to the desired currency</li>    <li>Watchlist, let allows up to 9 coins to be observed in real time, having its prices being refreshed every 5 minutes</li>    <li>Detailed info of brazilian's ETFs, such as:</li>    <ul>        <li>Weekly, monthly and yearly charts</li>        <li>Daily high and daily low</li>        <li>Daily volume</li>        <li>Explanation about the ETF</li>    </ul>    <li>Fear and Greed index, which shows historical data about the market sentiment</li></ul><h2 id="front-end">Front-end</h2><p>The client-side of <strong>LuaCrypto</strong> was built with React, resulting in the following layout:</p><h3 id="layout">Layout</h3><h4 id="mobile">Mobile</h4><div  class="img-row mobile">    <img alt="Mobile 1" title="Mobile 1" src="/2/1_m.png" />    <img alt="Mobile 2" title="Mobile 2" src="/2/2_m.png" />    <img alt="Mobile 3" title="Mobile 3" src="/2/3_m.png" />    <img alt="Mobile 4" title="Mobile 4" src="/2/4_m.png" />    <img alt="Mobile 5" title="Mobile 5" src="/2/5_m.png"/>    <img alt="Mobile 6" title="Mobile 6" src="/2/6_m.png" />    <img alt="Mobile 7" title="Mobile 7" src="/2/7_m.png" />    <img alt="Mobile 8" title="Mobile 8" src="/2/8_m.png"/></div><h4 id="desktop">Desktop</h4><div class="img-row desktop">    <img alt="Desktop 1" title="Desktop 1" src="/2/1_d.png"/>    <img alt="Desktop 2" title="Desktop 2" src="/2/2_d.png"/>    <img alt="Desktop 3" title="Desktop 3" src="/2/3_d.png"/>    <img alt="Desktop 4" title="Desktop 4" src="/2/4_d.png" />    <img alt="Desktop 5" title="Desktop 5" src="/2/5_d.png"/>    <img alt="Desktop 6" title="Desktop 6" src="/2/6_d.png"/></div><h3 id="technologies-front">Technologies</h3><p>The following techlogies were used to build LuaCrypto's front-end:</p><ul>    <li><a href="https://github.com/axios/axios">Axios</a> for requests</li><li><a href="https://www.npmjs.com/package/axios-retry">Axios Retry</a> for handling failed requests</li>    <li><a href="https://www.npmjs.com/package/elementz">Elementz</a> for homepage dynamic table</li>    <li><a href="https://www.npmjs.com/package/gsap">Gsap</a> for watchlists card animations on refresh</li>    <li><a href="https://mui.com/">Material UI</a> for various less important components throughout the project</li>    <li><a href="https://www.npmjs.com/package/react-cookie-consent">React Cookie Consent</a> for cookie consent warning</li>    <li><a href="https://www.npmjs.com/package/react-device-detect">React Device Detect</a> for tweaks on responsivity</li>    <li><a href="https://www.npmjs.com/package/react-helmet">React Helmet</a> to dynamically set page title and meta tags</li>    <li><a href="https://www.npmjs.com/package/react-router-dom">React Router Dom</a> to manage pages navigation</li>    <li><a href="https://www.npmjs.com/package/recharts">Recharts</a> used in every chart on the application</li></ul><h2 id="back-end">Back-end</h2><p>Although the LuaCrypto back-end makes requests to the <a href="#external-apis">third-party APIs</a>, this process does not occur under the demand of the front-end. Since the APIs used in the project have request limits, schedules were developed with <a href="#technologies-back">node-cron</a> so that every x minutes a request to these APIs is triggered. As soon as the back-end receives the responses from the APIs, their values are stored at the database, in this way, the front-end requests data directly from the server side.<p>    <p>Storing numerous cryptocurrency prices at short intervals of time generates a huge data load, which leads to delays when queries are executed at the database, especially taking into account the use of JOINS. To alleviate these problems, the following processes were carried out:</p><ul>    <li><strong>Indexes</strong> were added on certain columns, which greatly improved query response time</li>    <li><strong>Tables were partitioned</strong> by monthly intervals, which generated a great improvement in query response time</li>    <li><a href="#technologies-back">Redis</a> - to cache requests (this was the technique that most contributed to improving response time)</li></ul><p>However, to load the home page, an extremely costly and slow query is performed (although it is already optimized), which calculates data from approximately 200 cryptocurrencies. To solve this problem, I will rewrite the project in Next.js and I will apply an Infinite Scrolling to the main application table.</p><h3 id="external-apis">External APIs</h3><p>The following third party APIs were used to feed LuaCrypto's database:</p><ul>    <li><a href="https://www.coingecko.com/api">Coingecko</a> for cryptocurrencies data</li>    <li><a href="https://alternative.me/crypto/fear-and-greed-index/#api">Alternative.me</a> for fear and greed indexes</li>    <li><a href="https://www.alphavantage.co/documentation/">Alphavantage</a> for ETFs and Fiats data</li></ul><h3 id="technologies-back">Technologies</h3><p>The following technologies were used to build LuaCrypto's server:</p><ul>    <li><a href="https://github.com/axios/axios">Axios</a> to perform requests</li>    <li><a href="https://www.npmjs.com/package/coingecko-api">Coingecko API</a> to feed cryptocurrencies data into the local database</li>    <li><a href="https://www.npmjs.com/package/cors">Cors</a> to block API requests from unwanted origins</li>    <li><a href="https://www.npmjs.com/package/dotenv">Dotenv</a> to set up environment variables</li>    <li><a href="https://www.npmjs.com/package/express">Express</a> for routes management</li>    <li><a href="https://www.npmjs.com/package/mysql">MySql</a> for database communication</li>    <li><a href="https://www.npmjs.com/package/node-cron">Node-Cron</a> to schedule external API requests</li>    <li><a href="https://www.npmjs.com/package/redis">Redis</a> to cache expensive queries results</li></ul><h2 id="database">Database</h2><p>LuaCrypto's database of choice was <a href="https://www.mysql.com">MySql</a>. Check out a brief description of the tables:</p><ul>    <li><strong>dominancia:</strong> stores daily data about cryptocurrencies market dominance</li>    <li><strong>etf:</strong> stores general data about ETFs</li>    <li><strong>cotacao_etf:</strong> stores price of ETFs at a given timestamp</li>    <li><strong>fiat:</strong> stores general data about fiat currencies</li>    <li><strong>cotacao_fiat:</strong> stores prices of fiat currencies at a given timestamp</li>    <li><strong>historico_medo_ganancia:</strong> stores the daily Fear and Greed index</li>    <li><strong>moeda:</strong> stores general data about cryptocurrencies</li>    <li><strong>cotacao_moeda:</strong> stores prices of cryptocurrencies at a given timestamp</li>    <li><strong>mercado_moeda:</strong> stores market data of cryptocurrencies at a given timestamp, such as max supply and circulating supply</li></ul><h3 id="task-list">Task List</h3><ul>    <li>Rewrite LuaCrypto in Next.js to fix SEO and performance issues (currently built with React)</li>    <li>Add "Latest News" widget to the main page</li>    <li>Add "Trending Cryptocurrencies" widget to the main page </li>    <li>Recreate the side menu as a MaterialUi component</li>    <li>Develop LuaCrypto's blog</li>    <li>Develop more type of charts to aid Technical Analysis</li>    <li>Fix minor bugs</li>    <li>Fix some "uglily" coded files</li></ul><h3 id="inspirations">Inspirations</h3><ul>    <li><a href="https://www.figma.com/community/file/809559910249051285">Figma Admin Dashboard UI Kit, by SaasDesign</a> (Dashboard Interface)</li>    <li><a href="https://coinmarketcap.com/">CoinMarketCap</a> (Project inspiration)</li></ul><h3 id="author">Author</h3><p>Full stack developed by <strong>Matheus do Livramento</strong>.</p><p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`, "technologies": "React, Node.js, HTML, CSS, JavaScript and MySql."
    },
    {
        "id": 3, "title": "React Weather Forecast", "launchdate": "2021-10-17T03:00:00.000Z", "abstract": "This application delivers the most essential weather forecast data based on user's current location. React Weather Forecast is basic, clean, simple and easy to use.", "description": `<h2 id="about-the-project">About the project</h2>
<p>This is a <strong>weather forecast</strong> application, that delivers a simple, clean and minimalist layout, projected for desktop and phone screens. This app was built using <em>React</em> and <em>Node</em>.</p><p>The main goal with this project was to <strong>release a simple and complete</strong> weather forecast app.</p><h2 id="live-demo">Live demo</h2><p>Check out this project running on <a href="https://livramento-weather.netlify.app/">Netlify + Heroku</a></p><p>You can also edit and view this project on Code Sand Box:</p><h4 id="front-end-">Front-end:</h4><p><a href="https://codesandbox.io/s/weather-forecast-front-465th?fontsize=14&amp;hidenavigation=1&amp;theme=dark"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Weather Forecast (Front)"></a></p><h4 id="back-end-">Back-end:</h4><p><a href="https://codesandbox.io/s/weather-forecast-back-z8nuo?fontsize=14&amp;hidenavigation=1&amp;theme=dark"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Weather Forecast (Back)"></a></p><h2 id="features">Features</h2><p>This application obtains user's current location and returns back to the client his city and district name, current weather conditions, detailed weather forecast for the current date and minimal and maximum temperature for the next days.</p><h2 id="front-end">Front-end</h2><p>The client-side of <strong>Weather Forecast</strong> was built with React, resulting in the following layout:</p><h3 id="layout">Layout</h3><h4 id="mobile">Mobile</h4><div class="img-row mobile">    <img alt="Mobile 1" title="Mobile 1" src="/3/1_m.png" />    <img alt="Mobile 2" title="Mobile 2" src="/3/2_m.png" /></div><h4 id="desktop">Desktop</h4><div class="img-row desktop">    <img alt="Desktop 1" title="Desktop 1" src="/3/1_d.png"/>    <img alt="Desktop 2" title="Desktop 2" src="/3/2_d.png"/></div><h3 id="technologies-front">Technologies</h3><p>The following techlogies were used to build Weather Forecast&#39;s front-end:</p><ul>    <li><a href="https://github.com/axios/axios">Axios</a></li>    <li><a href="https://mui.com/">Material UI</a></li>    <li><a href="https://www.npmjs.com/package/react-loading-skeleton">React Loading Skeleton</a></li>    <li><a href="https://www.npmjs.com/package/react-router-dom">React Router Dom</a></li></ul><h2 id="back-end">Back-end</h2><p>The back-end consists in a server developed with Express Framework for Node, which listens to request triggered by the the front-end layer of the application.</p><p>This Node server has a sole endpoint that returns a set of weather data and user's specific location:</p><ul>    <li><strong>/forecast</strong>: expects two parameters as <em>query string</em>:</li>    <ul>        <li><strong>lat:</strong> user´s latitude</li>        <li><strong>long:</strong> user´s longitude</li>    </ul>    <li>Returns:</li>    <ul>        <li>User's current city and district through reverese geolocation</li>        <li>Current weather conditions, like temperature, wind speed and humidity</li>        <li>Detailed weather forecast for the current date</li>        <li>Minimal and maximum temperature for the next days</li>    </ul></ul><p>Example:</p><blockquote>    <p>/forecast?lat=-23.5549053&amp;long=-46.4673641</p></blockquote><h3 id="external-apis">External APIs</h3><p>The following third party APIs were used to create Weather Forecast&#39;s API responses:</p><ul>    <li><a href="https://openweathermap.org/">Open Weather Map</a> for weather data</li>    <li><a href="https://locationiq.com/">LocationIQ</a> for reverse geolocation</li></ul><h3 id="technologies-back">Technologies</h3><p>The following techlogies were used to build Weather Forecast server:</p><ul>    <li><a href="https://www.npmjs.com/package/cors">Cors</a></li>    <li><a href="https://www.npmjs.com/package/express">Express</a></li>    <li><a href="https://github.com/axios/axios">Axios</a></li></ul><h3 id="how-to-set-up">How to set up</h3><p>If you wish to fork this project you&#39;ll need to set up the following environment variables:</p><h4 id="client-side-">Client-side:</h4><ul>    <li><strong>REACT_APP_BACK_URL</strong> (Server URL in order to send requests)</li></ul><h4 id="server-side-">Server-side:</h4><ul>    <li><strong>API_GEO</strong> (LocationIQ API key)</li>    <li><strong>API_WEATHER</strong> (Open Weather Map API key)</li>    <li><strong>PORT</strong> (Desired port to run express)</li></ul><h3 id="inspirations">Inspirations</h3><p>Weather Forecast was inspired by the following projects on Figma:</p><ul>    <li><a href="https://www.figma.com/community/file/955978734883254712">Weather Icons | Flat &amp; Outline</a></li>    <li><a href="https://www.figma.com/file/fXpD0piPYygazRk9mAXQH9/Weather-Forecast-App-(Community)">Weather Forecast App</a></li></ul><h3 id="author">Author</h3><p>Full stack developed by <strong>Matheus do Livramento</strong>.</p><p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`, "technologies": "React, Node.js, HTML, CSS and JavaScript.", gitaddr: 'https://github.com/livramatheus/weather-forecast-front'
    },
    {
        "id": 4, "title": "Astronaut SVG Animation", "launchdate": "2021-10-24T03:00:00.000Z", "abstract": "It's a simple HTML+CSS animation which would fit very well on a website banner or in a 404 page.", "description": `<h2 id="about-the-project">About the project</h2>

        <p>I made this project just because I was in the mood of doing animations. As I really liked the final product, I decided to publish it on GitHub. With the illustration beign animated, it will give a nice touch on a website banner or in a 404 page.</p>        <h2 id="live-demo">Live demo</h2>        <p>Check a live demo <a href="https://6r3nu.csb.app/">here</a></p>
        <p><a href="https://codesandbox.io/s/loving-meadow-6r3nu?autoresize=1&fontsize=14&hidenavigation=1&theme=dark">
          <img alt="Edit 6r3nu" src="https://codesandbox.io/static/img/play-codesandbox.svg">
        </a></p>        <h2 id="front-end">Front-end</h2>        <p>The front-end was built with HTML and CSS only, you can check below how the project look like:</p>
        <h3 id="layout">Layout</h3>        <div class="img-row desktop">
            <img alt="Desktop 1" title="Astronaut" src="/4/home.png" />
        </div>        <h3 id="technologies-front">Technologies</h3>        <p>The following techlogies were used to build Astronaut SVG Animation:</p>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        </ul>
        <h3 id="inspirations">Inspirations</h3>        <p>The astronaut's SVG was taken from:</p>
        <ul>
        <li><a href="https://www.figma.com/community/file/1015219633030143857">404 Illustration Card With Cool Caption, by Abell Vo</a></li>
        </ul>        <h3 id="author">Author</h3>        <p>Developed by <strong>Matheus do Livramento</strong>.</p>
        <p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`, "technologies": "HTML and CSS.", gitaddr: 'https://github.com/livramatheus/astronaut-svg-animation'
    },
    {
        "id": 5, "title": "Livramento.dev", "launchdate": "2021-11-06T03:00:00.000Z", "abstract": "This is my personal portfolio, built from scratch using React.", "description": `<h2 id="about-the-project">About the project</h2>
        <p>
            This is my personal portfolio, built from scratch using React. One of my main goals, other than presenting my own work is deliver a solid product, being fast with no loading times.
        </p>
        <p>
            My next goal with this project is applying <b>Next.js</b>, which will make adding more content easy, preserving the low loading times. 
        </p>
        <h2 id="front-end">Front-end</h2>
        <p>The client side of Livramento.dev is fully responsive. Check its layout below:</p>
        <h3 id="layout">Layout</h3>
        <h4>Mobile</h4>
        <div class="img-row mobile" >
            <img alt="Mobile 1" title="Mobilie 1"
                src="/5/1_m.JPG"  />
            <img alt="Mobile 2" title="Mobilie 2"
                src="/5/2_m.JPG"  />
            <img alt="Mobile 3" title="Mobilie 3"
                src="/5/3_m.JPG"  />
            <img alt="Mobile 4" title="Mobilie 4"
            src="/5/4_m.JPG"  />
            <img alt="Mobile 5" title="Mobilie 5"
            src="/5/5_m.JPG"  />
            <img alt="Mobile 6" title="Mobilie 6"
            src="/5/6_m.JPG"  />
        </div>
    
        <h4>Desktop</h4>
        <div class="img-row desktop">
            <img alt="Desktop 1" title="Desktop 1" src="/5/1_d.jpg"  />
            <img alt="Desktop 2" title="Desktop 2" src="/5/2_d.jpg"  />
            <img alt="Desktop 3" title="Desktop 3" src="/5/3_d.jpg"  />
            <img alt="Desktop 4" title="Desktop 4" src="/5/4_d.jpg"  />
            <img alt="Desktop 5" title="Desktop 5" src="/5/5_d.jpg"  />
            <img alt="Desktop 6" title="Desktop 6" src="/5/6_d.jpg"  />
        </div>
    
        <h3 id="technologies-front">Technologies</h3>
    
        <p>The following technologies were used to build the application's front-end:</p>
        <ul>
            <li><a href="https://www.npmjs.com/package/aos">AOS</a></li>
            <li><a href="https://www.npmjs.com/package/date-fns">Date-fns</a></li>
            <li><a href="https://www.npmjs.com/package/dompurify">Dompurify</a></li>
            <li><a href="https://mui.com/">Material UI</a></li>
            <li><a href="https://www.npmjs.com/package/rc-progress">RC Progress</a></li>
            <li><a href="https://www.npmjs.com/package/react-device-detect">React Device Detect</a></li>
            <li><a href="https://www.npmjs.com/package/react-helmet">React Helmet</a></li>
            <li><a href="https://react-icons.github.io/react-icons/">React Icons</a></li>
            <li><a href="https://www.npmjs.com/package/react-router-dom">React Router DOM</a></li>
            <li><a href="https://www.npmjs.com/package/react-vertical-timeline-component">React Vertical Timeline Component</a></li>
        </ul>
    
        <h3 id="inspirations">Inspirations</h3>
    
        <p>This portfolio was inspired by the following projects:</p>
        <ul>
            <li><a href="https://www.figma.com/community/file/824810955262478067">Ryan Warner Codes, by Ryan Warner</a></li>
            <li><a href="https://youtu.be/27JtRAI3QO8">Personal Portfolio Website, by Bedimcode</a></li>
        </ul>
    
        <h3 id="author">Author</h3>
    
        <p>Full stack developed by <strong>Matheus do Livramento</strong>.</p>
    
        <p><a href="https://github.com/livramatheus">GitHub</a> | <a
                href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`, "technologies": "React, HTML, CSS and JavaScript", gitaddr: 'https://github.com/livramatheus/livramento'
    },
    {
        "id": 6, "title": "Express-like PHP router", "launchdate": "2021-11-08T00:00:00.000Z", "abstract": "This was an attempt to mimic Express router in PHP. The final product offers a router that accepts GET and POST requests.", "description": `
        <h2 id="about-the-project">About the project</h2>
        <p>This was an attempt to mimic Express router in PHP. The outcome went pretty well, resembling a lot the "Original" Express.</p>
        <p>The final product offers a router that accepts GET and POST requests.</p>
        <p>This project is actually kinda small, and wasn't tested a lot, so there is still a lot more room to improve.</p>
        <p>I'm aware that there is classes for managing requests and responses, but I wanted to build everything from scratch.</p>
        <h2 id="features">Features</h2>
        <p>This package offers a simple and standardized way to declare routes, accepting GET and POST parameters.</p>
        <h2 id="back-end">Back-end</h2>
        <p>The router is based on two main classes: Router and Response. Router receives and manages routes, Response is used to sent data back to the client.</p>
        <h3 id="technologies-back">Technologies</h3>
        <ul>
            <li><a href="https://getcomposer.org/">Composer, for autoloading classes</a></li>
        </ul>
        <h3 id="inspirations">Inspirations</h3>
        <ul>
            <li><a href="https://www.npmjs.com/package/express">Express</a></li>
        </ul>
        <h3 id="author">Author</h3>
        <p>Full stack developed by <strong>Matheus do Livramento</strong>.</p>
        <p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`,
        "technologies": "PHP.",
        "gitaddr": "https://github.com/livramatheus/express-like-php-router"
    },
    {
        "id": 7, "title": "Java Keywords Challenge", "launchdate": "2021-11-18T00:00:00.000Z", "abstract": "This is a Java Keywords Challenge built with React. This project was done on a tryout that I participated to a tech company.", "description": `<h2 id="about-the-project"> About the project</h2>
        <p>This is a Java Keywords Challenge built with React. This project was done on a tryout that I participated to a
            tech company.</p>
        <h2 id="live-demo">Live demo</h2>
        <p>Check out this project running on <a href="https://java-keywords-challenge.netlify.app/">Netlify</a></p>
        <h2 id="front-end">Front-end</h2>
        <p>The client-side of Java Keywords Challenge was built with React, resulting in the following layout:</p>
        <h3 id="layout">Layout</h3>
        <h4>Desktop</h4>
        <div class="img-row desktop">
            <img alt="Desktop 1" title="Layout"
                src="https://github.com/livramatheus/java-keywords-challenge/raw/main/src/assets/1_d.png"/>
        </div>
        <h3 id="technologies-front"> Technologies</h3>
        <p>The following techlogies were used to build Java Keywords Challenge's front-end:</p>
        <ul>
            <li><a href="https://www.npmjs.com/package/react-icons">React Icons</a></li>
            <li><a href="https://www.npmjs.com/package/react-countdown">React Countdown</a></li>
        </ul>
        <h3 id="inspirations"> Inspirations</h3>
        <a href="https://www.sporcle.com/games/robv/java_keywords">Java Keywords Challenge</a>
        <h3 id="author"> Author</h3>
        <p>Full stack developed by <strong>Matheus do Livramento</strong></p>
        <p><a href="https://github.com/livramatheus">GitHub</a> | <a
                href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`,
        "technologies": "React, HTML, CSS and JavaScript.",
        "gitaddr": "https://github.com/livramatheus/java-keywords-challenge"
    }
];

const getProjects = () => {
    projects.sort((a, b) => {
        return new Date(b.launchdate) - new Date(a.launchdate);
    });

    return new Promise((resolve, reject) => {
        resolve({ data: projects });
    });
};

const getProject = (id) => {
    return new Promise((resolve, reject) => {
        let selected = projects.find(e => { return e.id == id; })
        resolve({ data: selected });
    })
};

export { getProjects, getProject }