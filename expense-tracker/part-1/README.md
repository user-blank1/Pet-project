## Part 1 Description
In this part, you will configure frontend and backend repositories, create a library of reusable components, work with responsive design, practice client-browser interaction, work with data validation, create your first CRUD, work with a database

<!-- ## Starter Repositories
You can fork these repositories to get started. They contain basic tests. If you don't find a repository with the stack you need, create a repository yourself
  - [API](https://github.com/petproject-dev/expense-tracker-backend-part-1) - Express.js
  - [UI](https://github.com/petproject-dev/expense-tracker-frontend-part-1) - React -->

## Backend

<details>
  <summary>Task 1: Setup Environment</summary>

  ---

  **Description:**

  Prepare the development environment for the project. Create the necessary project structure, initialize the development configuration, and ensure basic tools are set up to streamline the workflow.

  **Acceptance Criteria:**

  - A development environment is initialized with appropriate configuration.
  - A basic project structure is created (e.g., with a folder for source files).
  - A script is available to start the project in development mode.
  - Upon running the project, it outputs "Hello, World!" to verify successful setup.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Use `npm init` to initialize the project.
  - Set up TypeScript with `tsconfig.json` and enable strict mode (`strict: true`).
  - Install `ts-node-dev` for hot reloading.
  - Organize the project structure with a `src/` directory and an entry point like `src/index.ts`.
  - Add a dev script in package.json to run the project using ts-node-dev.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 1 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Create all necessary files and folders yourself
  - Use this structure:
    ```
    src/
      app.ts
      index.ts
      config/
      db/
      expenses/
        dto/
        entity/
        expenses.controller.ts
        expenses.repository.ts
        expenses.service.ts
      helpers/
        Logger.ts
        Exception.ts
        dateUtils.ts
        middlewares/
          errorHandler.ts
          validator.ts
    prisma/
    tests/
    .editorconfig
    .prettierrc
    .prettierignore
    eslint.config.mjs
    jest.config.js
    ```
  - Install the minimum required dependencies (TypeScript, ts-node-dev, @types/node)
  - Enable strict mode in TypeScript
  - Set up outDir as `build` in tsconfig.json
  - Add scripts for start, dev, build, test, migrate, lint, lint:fix, format, prepare (husky) to `package.json`
  - Add `.gitignore` and exclude .env, build, node_modules, etc.
  - The file `src/index.ts` should import and run `start()` from `src/app.ts`, which should print "Server listening on port ..."
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually (e.g., npm install)

  </details>

---

</details>

<details>
  <summary>Task 2: Create a Basic REST API</summary>

  ---

  **Description:**

  Set up a basic REST API with at least one route to verify the routing and response handling functionality.

  **Acceptance Criteria:**

  - A basic route `GET /ping` is implemented.
  - The route responds with a predefined message (e.g., `{"message":"pong"}`).
  - The application uses a configurable port.
  - A file for environment variables (`.env`) is created, and sensitive data is excluded from version control.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Install and use express for routing.
  - Use `dotenv` to load environment variables and configure a port (e.g., `PORT=8080`).
  - Add `.env` to `.gitignore` and create a `.env.example` file with placeholder values.
  - Add `config/index.ts` file for configuring environment variables.
  - Set up `src/app.ts` to centralize middleware and routing.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 2 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Install and use `express` for routing
  - Use `dotenv` to load environment variables and configure a port (e.g., `PORT=8080`)
  - Implement a basic route `GET /api/ping` that responds with `{ "message": "pong" }` (route should be in `app.ts`)
  - The application must use a configurable port from environment variables (see `src/config/index.ts`)
  - Create a `.env` file for environment variables and add it to `.gitignore`
  - Create a `.env.example` file with placeholder values (PORT, DATABASE_URL)
  - Add a `config/index.ts` file for configuring environment variables
  - Set up `src/app.ts` to centralize middleware and routing
  - All routes should be connected in `app.ts`
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually (e.g., npm install)

  </details>

  <br />

  **Materials:**

  - [REST](https://restfulapi.net/)
  - [Environment variable](https://en.wikipedia.org/wiki/Environment_variable)

---

</details>

<details>
  <summary>Task 3: Implement Linting and Formatting</summary>

  ---

  **Description:**

  Set up tools to enforce consistent code quality and style across the project.

  **Acceptance Criteria:**

  - Linting is set up using a linter.
  - Formatting is handled automatically using a formatter.
  - Pre-configured commands check and fix linting and formatting issues.
  - Editor configuration ensures consistent behavior across different IDEs.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Install eslint with TypeScript support (`@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`).
  - Use `eslint-config-prettier` to integrate ESLint with Prettier.
  - Install prettier and create a .prettierrc file with formatting rules.
  - Add scripts into the `package.json`:
    - `build` – build the project
    - `lint` – check the project using eslint rules
    - `lint:fix` – check the project using eslint rules and fix errors
    - `format` – formatting project using prettier rules
    - `start` – start the project in production mode
  - Use `husky` and `lint-staged` to enforce linting/formatting on `pre-commit`.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 3 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Install and configure ESLint with TypeScript support (`@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `eslint-config-prettier`, `eslint-plugin-prettier`)
  - Create `eslint.config.mjs` for ESLint configuration
  - Install and configure Prettier, and integrate it with ESLint
  - Create a `.prettierrc` file with formatting rules and a `.prettierignore` file
  - Add scripts to `package.json`:
    - `build` – build the project
    - `lint` – check the project using eslint rules
    - `lint:fix` – check the project using eslint rules and fix errors
    - `format` – format the project using prettier rules
    - `start` – start the project in production mode
  - Set up `husky` and `lint-staged` to enforce linting/formatting on pre-commit
  - Add `.editorconfig` for consistent editor settings
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually (e.g., npm install)

  </details>

  ---

</details>

<details>
  <summary>Task 4: Set Up SQLite Database (Raw Queries)</summary>

  ---

  **Description:**

  Initialize and configure a SQLite database for storing project data. Set up a basic schema and implement raw queries to interact with the database.

  This step is added for educational purposes so that you understand what is hidden under the hood of an ORM. The following tasks will remove most of the code.

  **Acceptance Criteria:**

  - SQLite driver is installed.
  - A database connection is established, and an initial schema is created.
  - The schema includes a table for expenses.
    - id (integer, primary key)
    - name (text)
    - amount (real)
    - currency (text)
    - category (text)
    - date (datetime)
  - Basic endpoints allow adding and retrieving expense records.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Use the `better-sqlite3` package for efficient SQLite interaction.
  - Initialize the database in `src/db/db.service.ts` and ensure connection errors are handled.
  - Implement raw queries for inserting and selecting records in the `src/app.ts` file.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 4 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Install the `better-sqlite3` package for efficient SQLite interaction
  - Initialize the database in `src/db/db.service.ts` and handle connection errors
  - Create an initial schema with a table for expenses (id, name, amount, currency, category, date)
  - Implement raw queries for inserting and selecting records in `expenses.repository.ts` and use them in `expenses.service.ts`
  - Expose endpoints for adding and retrieving expense records via `expenses.controller.ts` and connect them in `app.ts`
  - Use `.env` and `.env.example` for configuration
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually (e.g., npm install)

  </details>

  ---

</details>

<details>
  <summary>Task 5: Set Up SQLite Database (ORM)</summary>

  ---

  **Description:**

  Set up an ORM for database interaction to simplify schema management and querying.

  **Acceptance Criteria:**

  - The ORM is installed and configured.
  - A schema is defined, and migrations are used to update the database.
  - Basic database operations use the ORM.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Use prisma for ORM and schema management.
  - Initialize Prisma with `npx prisma init` and configure the database URL in `.env`.
  - Define the expenses model in `prisma/schema.prisma`.
  - Use npx prisma migrate dev to apply schema changes.
  - Generate the Prisma client and use it in the exist endpoints.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 5 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Install and configure Prisma as ORM
  - Initialize Prisma with `npx prisma init` and configure the database URL in `.env` and `.env.example`
  - Define the expenses model in `prisma/schema.prisma` as in the example project
  - Use `npx prisma migrate dev` to apply schema changes
  - Generate the Prisma client and use it in `expenses.repository.ts` and `expenses.service.ts`
  - Expose endpoints via `expenses.controller.ts` and connect them in `app.ts`
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually (e.g., npm install, prisma migrate)

  </details>

  ---

</details>

<details>
  <summary>Task 6: Create Route for Adding Expenses</summary>

  ---

  **Description:**

  Set up routes for basic Create operation on the expenses table.

  **Acceptance Criteria:**

  - Route for adding expenses are implemented:
    - `POST /api/expenses` Creates new expense record.
  - Data is validated to ensure correctness before saving to the database.
  - A modular structure is established for `controllers`, `services`, `repositories`, and `entities`.
  - Middleware for error handling and validation is implemented.
  - The application structure matches the defined project layout.
  - Processing 404 status code defined.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Use express to define routes and middleware.
  - Place the business logic for expenses in `expenses.service.ts`.
  - Implement database interaction methods in `expenses.repository.ts`.
  - Use a DTO (Data Transfer Object) in `expenses/dto` to define the shape of - request payloads.
  - Create an `expenses.entity.ts` file to define the database model or schema.
  - Use middleware (`helpers/middlewares/validator.ts`) to validate incoming - requests.
  - Implement centralized error handling in `helpers/middlewares/errorHandler.ts`
  - Code structure is following:
```
    │   app.ts
    │   index.ts
    ├───config
    │       index.ts
    ├───db
    │       db.service.ts
    ├───expenses
    │   │   expenses.controller.ts
    │   │   expenses.repository.ts
    │   │   expenses.service.ts
    │   ├───dto
    │   │       create-expense.dto.ts
    │   └───entity
    │           expense.entity.ts
    └───helpers
        │   Exception.ts
        └───middlewares
                errorHandler.ts
                validator.ts
```
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 6 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Use Express to define routes and middleware
  - Implement the business logic for expenses in `expenses.service.ts`
  - Implement database interaction methods in `expenses.repository.ts`
  - Use DTOs in `expenses/dto` to define the shape of request payloads
  - Create an `expenses.entity.ts` file to define the database model or schema
  - Use middleware (`helpers/middlewares/validator.ts`) to validate incoming requests
  - Implement centralized error handling in `helpers/middlewares/errorHandler.ts`
  - Ensure the application structure matches the defined project layout
  - Implement a route `POST /api/expenses` to create a new expense record, and connect all routes through `expenses.controller.ts` in `app.ts`
  - Handle 404 status code in `app.ts`
  - Use winston for logging in `helpers/Logger.ts`
  - Add at least one Jest test in `tests/`
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 7: Create Endpoint for getting list of expenses</summary>

  ---

  **Description:**

  Set up route for retrieving expenses from the database. Include operations for fetching all expenses (with optional pagination and filtering).

  **Acceptance Criteria:**

  - Route for retrieving expenses are implemented:
    - `GET /api/expenses` Fetches and returns all expenses with optional query parameters:
      - Pagination: `limit` and `offset`.
      - Filtering: `fromDate` and `toDate` based on the date field.
  - Response include appropriate HTTP status codes and data.
  - Modular structure follows the established pattern.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Prepare all the necessary data in the `expenses.controller.ts`.
  - Implement business logic for fetching expenses in `expenses.service.ts`.
  - Handle database queries in `expenses.repository.ts`.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 7 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Implement a route `GET /api/expenses` in `expenses.controller.ts` to fetch and return all expenses with optional query parameters:
    - Pagination: `limit` and `offset`
    - Filtering: `fromDate` and `toDate` based on the date field
  - Prepare all the necessary data in `expenses.controller.ts`
  - Implement business logic for fetching expenses in `expenses.service.ts`
  - Handle database queries in `expenses.repository.ts`
  - Ensure the response includes appropriate HTTP status codes and data
  - Follow the established modular structure
  - Connect the route in `app.ts`
  - Add at least one Jest test in `tests/`
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  **Materials:**

  - [A guide to REST API pagination](https://www.merge.dev/blog/rest-api-pagination)

---

</details>

<details>
  <summary>Task 8: Create endpoint for getting expense by id</summary>

  ---

  **Description:**

  Set up route for retrieving expense from the database. Include operation for fetching a specific expense by ID.

  **Acceptance Criteria:**

  - Routes for retrieving expenses are implemented:
    - `GET /api/expenses/:id` Fetches a specific expense by its ID.
  - Responses include appropriate HTTP status codes and data.
  - Modular structure follows the established pattern.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Prepare all the necessary data in the `expenses.controller.ts`.
  - Implement business logic for fetching expenses in `expenses.service.ts`.
  - Handle database queries in `expenses.repository.ts`.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 8 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Implement a route `GET /api/expenses/:id` in `expenses.controller.ts` to fetch a specific expense by its ID
  - Prepare all the necessary data in `expenses.controller.ts`
  - Implement business logic for fetching expenses in `expenses.service.ts`
  - Handle database queries in `expenses.repository.ts`
  - Ensure the response includes appropriate HTTP status codes and data
  - Follow the established modular structure
  - Connect the route in `app.ts`
  - Add at least one Jest test in `tests/`
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 9: Create Routes for Updating and Deleting Expenses</summary>

  ---

  **Description:**

  Set up route for updating expense records in the database. Ensure that only specified fields are updated during PATCH operations.

  **Acceptance Criteria:**

  - Route for updating expense are implemented:
      - `PATCH /api/expenses/:id` Updates specific fields of an expense.
  - Data is validated to ensure correctness before processing requests.
  - Responses include appropriate HTTP status codes and data.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Prepare all the necessary data in the `expenses.controller.ts`.
  - Implement business logic for fetching expenses in `expenses.service.ts`.
  - Handle database queries in `expenses.repository.ts`.
  - Use DTOs in `expenses/dto` to validate request payloads and parameters.
  - Use middleware (`helpers/middlewares/validator.ts`) for data validation.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 9 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Implement a route `PATCH /api/expenses/:id` in `expenses.controller.ts` to update specific fields of an expense
  - Validate data before processing requests using DTOs in `expenses/dto` and middleware (`helpers/middlewares/validator.ts`)
  - Prepare all the necessary data in `expenses.controller.ts`
  - Implement business logic for updating expenses in `expenses.service.ts`
  - Handle database queries in `expenses.repository.ts`
  - Ensure the response includes appropriate HTTP status codes and data
  - Connect the route in `app.ts`
  - Add at least one Jest test in `tests/`
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 10: Create Route for Deleting Expenses</summary>

  ---

  **Description:**

  Set up route for deleting expense records in the database

  **Acceptance Criteria:**

  - Route for deleting expenses are implemented:
      - `DELETE /api/expenses/:id` Deletes an expense by its ID.
  - Response include appropriate HTTP status code.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Prepare all the necessary data in the `expenses.controller.ts`.
  - Implement business logic for fetching expenses in `expenses.service.ts`.
  - Handle database queries in `expenses.repository.ts`.
  </details>

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 10 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Implement a route `DELETE /api/expenses/:id` in `expenses.controller.ts` to delete an expense by its ID
  - Prepare all the necessary data in `expenses.controller.ts`
  - Implement business logic for deleting expenses in `expenses.service.ts`
  - Handle database queries in `expenses.repository.ts`
  - Ensure the response includes appropriate HTTP status code
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 11: Implement Basic Logging</summary>

  ---

  **Description:**

  Add logging functionality to track significant events (e.g., expense creation, updates, and errors). Ensure logs are accessible in both development and production environments.

  **Acceptance Criteria:**

  - Logs are added for key actions:
    - Successful expense creation, updates, and deletions.
    - Errors during request handling.
  - Logs are displayed in the console during development.
  - Logs are written to a file in production.

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Use a logging library like winston or pino.
  - Place logging configuration in helpers/Logger.ts.
  - Code structure is following:
```
  │   app.ts
  │   index.ts
  ├───config
  │       index.ts
  ├───db
  │       db.service.ts
  ├───expenses
  │   │   expenses.controller.ts
  │   │   expenses.repository.ts
  │   │   expenses.service.ts
  │   ├───dto
  │   │       create-expense.dto.ts
  │   │       update-expense.dto.ts
  │   └───entity
  │           expense.entity.ts
  └───helpers
      |    dateUtils.ts
      │   Exception.ts
      │   Logger.ts
      └───middlewares
              errorHandler.ts
              validator.ts
```
  </details>

  <br />

  **Materials:**

  - [REST API Logging](https://romanglushach.medium.com/java-rest-api-logging-best-practices-and-guidelines-bf5982ee4180)

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 11 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Use a logging library like `winston` in `helpers/Logger.ts`
  - Place error classes in `helpers/Exception.ts`
  - Add logs for key actions:
    - Successful expense creation, updates, and deletions
    - Errors during request handling
  - Logs should be displayed in the console during development and written to a file in production
  - Ensure the code structure matches the provided example
  - Add at least one Jest test in `tests/`
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 12: Final step</summary>

  ---

  <details>
  <summary>AI Prompt (NodeJS)</summary>

  Perform Backend Task 12 from the README file `expense-tracker/part-1/README.md`:
  - Open a pull request for the `master` branch and send the solution to the code review
  - Ensure that all previous tasks are completed and at least one Jest test exists in `tests/`
  - After completion, provide a short report on what was done

  </details>

  ---

</details>

## Frontend

<details>
  <summary>Task 1: Setup Development Environment</summary>

  ---

  **Description:**

  Prepare the development environment for the project. Initialize the necessary configurations for a smooth development process, including TypeScript setup and project structure organization.

  **Acceptance Criteria:**

  - A development environment is initialized with appropriate configuration.
  - TypeScript is installed and properly configured (`tsconfig.json` is set up).
  - Project structure is organized (e.g., `src/` for source files).
  - Running a development command starts the project in dev mode.
  - Configure TypeScript paths for cleaner imports.

  **Technology-related requirements:**

  <details>
  <summary>React</summary>

  - Use [Vite](https://vite.dev/guide/) for initialization.
  </details>

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 1 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Initialize the project using Vite with React and TypeScript template
  - Set up the following structure:
    ```
    src/
      components/
      pages/
      hooks/
      utils/
      assets/
      App.tsx
      main.tsx
    public/
    .editorconfig
    .prettierrc
    .prettierignore
    eslint.config.mjs
    stylelint.config.js
    tsconfig.json
    ```
  - Install and configure TypeScript, set up `tsconfig.json` with strict mode and path aliases for cleaner imports
  - Add scripts to `package.json` for dev, build, preview, lint, lint:fix, stylelint, stylelint:fix, format
  - Add `.gitignore` and exclude node_modules, dist, .env, etc.
  - Ensure the project runs in development mode with a single command
  - After completion, provide a short report on what was done and what needs to be done manually (e.g., npm install)

  </details>

  ---

</details>

<details>
  <summary>Task 2: Implement Linting and Formatting</summary>

---

  **Description:**

  Set up linting and formatting to maintain consistent code quality across the project. Configure ESLint, Prettier, and Stylelint, along with EditorConfig to ensure consistency.

  **Acceptance Criteria:**

  - ESLint is installed and configured.
  - Prettier is installed and integrated with ESLint.
  - Stylelint is installed for CSS linting.
  - EditorConfig is set up with rules for indentation, line endings, etc.
  - Scripts added:
      - `lint` - Checks the project for linting issues.
      - `lint:fix` - Fixes linting issues.
      - `stylelint` - Checks the project for css linting issues.
      - `stylelint:fix` - Fixes css linting issues.
      - `format` - Formats code based on Prettier rules.

  **Technology-related requirements:**

  <details>
  <summary>React</summary>

  - Use plugins such as `eslint-plugin-react` for React-specific linting.
  - Configure `stylelint-config-standard` for CSS linting.

  </details>

  <br/>

  **Materials:**

  <details>
  <summary>React</summary>

  - [Supercharge Your React Development with Vite, ESLint, and Prettier in VSCode](https://dev.to/topeogunleye/building-a-modern-react-app-with-vite-eslint-and-prettier-in-vscode-13fj)
  - [Using ESLint + Husky + Lint-staged](https://medium.com/@bkn020612/using-eslint-husky-lint-staged-6d6609b02fc2)

  </details>

---

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 2 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Use the structure from Task 1
  - Install and configure ESLint with TypeScript and React support (`@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `eslint-plugin-react`, `eslint-config-prettier`, `eslint-plugin-prettier`)
  - Install and configure Prettier, integrate it with ESLint
  - Install and configure Stylelint with `stylelint-config-standard` for CSS linting
  - Create `.prettierrc`, `.prettierignore`, `.editorconfig`, `eslint.config.mjs`, and `stylelint.config.js`
  - Add scripts to `package.json`:
    - `lint` – check the project using eslint rules
    - `lint:fix` – fix eslint errors
    - `stylelint` – check CSS linting
    - `stylelint:fix` – fix CSS linting errors
    - `format` – format code using Prettier
  - Set up Husky and lint-staged to enforce linting/formatting on pre-commit
  - Do not skip any Acceptance Criteria from the README
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

---

</details>

<details>
  <summary>Task 3: Create Logo component</summary>

---

  **Description:**
  Develop foundational reusable component that can be utilized across the application.

  **Acceptance Criteria:**
  - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19420&m=dev&t=GKFeiEqjFghP7rf5-4)

  **Technology-related requirements:**
  <details>
  <summary>React</summary>

  ```jsx
  <Logo />
  ```
  </details>

  <br />

  **Materials:**

  - [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

  <details>
  <summary>React</summary>

  - [Your First Component](https://react.dev/learn/your-first-component)
  - [Building Reusable UI Components](https://medium.com/cstech/building-reusable-ui-components-with-react-best-practices-and-patterns-24b6fe921347)
  </details>
---

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 3 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Create a reusable `Logo` component in `src/components/Logo/Logo.tsx`
  - Follow best practices for component structure: include `Logo.module.css` (or .scss), `index.ts`, and a Storybook story if Storybook is used
  - The component should be accessible, semantic, and match the Figma design
  - Export the component from `src/components/Logo/index.ts`
  - Add a test file (e.g., `Logo.test.tsx`) for basic rendering
  - Document usage with a JSDoc comment and/or Storybook
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

---

</details>

<details>
  <summary>Task 4: Create Loader component</summary>

---

  **Description:**
  Develop foundational reusable component that can be utilized across the application.

  **Acceptance Criteria:**
  - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=1-3471&m=dev&t=AyMjf1BcxpIwHBXC-4)

  **Technology-related requirements:**
  <details>
  <summary>React</summary>

  ```jsx
  <Loader />
  ```  </details>

  <br />

  **Materials:**

  - [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

  <details>
  <summary>React</summary>

  - [Your First Component](https://react.dev/learn/your-first-component)
  - [Building Reusable UI Components](https://medium.com/cstech/building-reusable-ui-components-with-react-best-practices-and-patterns-24b6fe921347)
  </details>
---

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 4 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Create a reusable `Loader` component in `src/components/Loader/Loader.tsx`
  - Follow best practices for structure: include styles, `index.ts`, and a Storybook story if Storybook is used
  - The component should be accessible, semantic, and match the Figma design
  - Export the component from `src/components/Loader/index.ts`
  - Add a test file for basic rendering
  - Document usage with a JSDoc comment and/or Storybook
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

---

</details>

<details>
  <summary>Task 5: Create Button component</summary>

  ---

  **Description:**
  Develop foundational reusable component that can be utilized across the application. A standard button with support for different states(e.g., disabled, active).

  **Acceptance Criteria:**
  - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19193&m=dev&t=GKFeiEqjFghP7rf5-4)

  **Technology-related requirements:**
  <details>
  <summary>React</summary>

  ```jsx
  <Button disabled onClick={handleClick}>Click me</Button>
  ```
  </details>

  <br />

  **Materials:**

  - [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

  <details>
  <summary>React</summary>

  - [Your First Component](https://react.dev/learn/your-first-component)
  - [Building Reusable UI Components](https://medium.com/cstech/building-reusable-ui-components-with-react-best-practices-and-patterns-24b6fe921347)
  </details>

  ---

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 5 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Create a reusable `Button` component in `src/components/Button/Button.tsx`
  - Support props for `disabled`, `onClick`, and children, and any other relevant states (active, loading, etc.)
  - Follow best practices for structure: include styles, `index.ts`, and a Storybook story if Storybook is used
  - Ensure accessibility (e.g., correct ARIA attributes)
  - Export the component from `src/components/Button/index.ts`
  - Add a test file for basic rendering and interaction
  - Document usage with a JSDoc comment and/or Storybook
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 6: Create Input Label component</summary>

  ---

  **Description:**
  Develop foundational reusable component that can be utilized across the application. The label appears above many of our components. This should be a stylized label html tag with all the standard label features.

  **Acceptance Criteria:**
  - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19389&m=dev&t=GTL1yhChXxd9Efzr-4)

  **Technology-related requirements:**
  <details>
  <summary>React</summary>

  - Example:

  ```jsx
  <>
    <InputLabel>Name</InputLabel>

    <InputLabel htmlFor="name1">Name</InputLabel>
  </>
  ```
  </details>

  <br />

  **Materials:**

  - [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

  <details>
  <summary>React</summary>

  - [Your First Component](https://react.dev/learn/your-first-component)
  - [Building Reusable UI Components](https://medium.com/cstech/building-reusable-ui-components-with-react-best-practices-and-patterns-24b6fe921347)
  </details>

  ---

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 6 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Create a reusable `InputLabel` component in `src/components/InputLabel/InputLabel.tsx`
  - Support standard label features, including `htmlFor` prop
  - Follow best practices for structure: include styles, `index.ts`, and a Storybook story if Storybook is used
  - Ensure accessibility and semantic HTML
  - Export the component from `src/components/InputLabel/index.ts`
  - Add a test file for basic rendering
  - Document usage with a JSDoc comment and/or Storybook
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 7: Create Input component</summary>

  ---

  **Description:**
  Develop foundational reusable component that can be utilized across the application. A text input field with validation and style support.

  **Acceptance Criteria:**
  - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19412&m=dev&t=ra9tjWdp5aVmkqRH-4)

  **Technology-related requirements:**
  <details>
  <summary>React</summary>

  ```jsx
  <>
    <Input />
    <Input helperText="Error message" />
    <Input
      type="text"
      placeholder="Enter name"
      defaultValue={name}
      error
      helperText="Error message"
      onChange={handleChange} />
  </>
  ```
  </details>

  <br />

  **Materials:**

  - [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

  <details>
  <summary>React</summary>

  - [Your First Component](https://react.dev/learn/your-first-component)
  - [Building Reusable UI Components](https://medium.com/cstech/building-reusable-ui-components-with-react-best-practices-and-patterns-24b6fe921347)
  </details>

  ---

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 7 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Create a reusable `Input` component in `src/components/Input/Input.tsx`
  - Support props for `type`, `placeholder`, `defaultValue`, `error`, `helperText`, `onChange`, etc.
  - Follow best practices for structure: include styles, `index.ts`, and a Storybook story if Storybook is used
  - Ensure accessibility and semantic HTML
  - Export the component from `src/components/Input/index.ts`
  - Add a test file for basic rendering and validation
  - Document usage with a JSDoc comment and/or Storybook
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 8: Create Icon component</summary>

  ---

  **Description:**
  Develop foundational reusable component that can be utilized across the application. A component for rendering SVG icons.

  **Acceptance Criteria:**
  - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=7-5669&m=dev&t=ra9tjWdp5aVmkqRH-4)

  **Technology-related requirements:**
  <details>
  <summary>React</summary>

  - Create an `Icon` component for rendering SVG icons, with a name prop for specifying the icon and size for scaling.

  ```jsx
  <>
    <Icon iconName="plus" size={15} color="white" />
    <Icon iconName="plus" />
  </>
  ```
  </details>

  <br />

  **Materials:**

  - [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

  <details>
  <summary>React</summary>

  - [Your First Component](https://react.dev/learn/your-first-component)
  - [Building Reusable UI Components](https://medium.com/cstech/building-reusable-ui-components-with-react-best-practices-and-patterns-24b6fe921347)
  </details>

  ---

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 8 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Create a reusable `Icon` component in `src/components/Icon/Icon.tsx`
  - Support props for `iconName`, `size`, `color`, etc.
  - Use SVGs for icons, and organize them in `src/assets/icons/` or similar
  - Follow best practices for structure: include styles, `index.ts`, and a Storybook story if Storybook is used
  - Ensure accessibility (e.g., `aria-label`)
  - Export the component from `src/components/Icon/index.ts`
  - Add a test file for basic rendering
  - Document usage with a JSDoc comment and/or Storybook
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

<details>
  <summary>Task 9: Create Date Picker component</summary>

  ---

  **Description:**
  Develop foundational reusable component that can be utilized across the application. A component for selecting date. This component is complex and its styles does not necessarily match the design. You can use standard `<input type="date" />`

  **Acceptance Criteria:**
  - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=71-5906&m=dev&t=AyMjf1BcxpIwHBXC-4)

  **Technology-related requirements:**
  <details>
  <summary>React</summary>

  - Implement a `DatePicker` component for selecting the date, with support for a value prop and onChange callback.
  ```jsx
  <DatePicker
    value={selectedDate}
    onChange={handleDateChange} />
  <DatePicker />
  ```
  </details>

  <details>
  <summary>AI Prompt (React)</summary>

  Perform Frontend Task 9 from the README file `expense-tracker/part-1/README.md`:
  - Work in the `<project-name>` folder
  - Create a reusable `DatePicker` component in `src/components/DatePicker/DatePicker.tsx`
  - Support props for `value`, `onChange`, and any other relevant props
  - Use a standard `<input type="date" />` for simplicity, but style it to match the design as much as possible
  - Follow best practices for structure: include styles, `index.ts`, and a Storybook story if Storybook is used
  - Ensure accessibility and semantic HTML
  - Export the component from `src/components/DatePicker/index.ts`
  - Add a test file for basic rendering and interaction
  - Document usage with a JSDoc comment and/or Storybook
  - After completion, provide a short report on what was done and what needs to be done manually

  </details>

  ---

</details>

</rewritten_file>