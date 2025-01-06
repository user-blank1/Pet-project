## Part 2 Description
This part is a logical continuation of the previous part ([part 1](../part-1/README.md)). If you missed it, we recommend starting with it

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
- Database schema includes `users` table with fields: `id`, `email`, `name`, `password`.  
- Migrations are successfully applied to the database.  
- `auth` module is created with controller, service, and repository.  
- `user` module is created with controller, service, and repository.  
- Folder structure aligns with modular design principles.  

---

</details>  

<details>  
<summary>Task 2: Implement Sign-Up and Sign-In Endpoints</summary>  

---

**Description:**  
Create endpoints for user registration (`POST /api/auth/sign-up`) and login (`POST /api/auth/sign-in`) with token-based authentication.  

**Acceptance Criteria:**  
- `POST /api/auth/sign-up`: Validates input and creates a new user.  
- `POST /api/auth/sign-in`: Validates credentials and returns access and refresh tokens.  
- Tokens are signed and include expiration times.  
- Important events (e.g., successful sign-up, failed login attempts) are logged.  

**Technology-related requirements:**  
<details>  
<summary>NodeJS</summary>  

  - Use `Passport.js` for local strategy authentication.  
- Use `jsonwebtoken` for token management.  
</details>  

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

**Technology-related requirements:**  
<details>  
<summary>NodeJS</summary>  

  - Create middleware for token validation using `jsonwebtoken`.  
</details>  

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
- Issues a new access token if the refresh token is valid.  
- Invalid refresh tokens return `401 Unauthorized`.  
- Token refresh attempts are logged.  

**Technology-related requirements:**  
<details>  
<summary>NodeJS</summary>  

  - Use `jsonwebtoken` to sign and validate refresh tokens.  
</details>  

---

</details>  

<details>  
<summary>Task 6: Forgot Password Flow</summary>  

---

**Description:**  
Implement the `/api/auth/forgot-password` and `/api/auth/restore-password` endpoints to allow users to reset their passwords securely.  

**Acceptance Criteria:**  
- `POST /api/auth/forgot-password`: Sends a reset code via email.  
- `POST /api/auth/restore-password`: Validates the reset code and updates the user's password.  
- The reset token expires in 10 minutes.  
- Password reset requests and successful resets are logged.  

**Technology-related requirements:**  
<details>  
<summary>NodeJS</summary>  

  - Use `nodemailer` for sending emails.  
</details>  

---

</details>  

<details>  
<summary>Task 7: Implement verification ndpoint</summary>  

---

**Description:**  
Create the `/api/auth/verify` endpoint to verify the reset code sent to the user's email and issue an access token for the password reset process.  

**Acceptance Criteria:**  
- `POST /api/auth/verify` accepts the reset code from the user.  
- Validates the reset code and ensures it hasn't expired.  
- Issues an access token if the reset code is valid.  
- Returns `401 Unauthorized` if the reset code is invalid or expired.  
- Important events (e.g., successful verification, invalid code attempts) are logged.  

---
</details>

<details>  
<summary>Task 8: Implement Access Guard for Protected Routes</summary>  

---

**Description:**  
Implement a guard mechanism to restrict access to specific routes based on user roles or permissions.  

**Acceptance Criteria:**  
- Guards restrict access to routes based on predefined rules.  
- Unauthorized access attempts are logged.  

**Technology-related requirements:**  
<details>  
<summary>NodeJS</summary>  

  - Implement guard logic in middleware.  
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
  <summary>Task 10: Final step</summary>

  ---

  - Make sure the tests pass - `npm run test`
  - Open a pull request for the `master` branch and send the solution to the code review

  
  ---

</details>

## Frontend

<details>
  <summary>Task 1: Setup Authentication Project Structure</summary>

---

**Description:**  
Prepare the project structure specifically for authentication and authorization-related components, services, and routes.  

**Acceptance Criteria:**  
- A dedicated `auth` module is created with folders for `components`, `pages`, and `services`.  
- The folder structure aligns with best practices for modular frontend architecture.  
- Environment variables are configured for backend API URLs.  

**Technology-related requirements:**  
<details>
<summary>React</summary>  

  - Use `.env` files to define API base URLs.  
- Structure `pages` as follows:
```
/src
├── pages
│ ├── SignInPage.tsx
│ ├── SignUpPage.tsx
│ ├── ForgotPasswordPage.tsx
│ ├── ResetPasswordPage.tsx
│ ├── SuccessPage.tsx
│ └── EmailVerificationPage.tsx
│ └── ...
...
```
</details>

---

</details>

<details>
  <summary>Task 2: Build Reusable Authentication Components</summary>

---

**Description:**  
Create reusable UI components for building authentication screens.  

**Acceptance Criteria:**  
- The following reusable components are implemented:  
   - **AuthInput:** Styled input for email and password fields.  
   - **AuthButton:** Primary button for submitting forms.  
   - **AuthFormField:** A wrapper for form fields with validation error messages.  
   - **AuthLayout:** A shared layout for authentication pages.  
- Components are reusable across multiple authentication pages.  

**Technology-related requirements:**  
<details>
<summary>React</summary>  

  - Use props to handle validation states and dynamic styles.  
- Ensure accessibility (e.g., `aria-label` for inputs).  
</details>

---

</details>

<details>
  <summary>Task 3: Implement Sign-Up Page</summary>

---

**Description:**  
Create the Sign-Up page, allowing users to register by providing necessary information.  

**Acceptance Criteria:**  
- The page includes input fields: `email`, `password`, `confirm password`, `name`.  
- Validation ensures valid email and matching passwords.  
- Errors are displayed if validation fails.  
- A success message is displayed after registration.  

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
Develop the Sign-In page to authenticate users using their email and password.  

**Acceptance Criteria:**  
- The page includes input fields: `email`, `password`.  
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
  <summary>Task 5: Implement Forgot Password Flow</summary>

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
  <summary>Task 6: Token Management</summary>

---

**Description:**  
Handle access and refresh tokens securely to maintain user sessions.  

**Acceptance Criteria:**  
- Access tokens are securely stored and attached to API requests.  
- Tokens are automatically refreshed before expiration.  
- Expired tokens redirect users to the sign-in page.  

**Endpoints:**  
- `POST /api/auth/token`  

**Technology-related requirements:**  
<details>
<summary>React</summary>  

  - Use interceptors in `axios` to manage token logic globally.  
</details>

---

</details>

<details>
  <summary>Task 7: Implement Protected Routes</summary>

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
  <summary>Task 8: Implement User Profile Page</summary>

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
  <summary>Task 9: Implement Responsive Design</summary>

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
  <summary>Task 10: Final step</summary>

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

