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
<summary>Task 7: Implement Access Guard for Protected Routes</summary>  

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
<summary>Task 8: Security Hardening</summary>  

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
<summary>Task 9: Final Review and Testing</summary>  

---

**Description:**  
Finalize and review the authentication and authorization implementation.  

**Acceptance Criteria:**  
- All endpoints are covered by integration tests.  
- Tests cover success and failure scenarios.  
- The project adheres to the defined structure and best practices.  
- Open a pull request for mentor review.  

**Technology-related requirements:**  
<details>  
<summary>NodeJS</summary>  
- Write tests using `Jest` or similar frameworks.  
- Ensure database mocks are used for testing.  
</details>  

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

