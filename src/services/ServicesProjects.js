const projects = [
    {
        "id": 1, "title": "Matheus Workout Generator", "launchdate": "2020-10-10T03:00:00.000Z", "abstract": "MWG is workout generator that can be used to create random workouts taking some key physiological variables into consideration.", "description": `<h2 id="about-the-project">About the project</h2><p><strong>Matheus' Workout Generator (MWG)</strong>, is a workout generator developed with PHP, JavaScript, CSS and MySql.</p><p>This project was developed with the intention of <strong>dealing with different technologies and launching a complete product</strong>: from planning, development to hosting. </p><p>By developing this application, I was able to learn new concepts and face various types of problems along the way. </p><p>As I'm very connected to the sport, I didn't hesitate when choosing the topic: workout generator.</p><h2 id="live-demo">Live demo</h2><p>Check out this project running on <a href="https://matheus-workout-generator.herokuapp.com/">Heroku</a></p><h2 id="features">Features</h2><p>The user is greeted by the home page, where he must  indicate which physical level he fits into: amateur, casual, athlete or professional.</p><p>Depending on the level selected, the system will generate a number of repetitions, number of sets and a specific number of exercises for that type of user. Also, the higher the athlete's level, the greater the chance of generating an exercise with an advanced stimulus.</p><p>The second field on the home page refers to the muscle groups the user wants to train.</p><p>After selecting the user level and groups, the workout will be generated.</p><p>At the top of the exercise list there is a unique code for the generated workout. This code can be copied and shared with another user so that they can view it.</p><p>With the workout code in hand, you can get back to it later by searching the home page.</p><p>All workouts have a view counter, the newly created ones are presented as &quot;Brand New&quot;. The view count only increases when unique users view the training.</p><h2 id="front-end">Front-end</h2><p>The client-side of <strong>MWG</strong> was built with HTML, CSS and JavaScript, using no particular framework. Every page change is performed through requests, preventing the entire page from being loaded from scratch.</p><p>The app's client side can be summarized in the following layout:</p><h3 id="layout">Layout</h3><h4 id="mobile">Mobile</h4><div class="img-row mobile">    <img alt="Mobile 1" title="Mobile 1" src="/1/1_m.PNG"/><img alt="Mobile 1" title="Mobile 1" src="/1/1_m.PNG"/>    <img alt="Mobile 2" title="Mobile 2" src="/1/2_m.PNG"/>    <img alt="Mobile 3" title="Mobile 3" src="/1/3_m.PNG"/></div><h4 id="desktop">Desktop</h4><div class="img-row desktop">    <img alt="Desktop 1" title="Desktop 1" src="/1/1_d.PNG"/>    <img alt="Desktop 2" title="Desktop 3" src="/1/2_d.PNG"/>    <img alt="Desktop 3" title="Desktop 3" src="/1/3_d.PNG"/></div><h3 id="technologies-front">Technologies</h3><p>The following technologies were used to build MWG&#39;s front-end:</p><ul>    <li><strong>HTML</strong>: Good and old HTML</li>    <li><strong>JavaScript (jQuery)</strong>: All validations and async requests were performed with jQuery. (I am fully aware that this is an outdated technology, however, I chose this library because I was already used to the syntax and it is still eventually used in my workplace in legacy code).</li>    <li><strong>CSS</strong>: General CSS styling using Bootstrap.</li></ul><p>Third-party plugins:</p><ul>    <li><a href="https://www.npmjs.com/package/bootstrap-select">Bootstrap Select</a></li></ul><h2 id="back-end">Back-end</h2><p>The back-end was developed with PHP, where every class was built from the ground up. Check out some of the back-end key points:</p><ul>    <li>All class inclusions were made with composer&#39;s autoloader through namespaces.</li>    <li>Elegantly architectured via Model View Controller.</li>    <li>Class and folder naming are structured in the psr-4 pattern, required by the autoloader.</li>    <li>Friendly URLs were created with the help of .htaccess to avoid ugly <em>querystrings</em>.</li>    <li>A cookie system was developed to track workout view counts: the view count of a given workout will only increase when a unique user visualizes it.</li></ul><h3 id="technologies-back">Technologies</h3><p>The following technologies were used to build MWG's server:</p><ul>    <li><strong>PHP</strong>: All communication with the database and the training generation logic were performed with PHP.</li></ul><h2 id="database">Database</h2><p>MWG's database of choice was <a href="https://www.mysql.com">MySql</a>. Check out a brief description of the tables:</p><ul>    <li><strong>tbexercise:</strong> stores a wide set of available exercies;</li>    <li><strong>tbgroup:</strong> stores muscle group divisions;</li>    <li><strong>tblevel:</strong> stores possible user's level;</li>    <li><strong>tbstimulus:</strong> stores advanced variations for a exercise;</li>    <li><strong>tbworkout:</strong> stores generated workouts basic info;</li>    <li><strong>tbworkoutexercise:</strong> sotres relations between a workout and exercise. Many-to-many table.</li></ul><h3 id="how-to-set-up">How to set up</h3><p>If you wish to fork this project, start by running the <a href="https://github.com/livramatheus/MatheusWorkoutGenerator/blob/main/mwg.sql">SQL provided</a> in the root directory into your MySql database.</p><p>Also, you'll need to set up the following environment variables in your code:</p><h4 id="server-side-">Server-side:</h4><ul>    <li><strong>CLEARDB_DATABASE_URL</strong> (MySql database url)</li></ul><h3 id="author">Author</h3><p>Full stack developed by <strong>Matheus do Livramento</strong>.</p><p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`, "technologies": "HTML, CSS, Bootstrap, JavaScript, MySql", "gitaddr": "https://github.com/livramatheus/MatheusWorkoutGenerator"
    },
    {
        "id": 3, "title": "React Weather Forecast", "launchdate": "2021-10-17T03:00:00.000Z", "abstract": "This application delivers the most essential weather forecast data based on user's current location. React Weather Forecast is basic, clean, simple and easy to use.", "description": `<h2 id="about-the-project">About the project</h2>
<p>This is a <strong>weather forecast</strong> application, that delivers a simple, clean and minimalist layout, suitable for desktop and phone screens. This app was built using <em>React</em> and <em>Node</em>.</p><p>The main goal with this project was to <strong>release a simple and complete</strong> weather forecast app.</p><h2 id="live-demo">Live demo</h2><p>Check out this project running on <a href="https://livramento-weather.netlify.app/">Netlify + Heroku</a></p><p>You can also edit and view this project on Code Sand Box:</p><h4 id="front-end-">Front-end:</h4><p><a href="https://codesandbox.io/s/weather-forecast-front-465th?fontsize=14&amp;hidenavigation=1&amp;theme=dark"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Weather Forecast (Front)"></a></p><h4 id="back-end-">Back-end:</h4><p><a href="https://codesandbox.io/s/weather-forecast-back-z8nuo?fontsize=14&amp;hidenavigation=1&amp;theme=dark"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Weather Forecast (Back)"></a></p><h2 id="features">Features</h2><p>This application obtains user's current location and returns back to the client his city and district name, current weather conditions, detailed weather forecast for the current date and minimal and maximum temperature for the next few days.</p><h2 id="front-end">Front-end</h2><p>The client-side of <strong>Weather Forecast</strong> was built with React, resulting in the following layout:</p><h3 id="layout">Layout</h3><h4 id="mobile">Mobile</h4><div class="img-row mobile">    <img alt="Mobile 1" title="Mobile 1" src="/3/1_m.png" />    <img alt="Mobile 2" title="Mobile 2" src="/3/2_m.png" /></div><h4 id="desktop">Desktop</h4><div class="img-row desktop">    <img alt="Desktop 1" title="Desktop 1" src="/3/1_d.png"/>    <img alt="Desktop 2" title="Desktop 2" src="/3/2_d.png"/></div><h3 id="technologies-front">Technologies</h3><p>The following technologies were used to build Weather Forecast&#39;s front-end:</p><ul>    <li><a href="https://github.com/axios/axios">Axios</a></li>    <li><a href="https://mui.com/">Material UI</a></li>    <li><a href="https://www.npmjs.com/package/react-loading-skeleton">React Loading Skeleton</a></li>    <li><a href="https://www.npmjs.com/package/react-router-dom">React Router Dom</a></li></ul><h2 id="back-end">Back-end</h2><p>The back-end consists in a server developed with the Express Framework for Node, which listens to requests triggered by the front-end layer of the application.</p><p>This Node server has a sole endpoint that returns a set of weather data and the user's specific location:</p><ul>    <li><strong>/forecast</strong>: expects two parameters as a <em>query string</em>:</li>    <ul>        <li><strong>lat:</strong> user´s latitude</li>        <li><strong>long:</strong> user´s longitude</li>    </ul>    <li>Returns:</li>    <ul>        <li>User's current city and district through reverese geolocation</li>        <li>Current weather conditions, like temperature, wind speed and humidity</li>        <li>Detailed weather forecast for the current date</li>        <li>Minimal and maximum temperature for the next days</li>    </ul></ul><p>Example:</p><blockquote>    <p>/forecast?lat=-23.5549053&amp;long=-46.4673641</p></blockquote><h3 id="external-apis">External APIs</h3><p>The following third-party APIs were used to create Weather Forecast&#39;s API responses:</p><ul>    <li><a href="https://openweathermap.org/">Open Weather Map</a> for weather data</li>    <li><a href="https://locationiq.com/">LocationIQ</a> for reverse geolocation</li></ul><h3 id="technologies-back">Technologies</h3><p>The following technologies were used to build Weather Forecast server:</p><ul>    <li><a href="https://www.npmjs.com/package/cors">Cors</a></li>    <li><a href="https://www.npmjs.com/package/express">Express</a></li>    <li><a href="https://github.com/axios/axios">Axios</a></li></ul><h3 id="how-to-set-up">How to set up</h3><p>If you wish to fork this project, you&#39;ll need to set up the following environment variables:</p><h4 id="client-side-">Client-side:</h4><ul>    <li><strong>REACT_APP_BACK_URL</strong> (Server URL in order to send requests)</li></ul><h4 id="server-side-">Server-side:</h4><ul>    <li><strong>API_GEO</strong> (LocationIQ API key)</li>    <li><strong>API_WEATHER</strong> (Open Weather Map API key)</li>    <li><strong>PORT</strong> (Desired port to run express)</li></ul><h3 id="inspirations">Inspirations</h3><p>Weather Forecast was inspired by the following projects on Figma:</p><ul>    <li><a href="https://www.figma.com/community/file/955978734883254712">Weather Icons | Flat &amp; Outline</a></li>    <li><a href="https://www.figma.com/file/fXpD0piPYygazRk9mAXQH9/Weather-Forecast-App-(Community)">Weather Forecast App</a></li></ul><h3 id="author">Author</h3><p>Full stack developed by <strong>Matheus do Livramento</strong>.</p><p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a></p>`, "technologies": "React, Node.js, HTML, CSS and JavaScript.", gitaddr: 'https://github.com/livramatheus/weather-forecast-front'
    },
    {
        "id": 4, "title": "Astronaut SVG Animation", "launchdate": "2021-10-24T03:00:00.000Z", "abstract": "It's a simple HTML+CSS animation which would fit very well on a website banner or on a 404 page.", "description": `<h2 id="about-the-project">About the project</h2>

        <p>I made this project just because I was in the mood of doing animations. As I really liked the final product, I decided to publish it on GitHub. With the illustration being animated, it will give a nice touch on a website banner or on a 404 page.</p>        <h2 id="live-demo">Live demo</h2>        <p>Check a live demo <a href="https://6r3nu.csb.app/">here</a></p>
        <p><a href="https://codesandbox.io/s/loving-meadow-6r3nu?autoresize=1&fontsize=14&hidenavigation=1&theme=dark">
          <img alt="Edit 6r3nu" src="https://codesandbox.io/static/img/play-codesandbox.svg">
        </a></p>        <h2 id="front-end">Front-end</h2>        <p>The front-end was built with HTML and CSS only, you can check below how the project looks like:</p>
        <h3 id="layout">Layout</h3>        <div class="img-row desktop">
            <img alt="Desktop 1" title="Astronaut" src="/4/home.png" />
        </div>        <h3 id="technologies-front">Technologies</h3>        <p>The following technologies were used to build Astronaut SVG Animation:</p>
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
            This is my personal portfolio, built from scratch using React. One of my main goals, other than presenting my own work, is to deliver a solid product, being fast with no loading times.
        </p>
        <p>
            My next goal with this project is to apply <b>Next.js</b>, which will make adding more content easy, preserving the low loading times. 
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
        <p>This project is actually kind of small, and wasn't tested a lot, so there is still a lot more room to improve.</p>
        <p>I'm aware that there are classes for managing requests and responses, but I wanted to build everything from scratch.</p>
        <h2 id="features">Features</h2>
        <p>This package offers a simple and standardized way to declare routes, accepting GET and POST parameters.</p>
        <h2 id="back-end">Back-end</h2>
        <p>The router is based on two main classes: Router and Response. Router receives and manages routes. Response is used to send data back to the client.</p>
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
        <p>The following technologies were used to build Java Keywords Challenge's front-end:</p>
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
    },
    {
        "id": 8, "title": "PHP Course Project", "launchdate": "2021-12-21T00:00:00.000Z", "abstract": "This is the project that I used a few times for teaching PHP for juniors devs.", "description":
        `
        <div>
            <h2>Note for english speakers</h2>
            <p>
                This is the project that I used for teaching basic PHP to Junior devs at a company that I used to work for here in Brazil, so:
            </p>
            <ul>
                <li>This project is only available in Brazilian Porgutuese.</li>
                <li>The code was developed in a simplistic way for teaching purposes, putting aside more elaborate code patterns.</li>
            </ul>
        </div>

        <h2>Tabela de conteúdo</h2>

        <ul>
            <li><a href="#about-the-project-br">Sobre o projeto</a></li>
            <li><a href="#live-demo-br">Live demo</a></li>
            <li><a href="#features-br">Funcionalidades</a></li>
            <li><a href="#front-end-br">Front-end</a></li>
            <ul>
                <li><a href="#layout-br">Layout</a></li>
            </ul>
            <li><a href="#back-end-br">Back-end</a></li>
            <li><a href="#database-br">Banco de dados</a></li>
            <li><a href="#how-to-set-up-br">Como configurar</a></li>
            <li><a href="#autor-br">Autores</a></li>
        </ul>

        <h2 id="about-the-project-br">Sobre o projeto</h2>

        <p>
            Este projeto era utilizado para ministrar as minhas aulas de introdução ao PHP para iniciantes em programação. Basicamente trata-se de um sistema de folha de pagamento simplificado de uma prefeitura fictícia.
        </p>

        <p>
            Esta aplicação web era desenvolvida ao longo de uma carga horária de 64 horas, que englobava HTML, PostgreSQL, PHP básico, comunicação entre PHP e banco de dados e programação orientada a objetos. Como o foco do curso em questão era o back-end, toda interface já tinha sido desenvolvida por mim antes do início das aulas, assim, os alunos focavam apenas em desenvolver a regra de negócio.
        </p>

        <p>
            A interface utilizada neste projeto foi idealizada pelo meu amigo <b>Amilton Schlemper - UI/UX Designer.</b> Você pode conferir a prototipação em detalhes no arquivo .fig, localizado na pasta <em>assets</em> deste repositório.
        </p>

        <h2 id="live-demo-br">Live demo</h2>

        <p>Veja este projeto rodando no <a href="https://curso-php-folha.herokuapp.com/">Heroku</a></p>

        <h2 id="features-br">Funcionalidades</h2>

        <p>
            As funcionalidades básicas desta aplicação são:
        </p>

        <ul>
            <li>Cadastro, remoção e listagem de cidades</li>
            <li>Cadastro, remoção e listagem de cargos</li>
            <li>Cadastro, remoção e listagem de funcionários</li>
            <li>Cálculo de pagamento de funcionário</li>
            <li>Consulta de pagamento de funcionário</li>
        </ul>

        <h2 id="front-end-br">Front-end</h2>

        <p>
            O lado do cliente desta aplicação foi desenvolvido com HTML, e CSS,  contando com JavaScript apenas para pequenas manipulações.
        </p>

        <h3 id="layout-br">Layout</h3>

        <p>Como a trilha de aprendizados era de fato o back-end, a aplicação conta apenas com interface desktop.</p>

        <div class="img-row desktop">
            <img alt="Desktop 1" title="Página inicial" src="/8/1_d.webp" />
            <img alt="Desktop 2" title="Cadastro de cidades" src="/8/2_d.webp" />
            <img alt="Desktop 3" title="Listagem de cargos" src="/8/3_d.webp" />
            <img alt="Desktop 4" title="Lançamento de folha de pagamento" src="/8/4_d.webp" />
            <img alt="Desktop 5" title="Mensagem de erro" src="/8/5_d.webp" />
            <img alt="Desktop 6" title="Consulta de folha de pagamento" src="/8/6_d.webp" />
        </div>

        <h2 id="back-end-br">Back-end</h2>

        <p>
            Esta aplicação foi escrita em Vanilla PHP, utilizando apenas o composer para fazer a inclusão automática das classes através do namespaces.
        </p>

        <p>
            Como o foco principal deste projeto é a <b>didática</b>, o mesmo foi desenvolvido de forma simplificada. Assim sendo, para fins de produção/comerciais, seu código fonte teria de ser refatorado e reescrito em uma arquitetura mais elaborada.
        </p>

        <h2 id="database-br">Banco de Dados</h2>

        <p>O banco de dados escolhido para desenvolver este projeto foi o <a href="https://www.postgresql.org/">PostgreSQL</a>. Veja a seguir uma breve descrição de suas tabelas:</p>
        <ul>
            <li><strong>tbcidade:</strong> armazena as cidades a serem vinculadas aos funcionários;</li>
            <li><strong>tbcargo:</strong> armazena os cargos a serem vinculados aos funcionários;</li>
            <li><strong>tbfuncionario:</strong> armazena os funcionários. Possui vinculo com a tabela tbcargo e tbcidade;</li>
            <li><strong>tbpagamento:</strong> armazena pagamentos realizados para os funcionários.</li>
        </ul>

        <h3 id="how-to-set-up-br">Como configurar</h3>

        <p>Se você deseja fazer um <em>fork</em> deste projeto, você precisará configurar as seguintes variáveis de ambiente:</p>

        <ul>
            <li><strong>DATABASE_URL</strong> (String de conexão com o banco de dados)</li>
        </ul>

        <h3 id="autor-br">Autores</h3>

        <p>
            Full stack  desenvolvido por <strong>Matheus do Livramento</strong>.
        </p>
        <p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a> | <a href="https://www.livramento.dev/">Website</a></p>

        <p>
            Interface do usuário criada por <strong>Amilton Schlemper</strong>.
        </p>
        <p><a href="https://dribbble.com/amilton-schlemper">Dribble</a> | <a href="https://www.linkedin.com/in/amilton-schlemper/">LinkedIn</a></p>
        `,
        "technologies": "PHP, PostgreSQL, HTML, CSS and JavaScript",
        "gitaddr": "https://github.com/livramatheus/projeto-curso-php"
    },
    {
        "id": 9, "title": "PlanetGame", "launchdate": "2022-04-24T03:00:00.000Z", "abstract": "PlanetGame is a game database prototype website that indexes information about games, genres and publishers.", "description": `
        <div style="display: flex; flex-direction: row; gap: 1rem">
            <a href="https://github.com/livramatheus/planetgame_front" class="gh-btn">
                <img src="/github-logo.svg" alt="Repository Front-end"> Front-end repo
            </a>
            <a href="https://github.com/livramatheus/planetgame_back" class="gh-btn">
                <img src="/github-logo.svg" alt="Repository Front-end"> Back-end repo
            </a>
        </div>
        
        <h2 id="about-the-project">About the project</h2>

        <p>
            The main goal with this project was to release a full-stack application focusing in applying a solid development workflow, consistent code quality, a good organization and also learning new things along the way.
        </p>
        
        <p>
            In this project I tried for the fist time <b>GitHub Projects</b> with Automated Kanban, and I gotta say that the experience was incredible. Usually my personal projects development process turns out to be really chaotic, and by adopting this tool, the development workflow became way cleaner and faster.
        </p>
        
        <p>
            Another crucial mechanism that I adopted for the first time on this project was having <b>three separate environments</b>: development, <a href="https://test-planetgame.netlify.app/">test</a> and <a href="https://planetgame.netlify.app/">production</a>. This was easily achivable by pushing code to distinct git branches and turning on auto deploy on Netlify and Heroku.
        </p>
        
        <p>
            Lastly, this was the first project that I implemented a <b>JWT authentication</b>. I did the token's creation from the ground up via PHP, and, to handle it on the front-end I used a third party package. I gotta admit that the token implementation on the back-end may need some security improvements, but, for now is enough.
        </p>
        
        <p>
            You can find more detailed info about the project in the next sections.
        </p>
        
        <h2 id="live-demo">Live demo</h2>
        
        <p>Check out this project running on <a href="https://planetgame.netlify.app/">Netlify + Heroku</a></p>
        
        <h2 id="features">Features</h2>
        
        <p>
            The main functionality of this application is the possibility of users suggesting a game to be listed on the website through a form, without any kind of login or authentication. However, the games sent by users will remain hidden up to the point an admin reviews and approves it.
        </p>
        
        <p>
            In a more detailed way, the following are the core features of PlanetGame:
        </p>
        
        <ul>
            <li>Game genres listing</li>
            <li>Game publishers listing</li>
            <li>Games listing</li>
            <li>Publisher details</li>
            <li>Game details</li>
            <li>Game suggesting (new game)</li>
            <li>Admin login</li>
            <li>Game approval</li>
            <li>Game denial (delete)</li>
        </ul>
        
        <h2 id="front-end">Front-end</h2>
        
        <p>
            The client-side of <b>PlanetGame</b> was built with React library. The key technical points to be noted throughout development of the front-end was the use of <b>custom hooks</b> and a clean component organization.
        </p>
        
        <p>
            The main and secondary pages are presented with random banners to maintain a refreshing experience for the user. As this process envolved a few heavy images to be loaded, I <a href="https://developers.google.com/speed/webp">converted those banners from .png to .webp</a> to improve website performance. The results was incredible: I measured the first paint of home page before and after the conversion: the loading time decreased from <b>1.4 seconds to 0.7 seconds</b>.
        </p>
        
        <p>
            To improve the user experience, in the sections where data is fetched asynchronously  from the back-end, Skeletons from MUI package was used as a placeholder until the data is completely loaded.
        </p>
        
        <p>
            The UI, being entirely <b>responsive</b> was developed from the ground up using HTML and CSS. Talking about responsiveness, a hamburger menu was also developed from scratch, only using AOS and hamburger-react libraries for its animations. 
        </p>
        
        <h3 id="layout">Layout</h3>
        
        <h4>Mobile</h4>
        
        <div class="img-row mobile">
            <img alt="Mobile 1" title="Main Page" src="/9/1_m.webp" height="360"/>
            <img alt="Mobile 2" title="Hamburger Menu" src="/9/2_m.webp" height="360"/>
            <img alt="Mobile 3" title="Data Table" src="/9/3_m.webp" height="360"/>
            <img alt="Mobile 4" title="New Game Form" src="/9/4_m.webp" height="360"/>
        </div>
        
        <h4>Desktop</h4>
        
        <div class="img-row desktop">
            <img alt="Desktop 1" title="Main Page" src="/9/1_d.webp" height="240"/>
            <img alt="Desktop 2" title="Data table" src="/9/2_d.webp" height="240"/>
            <img alt="Desktop 3" title="New Game Form" src="/9/3_d.webp" height="240"/>
            <img alt="Desktop 4" title="Admin Login Form" src="/9/4_d.webp" height="240"/>
            <img alt="Desktop 5" title="Admin Panel" src="/9/5_d.webp" height="240"/>
            <img alt="Desktop 6" title="Admin Actions" src="/9/6_d.webp" height="240"/>
        </div>
        
        <h3 id="technologies-front">Technologies</h3>
        
        <p>The following technologies were used to build PlanetGame front-end:</p>
        <ul>
            <li><a href="https://www.npmjs.com/package/@mui/material">@mui/material</a></li>
            <li><a href="https://www.npmjs.com/package/@date-io/date-fns">@date-io/date-fns</a></li>
            <li><a href="https://www.npmjs.com/package/aos">aos</a></li>
            <li><a href="https://www.npmjs.com/package/axios">axios</a></li>
            <li><a href="https://www.npmjs.com/package/disable-scroll">disable-scroll</a></li>
            <li><a href="https://www.npmjs.com/package/hamburger-react">hamburger-react</a></li>
            <li><a href="https://www.npmjs.com/package/jwt-decode">jwt-decode</a></li>
            <li><a href="https://www.npmjs.com/package/react-helmet">react-helmet</a></li>
            <li><a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a></li>
        </ul>
        
        <h2 id="back-end">Back-end</h2>
        
        <p>
            PlanetGame's back-end was developed with <b>vanilla PHP</b>, behaving as an API: by expecting requests and returning JSON responses.
        </p>
        
        <p>
            The routing system of this app was developed from scratch, providing a reliable and consistent communication between front and back end.
            Another interesting feature that was developed from scratch was the <b>error logging system</b> in pair with custom Exception classes.
        </p>
        
        <p>
            Lastly, an additional noteworthy point is the back-end was consistently backed by <b>unit tests</b>, to maintain a solid code quality throughout the entire development timespan.
        </p>
        
        <h3 id="technologies-back">Technologies</h3>
        
        <p>The following technologies were used to build PlanetGame back-end:</p>
        <ul>
            <li><a href="https://packagist.org/packages/mpratt/relativetime">mpratt/relativetime</a> - For converting dates to sentences like "1 year ago"</li>
            <li><a href="https://packagist.org/packages/mofodojodino/profanity-filter">mofodojodino/profanity-filter</a> - For filtering out bad words from forms</li>
            <li><a href="https://packagist.org/packages/phpunit/phpunit">phpunit/phpunit</a></li>
        </ul>
        
        <h2 id="database">Database</h2>
        
        <p>PlanetGame's database of choice was <a href="https://www.mysql.com">MySql</a>. Check out a brief description of the tables:</p>
        <ul>
            <li><strong>tb_admin:</strong> stores admins;</li>
            <li><strong>tb_game:</strong> store games. It is related to genres and publisher;</li>
            <li><strong>tb_genre:</strong> store game genres;</li>
            <li><strong>tb_publisher:</strong> stores game publishers</li>
        </ul>
        
        <h3 id="how-to-set-up">How to set up</h3>
        
        <p>If you wish to fork this project you'll need to set up the following environment variables:</p>
        
        <h4 id="client-side-">Client-side:</h4>
        <ul>
            <li>
                <strong>REACT_APP_API_URL</strong> (Server URL in order to send requests)
            </li>
            <li>
                <strong>REACT_APP_PUBLIC_URL</strong> (Front-end URL)
            </li>
        </ul>
        
        <h4 id="server-side-">Server-side:</h4>
        <ul>
            <li>
                <strong>ADMIN_SALT</strong> (Salt for managing admin's passwords)
            </li>
            <li>
                <strong>CLEARDB_DATABASE_URL</strong> (URL for database connection)
            </li>
            <li>
                <strong>CLIENT_URL</strong> (Front-end url for CORS purposes)
            </li>
            <li>
                <strong>JWT_TOKEN_KEY</strong> (JWT secret for managing tokens)
            </li>
        </ul>
        
        <h3 id="inspirations">Inspirations</h3>
        
        <p>PlanetGame was inspired by the following projects on Figma:</p>
        <ul>
            <li><a href="https://www.figma.com/community/file/871334426251486294">GWP TeamFight Tactics</a> (inspired PlanetGame color scheme)</li>
            <li><a href="https://www.figma.com/community/file/814078062940878144">LOL - 404 page for Weekly Warm-Up</a> (inspired PlanetGame UI)</li>
        </ul>
        
        <h3 id="author">Author</h3>
        
        <p>Full stack developed by <strong>Matheus do Livramento</strong>.</p>
        
        <p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a> | <a href="https://www.livramento.dev/">Website</a></p>`, "technologies": "React, HTML, CSS, JavaScript, PHP, MySQL, GitHub Projects and PHPUnit"
    },
    {
    "id": 10,
    "title": "Thunder Fox Arena",
    "launchdate": "2022-08-01T03:00:00.000Z",
    "abstract": "Thunder Fox Arena is a 1 vs 1 reimagination made in JavaScript of the original 1991 game released for Sega Mega Drive.",
    "technologies": "JavaScript, HTML, CSS and PhotoShop",
    "description": `
        <img src="/10/horizontal_banner.png" style="width: 100%"/>

        <h2 id="legal">⚠ Legal - Information to Taito</h2>
        
        <p>
            All assets, music, stages, sounds and the Thunder Fox brand belong to Taito Corporation.
        </p>
        
        <p>
            As stated on the "About" page, this game was developed as a homage to the original Thunder Fox released 
            back in 1991, for being a game that makes a important part of my life, bringing back good childhood memories.
        </p>
        
        <p>
            I developed the game under <b>Fair Use</b>, and I intend no harm to Taito Corporation. Also, I get 
            absolutely zero financial return for this project.
        </p>
        
        <ul>
            <li>I take <b>no profits</b> from Thunder Fox Arena.</li>
            <li>I <b>don't sell</b> Thunder Fox Arena.</li>
            <li>I <b>will never</b> monetize Thunder Fox Arena in any shape or form.</li>
        </ul>
        
        <h2 id="how-to-play">🎮 How to Play?</h2>
        
        <img src="/10/how_to_play_github.png" style="width: 100%"/>
        
        <h2 id="current-status">⌚ Current Status</h2>
        <p>
            In this section, I'll constantly update Thunder Fox Arena status.
        </p>
        
        <p>
            <b>Start date:</b> May, 9th 2022
            <br/>
            <b>End date:</b> August, 1st 2022
            <br/>
            <b>Hours taken:</b> ~98
            <br/>
            <b>Status:</b> Complete
        </p>
        
        <h2 id="about-the-project">💻 About the project</h2>
        
        <p>
            <b>Thunder Fox Arena</b> is a 1 vs 1 reimagination made in JavaScript of the original 1991 game released 
            for Sega Mega Drive.
        </p>
        
        <p>
            As a developer, I constantly build stuff in my free time in order to improve my skills, but, even after 
            more than five years of experience with programming, I never took the time to build a game as I always stuck with "traditional" softwares.
        </p>
        <p>
            I'm a big time gamer, starting my career on my early ages, so, the process to decide which game I was 
            going to build was rather simple: recreate a 1 vs 1 version of the first game that I played, when I was 
            4 or 5 years old. Thunder Fox really has its own place in my heart.
        </p>
        <p>
            Another factor that inspired me to make this game, was a <a target="_blank" 
            href="https://www.youtube.com/watch?v=vyqbNFMDRGQ">YouTube video</a> that was suggested to me about 
            JavaScript game development. Even though I'm an experienced developer, I was jumping into <em>unknown 
            territory</em>, since this is my first game ever developed, so, this video tutorial taught me some solutions
            that I probably wouldn't be able to come up with on my own.
        </p>
        
        <h2 id="live-demo">🔪 Play the Game</h2>
        
        <p>You can play Thunder Fox Arena by clicking the button below:</p>

        <a href="https://livramatheus.github.io/thunder-fox-arena/" style="width: fit-content; height: fit-content">
            <img src="/10/play_btn.png"/>
        </a>
        
        <h3>Screenshots:</h3>

        <div class="img-row desktop">
            <img src="/10/thumb_1.webp" height="280"/>
            <img src="/10/thumb_2.webp" height="280"/>
            <img src="/10/thumb_3.webp" height="280"/>
            <img src="/10/thumb_4.webp" height="280"/>
        </div>

        <h3 id="technologies-front">🔨 Technologies</h3>
        
        <p>
            This project was developed with <b>HTML, CSS and JavaScript</b>. Thus, a few third-party libraries used were used, such as:
        </p>
    
        <ul>
            <li>
                <a href="https://createjs.com/preloadjs" target="_black">preloadjs</a> in order to prevent broken sprites and delayed sounds.
            </li>
            <li>
                <a href="https://github.com/alvaromontoro/gamecontroller.js" target="_black">gamecontroller.js</a> in order to handle gamepads, such as wireless controllers.
            </li>
        </ul>
        
        <p>
            A crucial tool for the progress of the project was a modified version of the <b>Gens emulator</b>, which was used to individually extract all sprites from the original game. To create the Sprite Sheets, animations and image manipulations in general, <b>Adobe Photoshop</b> was used.
        </p>
        
        <h3 id="code-contributing">👨‍💻 Code/Contributing</h3>
        
        <p>
            Thunder Fox Arena is an open source project. Be free to open new issues or Merge Requests in order to improve the project.
        </p>
        
        <h3 id="author">👩‍🦲 Author</h3>
        
        <p>Developed by <strong>Matheus do Livramento</strong>.</p>
        
        <p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a> | <a href="https://www.livramento.dev/">Website</a></p>
    `
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
        let selected = projects.find(e => { return e.id === parseInt(id); })
        resolve({ data: selected });
    })
};

export { getProjects, getProject }