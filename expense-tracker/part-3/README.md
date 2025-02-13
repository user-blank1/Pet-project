## Part 3 Description
This part is a logical continuation of the previous parts ([part 1](../part-1/README.md), [part 2](../part-2/README.md)). If you missed them, we recommend starting with them

## Starter Repositories
In progress...
<!-- You can fork these repositories to get started. If you don't find a repository with the stack you need, create a repository yourself
  - [API](https://github.com/petproject-dev/expense-tracker-backend-part-3) - Express.js
  - [UI](https://github.com/petproject-dev/expense-tracker-frontend-part-3) - React -->

## Backend

<details>
<summary>Task 1: Add an endpoint for invoice analysis</summary>

---

**Description:**

You need to create an endpoint that will accept an invoice image in jpg format as input, analyze the data, and return an object to the user.

**Acceptance Criteria:**

- A new endpoint has been created.
- Endpoint validates input data based on file format (jpg) and size (up to 5 Mb).
- The file is not saved anywhere.
- The user receives an error if the file could not be parsed.
- If successful, the user receives a response in the format
- Unit tests added.
```js
{
  name: string,
  amount: number,
  currency?: "USD" | "EUR",
  date: string
}
```

---

</details>

<details>
<summary>Task 2: Saving the order in which records are displayed</summary>

---

**Description:**

Drag & drag functionality will be added to the frontend. It is necessary to provide support for this functionality on the backend.

**Acceptance Criteria:**

- A new field has been added to the `Expenses` model to save the display order of a record.
- Added a new endpoint for updating the order of records.
- Updated endpoint for receiving records. Now the data should be sorted by the order field.

---

</details>

<details>
<summary>Task 3: Add logger</summary>

---

**Description:**

To improve debugging, monitoring, and error tracking, we need to integrate a logging system into the project. The logger should provide different log levels (e.g., info, warn, error, debug) and support structured logging.

**Acceptance Criteria:**

- A logging system has been implemented with support for multiple log levels (e.g., info, warn, error, debug).
- Logs have been structured to include timestamps and relevant contextual information.
- Logging has been added to key application areas, such as API requests, database operations, and error handling.
- A mechanism has been introduced to store logs efficiently, supporting both local and external log management solutions.
- Configuration options have been provided to enable or disable logging in different environments (development, production).
- Unit tests added.
- 
---

</details>

<details>
<summary>Task 4: Analyze and Optimize RPS Performance</summary>

---

**Description:**

To ensure optimal system performance and scalability, an analysis of the existing endpoints has been conducted. The goal was to identify bottlenecks, explore optimization opportunities, and implement improvements. After implementing the solutions, RPS was analyzed again to measure performance gains.

**Acceptance Criteria:**

- Existing endpoints have been analyzed to identify performance bottlenecks.
- Potential optimization techniques (e.g., caching, indexing, query optimization, load balancing, multi threads) have been evaluated and implemented where applicable.
- After optimizations, RPS has been measured again to assess performance improvements.
- A summary report with findings, implemented solutions, and performance comparisons has been created.

---

</details>

<details>
<summary>Task 5: Containerize Backend with Docker</summary>

---

**Description:**

To improve deployment efficiency and maintainability, the backend has been containerized using Docker. The application can now be consistently deployed across different environments with minimal configuration overhead.

**Acceptance Criteria:**

- A Dockerfile has been created and optimized for production use.
- A .dockerignore file has been added to exclude unnecessary files from the image.
- The application runs successfully inside a Docker container.
- Environment variables are managed securely and injected into the container.
- The container has been tested locally to ensure it functions correctly.

---

</details>

<details>
<summary>Task 6: Add GitHub Action for CI/CD</summary>

---

**Description:**

To automate the development workflow, a GitHub Action has been added. This workflow ensures that all necessary checks are performed before merging code changes.

**Acceptance Criteria:**

- A GitHub Action workflow file (`.github/workflows/ci.yml`) has been created.
- The workflow includes the following steps:
  - Run unit and integration tests.
  - Perform type checking.
  - Check code formatting (e.g., Prettier, ESLint).
  - Build the application to ensure there are no compilation errors.
  - Build a Docker container to validate the deployment process.
- The workflow runs automatically on every pull request and push to main.
- Status checks have been integrated into GitHub to prevent merging if tests fail.

---

</details>

<details>
<summary>Task 7: Deploy Application</summary>

---

**Description:**

To make the application available for production use, a deployment pipeline has been set up. The deployment process ensures smooth updates with minimal downtime.

**Acceptance Criteria:**

- The backend application has been deployed to the target environment.
- The deployment process is automated through a CI/CD pipeline.
- Environment variables are securely injected during deployment.
- Monitoring and logging tools have been configured to track application performance.

---

</details>

## Frontend

<details>
<summary>Task 1: Upload Invoice and Pre-fill Expense Form</summary>

---

**Description:**

To streamline the expense creation process, a feature for uploading invoices has been implemented. Users can upload a JPG image (up to 5MB) via a modal, and the backend extracts relevant data to pre-fill the expense form.

**Acceptance Criteria:**

- A "Upload Invoice" button has been added to the sidebar.
- Clicking the button opens a modal window.
- The modal supports drag & drop and file selection.
- Only JPG files up to 5MB are accepted.
- The image is sent to the backend, which returns extracted invoice data.
- The expense form is pre-filled with the received data.
- Proper validation and error handling have been implemented.
- Storybook added.
- Unit tests added.

---

</details>

<details>
<summary>Task 2: Implement Drag & Drop Functionality</summary>

---

**Description:**

Drag & Drop functionality has been added to enhance usability. Users can now interact with expense table records.

**Acceptance Criteria:**

- Drag & Drop functionality has been integrated.
- The system correctly processes dropped elements.
- The previously created API endpoint is used to persist changes.

---

</details>

<details>
<summary>Task 3: DevTools and Render Optimization</summary>

---

**Description:**

To improve application performance, DevTools have been used to analyze and optimize unnecessary re-renders.

**Acceptance Criteria:**

- DevTools for performance analysis (React DevTools, Redux DevTools, why-did-you-render) have been installed.
- Components with excessive re-renders have been identified.
- Unnecessary renders have been optimized using memoization, useCallback, and useMemo where applicable.
- Performance improvements have been verified with updated benchmarks.

---

</details>

<details>
<summary>Task 4: Integrate Logging Tools (Sentry)</summary>

---

**Description:**

To improve error tracking and debugging, logging tools have been integrated into the frontend.

**Acceptance Criteria:**

- Sentry has been integrated for logging errors and performance issues.
- Source maps have been configured for better debugging.
- Global error boundaries have been added to prevent UI crashes.
- Logs include user actions and relevant context for debugging.

---

</details>

<details>
<summary>Task 5: Add Docker Container for Frontend</summary>

---

**Description:**

To ensure consistency across environments, the frontend has been containerized using Docker.

**Acceptance Criteria:**

- A Dockerfile has been created for the frontend.
- A .dockerignore file has been added.
- The application runs successfully inside a Docker container.

---

</details>

<details>
<summary>Task 6: CI/CD for Frontend</summary>

---

**Description:**

A CI/CD pipeline has been added to automate testing, linting, and building of the frontend application.

**Acceptance Criteria:**

- A GitHub Action workflow has been created.
- The workflow includes:
  - Linting and formatting checks.
  - Unit and integration tests execution.
  - Building the frontend application.
  - Building a Docker image for deployment.
- The pipeline runs on pull requests and pushes to main.

---

</details>

<details>
<summary>Task 7: Deploy Frontend to Server</summary>

---

**Description:**

To make the frontend application accessible, an automated deployment pipeline has been set up.

**Acceptance Criteria:**

- The application has been deployed to the target environment.
- The deployment process is automated and triggered by the CI/CD pipeline.
- Environment variables are securely managed.

---

</details>

## Solution
In progress...
<!-- If you've already finished working on this part or are stuck, these repositories might be useful to you.
  - [API](https://github.com/petproject-dev/expense-tracker-backend-part-4) - Express.js
  - [UI](https://github.com/petproject-dev/expense-tracker-frontend-part-4) - React -->

## Found an Issue?
We strive to make the project as clear and helpful as possible. If you notice any errors, inconsistencies, or unclear instructions, please open a Pull Request in this repository with your suggested fixes or improvements. Your feedback helps improve the learning experience for everyone!

Happy coding, and good luck with this part of the project!
