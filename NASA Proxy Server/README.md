# NASA Proxy Server

In this project, you will learn how to create a fully functional proxy server. You will begin by building a basic server that prints "Hello World!" and gradually extend its capabilities to fetch data from external APIs, such as NASA's, and process it for client consumption.
You'll also learn how to handle environment variables, add business logic, validate incoming requests, and integrate logging and testing practices. By the end of this project, you’ll have implemented a complete proxy server with clean architecture.

By completing this project, students will learn:
- How to build a proxy server from scratch.
- Making server-to-server API requests.
- Handling environment variables and configuration.
- Data validation.
- Structuring projects using Clean Architecture (Controller, Service, Repository).
- Handling different HTTP request methods (GET, POST).

## Backend

<details>
  <summary>Task 1: Print "Hello World!"</summary>

  ---

  **Description:**

  Let's start our experience in new area with small funny tradition. It should be easy.
  
  **Acceptance Criteria:**

  - "Hello World!" is printed in console by running application.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Create index.js file created.
  </details>

---

</details>

<details>
  <summary>Task 2: Make first server to server API request</summary>

  ---

  **Description:**

  At this stage, we will try to get data from a third-party API. Based on the example of the NASA API it is necessary to get an answer from NASA about how many asteroids were seen from Monday to Friday and bring it to the console.
  
  **Acceptance Criteria:**

  - NASA API token is created by [sign up](https://api.nasa.gov/index.html).
  - NASA API endpoint is called and response is received `GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY`.
  - Response in JSON format is printed to the console.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - package.json file is initialized.
  - `start` script added to `package.json`.
  - `axios` installed.
  - If error "Error: unable to get local issuer certificate" occurs, install the cross-env package and extend the application start command with an additional environment variable:
    - ```"start": "cross-env NODE_TLS_REJECT_UNAUTHORIZED=0 node index.js"```

  </details>

  **Materials:**
  - [Axios vs. Fetch API: Selecting the Right Tool for HTTP Requests](https://medium.com/%40johnnyJK/axios-vs-fetch-api-selecting-the-right-tool-for-http-requests-ecb14e39e285#:~:text=Axios%20will%20automatically%20transforms%20the%2cbe%20stored%20in%20any%20variable.)

---

</details>

<details>
  <summary>Task 3: Add environment variables</summary>

  ---

  **Description:**

  Application runs with hardcoded token and API link and this is great, but in real projects we try to make such variables dynamic and store them in a separate env file in order to avoid additional code changes during work with different environments.
  
  **Acceptance Criteria:**

  - Add .env for environment variables.
  - `.env` file added to `.gitignore`.
  - `.env.example` created with save key but with no values.
  - The hardcoded `NASA_URL` and `NASA_API_KEY` values ​​are used from environment variables

  **Materials:**

  <details>
  <summary>NodeJS</summary>
  
  - [How to read environment variables from Node.js](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
  
  </details>

---

</details>

<details>
  <summary>Task 4: Connect framework</summary>

  ---

  **Description:**

  Before this step, we did not install any additional tools. In this task you need to select a framework and prepare it for further work.
  
  **Acceptance Criteria:**

  - The framework is installed and the application runs on port 4000.
  - After starting the server, a message is displayed in the console that the server is running and on what port.
  - The code written earlier still works.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>
  
  - `Express.js` is used
  
  </details>

---

</details>

<details>
  <summary>Task 5: Create a first endpoint</summary>

  ---

  **Description:**

  Create a first api endpoint and send json response from NASA API request as a own server response.
  
  **Acceptance Criteria:**

  - Added `/meteor` endpoint.
  - The request code from the second task has been moved to the endpoint.
  - Endpoint returns response from NASA api.

---

</details>

<details>
  <summary>Task 6: Explore the Postman tool</summary>

  ---

  **Description:**

  During development, it would be great to make requests to different APIs, changing different query parameters and not writing additional lines of code for this. There are several options for solving this problem, but the most common solution is to use Postman.
  Deal with this tool, make requests via postman to the NASA API and make a request to the proxy server we have already written.
  
  **Acceptance Criteria:**

  - Postman installed.
  - `/meteor` enpoint tested in postman and responce received.

---

</details>

<details>
  <summary>Task 7: Update `/meteor` endpoint</summary>

  ---

  **Description:**

  Often, when a client wants to get data from third-party sources, he does not need all the information in its entirety, so on the side of our server we refactor the information received from a third-party source, filter it, removing unnecessary or perform computational operations with the received data, and after all the business logic, we form a convenient object for use on the client with data and return it.
  
  **Acceptance Criteria:**

  - On `/meteors`, an object containing only the following items should be returned:
    - `id` of the meteorite
    - `name`
    - `diameter_meters`
    - `is_potentially_hazardous_asteroid`
    - `close_approach_date_full`
    - `relative_velocity_kps`

  **Example:**
  ```json
    [{
      "id": "54491553",
      "name": "(2024 TC15)",
      "diameter_meters": 25.7418632455,
      "is_potentially_hazardous_asteroid": false,
      "close_approach_date_full": "2024-Oct-17 20:48",
      "relative_velocity_kps": "9.2338731143"
    }]
  ```

---

</details>

<details>
  <summary>Task 8: Refactoring</summary>

  ---

  **Description:**

  During the development process, our code will grow and take up more and more lines, and in half a year we will no longer be able to work quickly and efficiently with it, especially if we take a break from development on this project and we need to go back to change or add something to it.
  Therefore, we will follow the rules of CleanCode, where each code file has its place in the architecture of the entire application. These rules of good manners will improve the readability of the code, and, accordingly, the speed of working on it.
  It is necessary to understand that several people can work on the project at the same time, so a single style of code management will help in the development of the product, because if someone makes a change to the project, there will be a feeling that you made it yourself.
  We've divided the app into three layers - `controllers`/`services`/`repositories`
  **Controllers** contains only a specific implementation of a protocol. For example, there are protocols: HTTP and WS. Both protocols can trigger the same set of actions, i.e. services. Most often, this is a simple function that takes parameters, regroups and validates them, and passes them to service.
  **Services** - usage scenarios. This is where all the business logic of the application is stored. Business logic or scripts allow us to use everything in the application and build scripts linearly.
  **Repositories** are wrappers over libraries that work with repositories. Such shells are written so that in the future it is possible to easily change one library to another. That is, they help us to reuse queries to the database and entities everywhere in the form of a single function.
  
  **Acceptance Criteria:**

  - The application is divided into layers.
  - Logic is divided between layers.
  - Added custom error handler. If your framework supports the ability to throw exceptions with different status codes, then you can ignore this.
  - A single error handler catches all exceptions and treats them equally.
  - When accessing a non-existent endpoint, a 404 status code and the message “Page not found” are returned.

  **Example:**
  ```
  +---app
   +---config
     config.js
   +---controllers
     meteor.controller.js
   +---repositories
     meteor.repository.js
   +---services
     meteor.service.js
   +---utils
     errorHandler.js
     exception.js
  +---postman
   postman_collection.json
         
  .env
  .env.example
  .gitignore
  index.js
  package-lock.json
  package.json
  README.md
  ```

  **Materials:**

  <details>
  <summary>NodeJS</summary>
  
  - [Simplified Guide to Setting Up a Global Error Handler in Express.js](https://medium.com/@mohsinansari.dev/simplified-guide-to-setting-up-a-global-error-handler-in-express-js-daf8dd640b69)
  
  </details>

---

</details>

<details>
  <summary>Task 9: Add `/meteor` query parameters</summary>

  ---

  **Description:**

  In this task, we need to extend the capabilities of the existing endpoint `/meteors`.
  We will pass query parameters in the query to control the logic on the server.
  **Query params:**
    - `date` helps to set the period during which we are interested in information on meteorites
    - `count` returns only the number of meteorites that have been seen.
    were-dangerous-meteors returns true or false whether they have been seen among meteorites potentially dangerous to Earth.
  Each of the parameters is optional, but if present, the data from the NASA API should match the given date. Date range like date=[2024-10-10,2024-10-12] is allowed
  
  **Acceptance Criteria:**

  - `date`, `count` and `were-dangerous-meteors` added as a parameter to the query
  - The parameters work independently of each other and are optional. A default value has been added for each of them

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>
  
  - `date-fns` is used
  
  </details>
  
  **Example:**
  ```
    /meteors

    /meteors?date=2024-10-09&count=true&wereDangerousMeteors=true
    
    /meteors?date[]=2024-10-10&date[]=2024-10-12&count=true&wereDangerousMeteors=true
  ```

---

</details>

<details>
  <summary>Task 10: Add templated response in parallel with API endpoint</summary>

  ---

  **Description:**
  In this task we will try to further visualize the existing data and add a separate endpoint for this.
  
  **Acceptance Criteria:**

  - The new endpoint returns existing data from the controller.
  - Template engine is used.
  - Query parameters supported.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>
  
  - `nunjacks` is used
  
  </details>

---

</details>

<details>
  <summary>Task 11:  Implement POST endpoint</summary>

  ---

  **Description:**
  There is not only a GET request, but there are also the following types: GET, POST, PUT, PATCH, DELETE and others.
  We will look at the most used ones. Let's add a POST request in which we will pass the request body, in which we will place user `NASA_API_KEY`
  In response, the user should receive a picture from the rover.
  
  **Acceptance Criteria:**

  - New post request added.
  - When requesting a new endpoint, the most recent photo from the rover is returned.

---

</details>

<details>
  <summary>Task 12:  Add validation</summary>

  ---

  **Description:**
  It's good if we always receive a request on our server in the same form and we know how to process it, but what if an empty or incomplete request comes to us, and we cannot make a request to a third-party source and form a decent response to the user, or due to the incompleteness of the request, our business logic breaks down.
  To do this, we can use validation to exclude such cases, and then meaningful errors will come to the client's side, indicating what we need in order to fulfill their request.
  
  **Acceptance Criteria:**

  - Data validation library added.
  - Added data validation scheme for POST requests.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>
  
  - `joi` or `yup` is used
  
  </details>
---

</details>

<details>
  <summary>Task 13:  Add template engine</summary>

  ---

  **Description:**
  In this project we are not working with JS frameworks, but let's still add a little user interactivity for our data.
   
  **Acceptance Criteria:**

  - GET request returns HTML code with form.
  - POST request returns HTML code with photo.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>
  
  - `nunjucks` is used
  
  </details>
---

</details>

<details>
  <summary>Task 14:  Setting up code quality tools</summary>

  ---

  **Description:**
  In this project we are not working with JS frameworks, but let's still add a little user interactivity for our data.
   
  **Acceptance Criteria:**

  - Added code quality checking tools.
  - Based on the established rules, a check was launched and all comments were corrected.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Type script is added and configured
  - Implement `build` and `start` scripts with TS support
  - All files are refactored to TS
  - Types and models are covered with types
  - Using the recommended article, install and configure eslint, prettier and husky
  - Integration with Development Tools: ESLint is integrated with the project’s development tools, such as:
    - Pre-commit hooks that run ESLint checks before allowing commits.
    - Integration with the project’s IDEs/editors to highlight linting errors and warnings in real-time.
    - Integration with the project’s continuous integration (CI) pipeline to run linting checks on push or pull requests.
  
  </details>

  **Materials:**

  <details>
  <summary>NodeJS</summary>
  
  - [Enforcing code style with eslint, prettier, and husky](https://apps-on-azure.net/typescript/2024/2024-07-22-eslint-husky-prettier.html)
  - [Adding Typescript to your Node.js project](https://medium.com/geekculture/adding-typescript-to-your-node-js-project-fe4ba08369c8)
  
  </details>
---

</details>

<details>
  <summary>Task 15: Add logging</summary>

  ---

  **Description:**
  There are several reasons for logging events occurring on the server. For example, logging incoming requests allows you to get statistics about how often users encounter a 404 error, what could be the reason for it, or which UserAgent client application is used. You can also find out the time of occurrence of the error and its cause.
  This can be achieved by accessing different parts of the process and writing a few lines of JavaScript code.
   
  **Acceptance Criteria:**

  - Logging added.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - In addition to the main logger, we suggest additionally adding Sentry
  
  </details>
---

</details>

<details>
  <summary>Task 15: Add unit tests</summary>

  ---

  **Description:**
  To increase the stability of the application and reduce the time spent on manual testing, you need to add tests.
  
   
  **Acceptance Criteria:**

  - Testing tools are configured.
  - Unit tests have been added for the controller layer and services layer.
  - Coverage 70%.

---

</details>

<details>
  <summary>Task 15: Caching</summary>

  ---

  **Description:**
  Network requests are one of the bottlenecks in application speed. This step suggests caching some data.
  
   
  **Acceptance Criteria:**

  - `docker-compose` with radis configuration is added.
  - Radis configured.
  - The get request caches the data and, when requested again, returns the data from the cache without returning to the NASA Api.
  - The cache is reset every 15 minutes.

---

</details>

## Solution
If you've already finished working on this part or are stuck, these repositories might be useful to you.
  - [API](https://github.com/petproject-dev/nasa_proxy_server) - Express.js

## Found an Issue?
We strive to make the project as clear and helpful as possible. If you notice any errors, inconsistencies, or unclear instructions, please open a Pull Request in this repository with your suggested fixes or improvements. Your feedback helps improve the learning experience for everyone!
