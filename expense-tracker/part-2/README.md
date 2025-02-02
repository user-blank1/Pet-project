## Part 2 Description
This part is a logical continuation of the previous part ([part 1](../part-1/README.md)). If you missed it, we recommend starting with it.

## Starter Repositories
You can fork these repositories to get started. If you don't find a repository with the stack you need, create a repository yourself
  - [API](https://github.com/petproject-dev/expense-tracker-backend-part-2) - Express.js
  - [UI](https://github.com/petproject-dev/expense-tracker-frontend-part-2) - React

## Backend

<details>
<summary>Task 1: Implement User Model and Database Schema</summary>

---

**Description:**
Create the user model and database schema to handle user-related data securely. Additionally, set up `auth` and `user` modules with appropriate controllers, services, and repositories.

**Acceptance Criteria:**
- Database schema includes `Users` table with fields: `id`, `email`, `name`, `password`.
- Created a migration that successfully creates a new table after running. Running the migration again does not lead to anything.
- `auth` module is created with controller, service, and repository.
- `user` module is created with controller, service, and repository.

**Materials:**

- [What are database migrations?](https://www.prisma.io/dataguide/types/relational/what-are-database-migrations)

---

</details>

<details>
<summary>Task 2: Implement Sign-Up and Sign-In Endpoints</summary>

---

**Description:**
Create endpoints for user registration (`POST /api/auth/sign-up`) and login (`POST /api/auth/sign-in`) with token-based authentication.

**Acceptance Criteria:**
- `RefreshToken` table created and associated with `User`.
- `POST /api/auth/sign-up`: Validates input and creates a new user.
- `POST /api/auth/sign-in`: Validates credentials and returns access and refresh tokens. A new entry must be added to the `RefreshToken` table.
- Tokens are signed and include expiration times.
- Important events (e.g., successful sign-up, failed login attempts) are logged.

**Materials:**

- [JWT Authentication](https://mihai-andrei.com/blog/jwt-authentication-using-prisma-and-express/)

---

</details>

<details>
<summary>Task 3: Middleware for Access Control</summary>

---

**Description:**
Develop middleware to validate and protect routes that require authentication.

**Acceptance Criteria:**
- Middleware validates access tokens and restricts unauthorized access.
- Protected routes return `401 Unauthorized` if the token is invalid or expired.
- Unauthorized access attempts are logged.

---

</details>

<details>
<summary>Task 4: Implement `/api/users/me` Endpoint</summary>

---

**Description:**
Create the `/api/users/me` endpoint in the `user` module to return details of the currently authenticated user.

**Acceptance Criteria:**
- `GET /api/users/me` returns user information (excluding sensitive fields).
- Protected by authentication middleware.
- Access to `/api/users/me` endpoint is logged.

---

</details>

<details>
<summary>Task 5: Implement Token Refresh Endpoint</summary>

---

**Description:**
Implement the `/api/auth/token` endpoint to refresh access tokens using refresh tokens.

**Acceptance Criteria:**
- `POST /api/auth/token` validates the refresh token.
- Issues a new access and refresh tokens if the refresh token is valid.
- Invalid refresh tokens return `401 Unauthorized`.
- Token refresh attempts are logged.

---

</details>

<details>
<summary>Task 6: Forgot Password Flow</summary>

---

**Description:**
Implement the `/api/auth/forgot-password` endpoint to allow users to recover their passwords securely.

**Acceptance Criteria:**
- `POST /api/auth/forgot-password`: Sends a reset code via email. The email also contains a link to the password change page.
- `ResetCode` table is created ans associated with `User` table.
- The reset code expires in 10 minutes.

**Technology-related requirements:**

<details>
<summary>NodeJS</summary>

- Use `nodemailer` for sending emails.
</details>

---

</details>

<details>
<summary>Task 7: Restore Password Flow</summary>

---

**Description:**
Implement the `/api/auth/restore-password` endpoint.

**Acceptance Criteria:**
- `POST /api/auth/restore-password`: Validates the reset code and updates the user's password.
- `ResetCode` should be removed after successful password reset.
- A job has been created that deletes all expired codes once a week.
- Password reset requests and successful resets are logged.

**Technology-related requirements:**

<details>
<summary>NodeJS</summary>

- Use `node-cron` for scheduling crone jobs.
</details>

<br />

**Materials:**

- [What Is a Cron Job](https://www.hostinger.com/tutorials/cron-job#:~:text=A%20cron%20job%20is%20a,efficiency%20and%20minimal%20human%20error.)

<br />

<details>
<summary>NodeJS</summary>

- [How to Schedule Cron Job in Node.js + Express.js](https://dev.to/thesohailjafri/how-to-schedule-cron-job-in-nodejs-expressjs-2flm)

</details>

---

</details>

<details>
<summary>Task 8: Logout</summary>

---

**Description:**
Implement the `/api/auth/logout` and `/api/auth/logoutAll` endpoints.

**Acceptance Criteria:**
- `GET /api/auth/logout`: logout the user out of the account on the current device
- `GET /api/auth/logoutAll`: logout the user out from all devices.
- A job has been created that deletes all expired refresh tokens once a week.

**Technology-related requirements:**

<details>
<summary>NodeJS</summary>

- Use `node-cron` for scheduling crone jobs.
</details>

---

</details>

<details>
<summary>Task 9: Security Hardening</summary>

---

**Description:**
Implement security measures to ensure data protection and prevent common vulnerabilities.

**Acceptance Criteria:**
- Implement rate limiting for authentication endpoints.
- Ensure tokens are securely signed and validated.
- Enable CORS with secure configurations.
- Prevent common attacks such as SQL injection and XSS.

**Technology-related requirements:**

<details>
<summary>NodeJS</summary>

- Use `helmet` for basic security headers.
- Use `express-rate-limit` for rate limiting.
- Validate all incoming data and sanitize inputs.
</details>

---

</details>

<details>
<summary>Task 10: Add unit tests</summary>

---

**Description:**
Cover the functionality of `auth` and `user` modules with unit tests.

**Acceptance Criteria:**
- The test environment is configured
- Tests interact only with mock data
- Test coverage from 70%

**Technology-related requirements:**

<details>
<summary>NodeJS</summary>

- Use `supertest` and `jest`.
</details>

---

</details>

<details>
  <summary>Task 11: Final step</summary>

  ---

  - Make sure the tests pass - `npm run test`
  - Open a pull request for the `master` branch and send the solution to the code review

  ---

</details>

## Frontend

<details>
  <summary>Task 1: Routing</summary>

---

**Description:**
Add a router with empty blank pages. This will allow you to make transitions between pages in the future.


**Acceptance Criteria:**
- Empty placeholders added for sign in, sign up, forgot password, verification code, restore password, success pages
- Router added
- Pages and routes are linked
- The root route belongs to the main page and displays a table with expenses

**Technology-related requirements:**

<details>
<summary>React</summary>

- Use `react-router-dom`
</details>

---

</details>

<details>
  <summary>Task 2: Layout for Authentication Components</summary>

---

**Description:**
Create a common layout for authentication pages.

**Acceptance Criteria:**
- [Design Link](https://www.figma.com/design/rLNUulPqnl0jhhnXeGDxEb/Expense-tracker?node-id=3-25446&t=OWBBHRgYsR67Eq8H-4)
- Layout can be a wrapper for authentication pages.
- Layout added to the router for authentication pages
- Added styles for responsive design

**Materials:**

<details>
<summary>React</summary>

- [Building a Layout with React Router](https://medium.com/@ravipatel.it/building-a-layout-with-react-router-v6-step-by-step-guide-75b9637f1fbe)
</details>

---

</details>

<details>
  <summary>Task 3: Implement Sign-Up Page</summary>

---

**Description:**
Create the Sign-Up page, allowing users to register by providing necessary information.

**Acceptance Criteria:**
- Added password input component.
- The page includes input fields: `name`, `email`, `password`.
- Validation guarantees a valid email. The password must contain 8-12 characters long and contain uppercase and lowercase letters, as well as numbers.
- Errors are displayed if validation fails.
- A success message is displayed after registration.
- After successful registration, the user should be redirected to the sign-in page.
- The links in the design should lead to the corresponding pages.

**Endpoints:**
- `POST /api/auth/sign-up`

**Technology-related requirements:**

<details>
<summary>React</summary>

- Use `react-hook-form` for form handling.
- Use `yup` for validation.
</details>

---

</details>

<details>
  <summary>Task 4: Implement Sign-In Page</summary>

---

**Description:**
Create the Sign-In page to authenticate users using their email and password.

**Acceptance Criteria:**
- The page includes input fields: `email`, `password`.
- The email and password validation rules must be exactly the same as on the sign-up page.
- Invalid credentials display appropriate error messages.
- On success, the user is redirected to a protected route.

**Endpoints:**
- `POST /api/auth/sign-in`

**Technology-related requirements:**

<details>
<summary>React</summary>

- Use `react-hook-form` for form handling.
- Display validation and backend errors clearly.
</details>

---

</details>

<details>
  <summary>Task 5: Token Management</summary>

---

**Description:**
After successful login, the user receives an access token as a response. A refresh token will also be set as a cookie. Refresh token is controlled on the backend, access token will be controlled by the frontend. Since it is advisable not to store the access token in any storage, we will store it in a closure.

**Acceptance Criteria:**
- After you receive the token, you need to save it in the closure of the tool through which you send requests.
- Each subsequent request must take the token and closures and add an authentication header.
- If a user sends a request to a private route and his token expires, then you need to get a new access token based on the refresh token.

**Endpoints:**
- `POST /api/auth/token`

**Technology-related requirements:**

<details>
<summary>React</summary>

- Use interceptors in `axios` to manage token logic globally.
</details>

**Materials:**

- [xUsing Axios interceptors for refreshing your API token](https://www.thedutchlab.com/insights/using-axios-interceptors-for-refreshing-your-api-token)

---

</details>

<details>
  <summary>Task 6: Implement Forgot Password Flow</summary>

---

**Description:**
Develop a password recovery flow with pages for email submission, token validation, and resetting the password.

**Acceptance Criteria:**
- **Forgot Password Page:** User enters their email to receive a reset code.
- **Reset Code Page:** User enters the reset code.
- **Restore Password Page:** User sets a new password.
- On success, the user is redirected to a success page.

**Endpoints:**
- `POST /api/auth/forgot-password`
- `POST /api/auth/restore-password`

**Technology-related requirements:**

<details>
<summary>React</summary>

- Use `react-router` for navigation across recovery pages.
- Handle loading and error states gracefully.
</details>

---

</details>

<details>
  <summary>Task 8: Implement Protected Routes</summary>

---

**Description:**
Create route guards to protect authenticated routes and restrict unauthorized access.

**Acceptance Criteria:**
- Authenticated users can access protected routes.
- Unauthenticated users are redirected to the sign-in page.
- Routes are secured using a reusable `PrivateRoute` component.

**Technology-related requirements:**

<details>
<summary>React</summary>

- Use `react-router-dom` to implement route protection.
</details>

---

</details>

<details>
  <summary>Task 9: Implement User Profile Page</summary>

---

**Description:**
Create a user profile page displaying authenticated user details.

**Acceptance Criteria:**
- User details (excluding sensitive fields) are displayed.
- Errors are gracefully handled.

**Endpoints:**
- `GET /api/users/me`

**Technology-related requirements:**

<details>
<summary>React</summary>

- Fetch user details using `useEffect`.
</details>

---

</details>

<details>
  <summary>Task 10: Implement Responsive Design</summary>

---

**Description:**
Ensure all authentication pages are fully responsive on all devices.

**Acceptance Criteria:**
- Authentication pages adapt to mobile, tablet, and desktop views.
- UI elements adjust dynamically without breaking layout.

**Technology-related requirements:**

<details>
<summary>React</summary>

- Use CSS Modules or styled-components for responsive design.
</details>

---

</details>

<details>
  <summary>Task 11: Final step</summary>

  ---

  - Make sure the tests pass - `npm run test`
  - Open a pull request for the `master` branch and send the solution to the code review


  ---

</details>

## Solution
If you've already finished working on this part or are stuck, these repositories might be useful to you.
  - [API](https://github.com/petproject-dev/expense-tracker-backend-part-3) - Express.js
  - [UI](https://github.com/petproject-dev/expense-tracker-frontend-part-3) - React

## Next Steps
If you're ready to move forward, you can proceed to [next project part](../part-3/README.md).

## Found an Issue?
We strive to make the project as clear and helpful as possible. If you notice any errors, inconsistencies, or unclear instructions, please open a Pull Request in this repository with your suggested fixes or improvements. Your feedback helps improve the learning experience for everyone!

Happy coding, and good luck with this part of the project!

