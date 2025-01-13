## Part 1 Description
In this part, you will configure frontend and backend repositories, create a library of reusable components, work with responsive design, practice client-browser interaction, work with data validation, create your first CRUD, work with a database

## Starter Repositories
You can fork these repositories to get started. They contain basic tests. If you don't find a repository with the stack you need, create a repository yourself
  - [API](https://github.com/petproject-dev/expense-tracker-backend-part-1) - Express.js
  - [UI](https://github.com/petproject-dev/expense-tracker-frontend-part-1) - React

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


---

</details>

<details>
  <summary>Task 7: Create Endpoints for Getting Expenses</summary>
  
  ---

  **Description:**

  Set up routes for retrieving expenses from the database. Include operations for fetching all expenses (with optional pagination and filtering) and fetching a specific expense by ID. 

  **Acceptance Criteria:**

  - Routes for retrieving expenses are implemented: 
    - `GET /api/expenses` Fetches and returns all expenses with optional query parameters: 
      - Pagination: `limit` and `offset`. 
      - Filtering: `fromDate` and `toDate` based on the date field. 
    - `GET /api/expenses/:id` Fetches a specific expense by its ID. 
  - Data is validated to ensure correctness before processing requests. 
  - Responses include appropriate HTTP status codes and data. 
  - Modular structure follows the established pattern. 

  **Technology-related requirements:**

  <details>
  <summary>NodeJS</summary>

  - Prepare all the necessary data in the `expenses.controller.ts`. 
  - Implement business logic for fetching expenses in `expenses.service.ts`. 
  - Handle database queries in `expenses.repository.ts`. 
  </details>

---

</details>
 
<details>
  <summary>Task 8: Create Routes for Updating and Deleting Expenses</summary>
  
  ---

  **Description:**

  Set up routes for updating and deleting expense records in the database. Ensure that only specified fields are updated during PATCH operations. 

  **Acceptance Criteria:**

  - Routes for updating and deleting expenses are implemented: 
      - `PATCH /api/expenses/:id` Updates specific fields of an expense. 
      - `DELETE /api/expenses/:id` Deletes an expense by its ID. 
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

---

</details>
 
<details>
  <summary>Task 9: Implement Basic Logging</summary>
  
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

---

</details>

<details>
  <summary>Task 10: Final step</summary>

  ---

  - Check your project for compliance with the [checklist](./CHECKLIST.md)
  - Make sure the tests pass - `npm run test`
  - Open a pull request for the `master` branch and send the solution to the code review

  
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

  - Use vite for initialization. 
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
  - CSS uses preprocessors (e.g., SASS) for modular styling. 
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

---

</details>

<details>
  <summary>Task 3: Creating Reusable Components (primitive components)</summary>

---

  **Description:**

  Develop foundational reusable components that can be utilized across the application. These components will ensure design consistency and simplify further development. In this task you implement primitive components that are independent from other components

  **Acceptance Criteria:**
  
  - The following components are implemented: 
    - **Logo**: Displays the application logo. 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19420&t=GKFeiEqjFghP7rf5-4)
    - **Loader**: Displays the loader component. 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=1-3471&t=AyMjf1BcxpIwHBXC-4)
    - **Button**: A standard button with support for different states(e.g., disabled, active). 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19193&t=GKFeiEqjFghP7rf5-4)
    - **Input Label**: The label appears above many of our components. This should be a stylized label html tag with all the standard label features. 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19389&t=GTL1yhChXxd9Efzr-4)
    - **Input**: A text input field with validation and style support. 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19412&t=ra9tjWdp5aVmkqRH-4)
    - **Icon**: A component for rendering SVG icons. 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=7-5669&t=ra9tjWdp5aVmkqRH-4)
    - **Date Picker**: A component for selecting date. This component is complex and its styles does not necessarily match the design. You can use standard `<input type="date" />`
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=71-5906&t=AyMjf1BcxpIwHBXC-4)
    - **Table**: A customizable `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell` components. Since we have a responsive design and it is complex with styling in the form that we offer, you can use `divs`. But if you feel that you can handle it, you can use standard table tags
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19441&t=ra9tjWdp5aVmkqRH-4)
    - **Menu**: Component for displaying menu items after click.
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=3-13999&t=cvakLOlrrBuwZq9F-4)
  - Each component is documented with usage examples. 

  **Technology-related requirements:**
  
  <details>
  <summary>React</summary>
  
  - Logo: 
    - Example:
    ```jsx
    <Logo />
    ```
  - Loader: 
    - Example:
    ```jsx
    <Loader />
    ``` 
  - Button: 
    - Example:
    ```jsx
    <Button disabled onClick={handleClick}>Click me</Button>
    ```
  - Input Label: 
    - Example:
    ```jsx
    <InputLabel>Name</InputLabel>
    <InputLabel htmlFor="name1">Name</InputLabel>
    ``` 
  - Icon: 
    - Create an `Icon` component for rendering SVG icons, with a name prop for specifying the icon and size for scaling. 
    - Example:
    ```jsx
    <Icon iconName="plus" size={15} color="white" />
    ``` 
  - Input: 
    - Build an `Input` component that accepts props such as type, placeholder, value, and onChange. 
    - Example:
    ```jsx
    <Input
      label="Field name"
      type="text"
      placeholder="Enter name"
      defaultValue={name}
      error
      helperText="Error message"
      onChange={handleChange} />
    ``` 
  - Date Picker: 
    - Implement a `DatePicker` component for selecting the date, with support for a value prop and onChange callback. 
    - Example:
    ```jsx
    <DatePicker
      value={selectedDate}
      onChange={handleDateChange} />
    <DatePicker />
    ```
  - Table: 
    - Create a `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell` components
    - Example: 
    ```jsx
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Column<TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Column<TableCell>
        </TableRow>
      </TableBody>
    </Table>
    ```
  - Menu: 
    - Implement a `Menu` and `MenuItem` components. 
    - Example:
    ```jsx
    <Menu>
      <MenuItem onClick={handleEdit}>Edit</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
    ```
  </details>

---

</details>

<details>
  <summary>Task 4: Creating Reusable Components (complex)</summary>

---

  **Description:**

  Develop foundational reusable components that can be utilized across the application. These components will ensure design consistency and simplify further development. In this task you implement complex components that reuse existing components internally

  **Acceptance Criteria:**
  
  - The following components are implemented: 
    - **Button with Icon**: A button that includes an icon. 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19187&t=GKFeiEqjFghP7rf5-4)
    - **IconRadio**: Component for rendering input radio with icon display. Reuse `Icon` component here
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=4-34033&t=GTL1yhChXxd9Efzr-4)
    - **Category Group**: Based on the `IconRadio` and `Icon` components, create a CategoryGroup component. When you click on the icon it should be activated. User can only select one category
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=4-34103&t=cvakLOlrrBuwZq9F-4)
    - **Input with Currency**: An extension of the standard input, displaying the selected currency. 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=2-19408&t=ra9tjWdp5aVmkqRH-4)
    - **Date Picker Range**: A component for selecting dates. To change the range date, you need to click on one of the date and a ready-made date picker component should appear
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=3-2073&t=ra9tjWdp5aVmkqRH-4)
    - **ExpenseTable**: Component for displaying expenses based on an already implemented `Table` component. 
      - [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=1-3551&t=AyMjf1BcxpIwHBXC-4)
      - If there is no data, then a message with an image should be displayed as in the [design](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=1-3601&t=XWnEQbC9qTwXBf01-4)
      - If there is no data and a request response is expected, then a [stub should be displayed](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=1-3585&t=XWnEQbC9qTwXBf01-4)
      - If there is initial data, but a new portion of data is expected to be loaded, then the [spinner](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=1-3471&t=XWnEQbC9qTwXBf01-4) is displayed
  - Each component is documented with usage examples. 

  **Technology-related requirements:**
  
  <details>
  <summary>React</summary>
  
  - Button with Icon: 
    - Use `Icon` component. 
    - Example:
    ```jsx
    <IconButton>
      <Icon icon="close" color="white" size={12} />
    </IconButton>
    ```
  - Radio button input:
    - Use `Icon` component. 
    - Example:
    ```jsx
    <IconRadio name="category">
      <Icon icon="credits" size={24} />
    </IconRadio>
    ```
  - List of icon categories:
    - Use `IconRadio` and `Icon` components
    - Example:
    ```jsx
    <CategoryGroup defaultValue="mobile" />
    <CategoryGroup />
    ```
  - Input with Currency: 
    - Extend `Input` to include a currency prop that displays the selected currency symbol. 
    - Example:
    ```jsx
    <InputWithCurrency />
    <InputWithCurrency
      id="name4"
      defaultValue="123"
      selectProps={{ defaultValue: 'USD' }} />
    <InputWithCurrency
      id="name4"
      onChange={handleAmountChange}
      defaultValue="123"
      selectProps={{
        defaultValue: 'USD',
        onChange: handleCurrencyChange }} />
    ``` 
  - Date Picker Range: 
    - Implement a `DatePickerRange` component for selecting dates, with support for a value prop and onChange callback. 
    - Example:
    ```jsx
    <DatePickerRange
      from={fromDate}
      to={toDate}
      onChange={handleUpdateDateRange} />
    ```
  - ExpenseTable: 
    - Create a `ExpenseTable` component that accepts columns and data props for customization. 
    - Example: 
    ```jsx
    <ExpenseTable />
    ```
  </details>

---

</details>


<details>
  <summary>Task 6: Implement Sidebar Component</summary>

---

  **Description:**

  Create a Sidebar component that appear after clicking plus button

  **Acceptance Criteria:**

  - The sidebar open button is rendered in the lower right corner.
  - When user click the button, a sidebar appears on the right. The sidebar should appear with smooth animation.
  - Sidebar styles and content match the design.
  - The logic for creating a record at this step does not need to be done
  
---

</details>


<details>
  <summary>Task 7: Implement Layout Component</summary>

---

  **Description:**

  Create a Layout component that includes Header and Sidebar

  **Acceptance Criteria:**

  - A layout component has been created which is a general wrapper for the application.
  - A header component is implemented and displayed on the layout. 
    - Use reusable components for shared elements like the logo. 

---

</details>


<details>
  <summary>Task 8: Build Responsive Layout</summary>
  
  ---

  **Description:**

  Implement a responsive design for the application that adapts to different screen sizes, ensuring usability on both mobile and desktop devices. 

  **Acceptance Criteria:**
  
  - The application layout adjusts seamlessly between mobile, tablet, and desktop views. 
  - Key components, such as the header and table, are responsive. 
  - Use CSS grid and flexbox for responsive layouts. 

---

</details>

 <details>
  <summary>Task 9: Display Expenses Table</summary>
  
  ---

  **Description:**

  `ExpenseTable` component is already created. Connect data to it and display component on the screen

  **Acceptance Criteria:**
  
  - If no expenses are available, a placeholder message is displayed. 
  - If expenses are loading, a skeleton is shown.
  - Pagination implemented. When the user scrolls to the end of the screen, a new piece of data should be loaded
  - Filtering is implemented. The user selects a range of dates and the table is redrawn taking into account the selected dates

  **Endpoints:**

  - `GET /api/expenses` - Fetch all expenses.
    - `limit` - Number of records per page. 
    - `offset` - Offset for pagination. 
    - `fromDate` -and toDate: Filter by date range. 

---

</details>

<details>
  <summary>Task 10: Implement Add Expense Functionality</summary>
  
  ---

  **Description:**

  Create a form for adding a new expense. The form should be accessible through a right sidebar that opens when clicking the "+" button. 

  **Acceptance Criteria:**
  
  - A button triggers the display of a right sidebar with the form. 
  - The form includes fields for Name, Payment amount, Category and Date. 
  - Submitting the form sends data to the backend and updates the table.
  - * Animate the appearance of a new record in the table

  **Endpoints:**

  - `POST /api/expenses` - Add a new expense. 

  **Technology-related requirements:**
  
  <details>
  <summary>React</summary>

  - Use controlled components for form handling. 
  - Validate form inputs with `yup`. 
  - Use `react-hook-form` for work with forms. 
  </details>

---

</details>
 
 
<details>
  <summary>Task 11: Add Update and Delete Expense Features</summary>
  
  ---

  **Description:**

  Implement functionality to update or delete an expense from the table. 

  **Acceptance Criteria:**
  
  - An "Edit" button allows modification of expense details. 
  - A "Delete" button removes the expense from the list and updates the backend.
  -  * Animate deleting a table record
  
  **Endpoints:**
  
  - `PATCH /api/expenses/:id` - Update an expense. 
  - `DELETE /api/expenses/:id` - Delete an expense. 

  **Technology-related requirements:**
  
  <details>
  <summary>React</summary>

  - Use modals for editing or confirming deletion. 
  - Handle optimistic updates for better user experience. 
  </details>

---

</details>


<details>
  <summary>Task 12: Final step</summary>

  ---

  - Check your project for compliance with the [checklist](./CHECKLIST.md)
  - Make sure the tests pass - `npm run test`
  - Open a pull request for the `master` branch and send the solution to the code review

  
  ---

</details>

## Solution
If you've already finished working on this part or are stuck, these repositories might be useful to you.
  - [API](https://github.com/petproject-dev/expense-tracker-backend-part-2) - Express.js
  - [UI](https://github.com/petproject-dev/expense-tracker-frontend-part-2) - React

## Next Steps
If you're ready to move forward, you can proceed to [next project part](../part-2/README.md).

## Found an Issue?
We strive to make the project as clear and helpful as possible. If you notice any errors, inconsistencies, or unclear instructions, please open a Pull Request in this repository with your suggested fixes or improvements. Your feedback helps improve the learning experience for everyone!

Happy coding, and good luck with this part of the project!
