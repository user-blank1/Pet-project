## Backend

<details>
  <summary>Task 1: Setup Environment and Project Structure</summary>

  ---

  **Description:**
  
  Organize the backend environment and structure for the authentication module, ensuring consistency with the first part of the project.
  
  **Acceptance Criteria:**
  
  - The folder structure is updated to include an `auth` module with controllers, services, and necessary configurations.
  - No duplicate installation of already configured libraries from the first part.
  - `.env` includes required variables for JWT secret and email settings.

  ---
</details>

<details>
  <summary>Task 2: Implement User Model and Database Schema</summary>

  ---

  **Description:**
  
  Create the user schema, ensuring proper fields for authentication.
  
  **Acceptance Criteria:**
  
  - Database schema includes a `users` table with fields: `id`, `email`, `password`, `name`.
  - Migrations are successfully applied to the database. Use a migration tool to ensure database schema consistency across environments.

  ---
</details>


<details>
  <summary>Task 3: Implement Sign-Up Endpoint</summary>

  ---

  **Description:**

  Create the `POST /sign-up` endpoint to register new users.
  
  **Acceptance Criteria:**
  
  - Validates input data (e.g., email format, password length).
  - Hashes passwords before saving them to the database.
  - Returns 201 status with a success message after successful registration.
  - Prevents duplicate email registration and returns a 400 error if attempted.
  
  **Best Practice Recommendations:**
  
  - Use `bcrypt` for hashing passwords securely.

  ---
</details>

<details>
  <summary>Task 4: Implement Sign-In Endpoint</summary>

  ---

  **Description:**

  Create the `POST /sign-in` endpoint to authenticate users and generate tokens.
  
  **Acceptance Criteria:**
  
  - Validates email and password against the database.
  - Generates and returns access and refresh tokens upon successful authentication.
  - Returns 401 for invalid credentials.
  
  **Best Practice Recommendations:**
  
  - Use `Passport.js` for implementing local strategy authentication.
  - Use `jsonwebtoken` for generating and validating JWTs.

  ---
</details>

<details>
  <summary>Task 5: Implement Middleware for Access Control</summary>

  ---

  **Description:**

  Develop middleware to restrict access to private URLs based on user authentication status.
  
  **Acceptance Criteria:**
  
  - Middleware validates the access token.
  - Returns 401 if the token is missing or invalid.
  - Allows access to protected routes only for authenticated users.

  ---
</details>

<details>
  <summary>Task 6: Implement /me Endpoint</summary>

  ---

  **Description:**

  Create the `GET /me` endpoint to fetch data of the currently authenticated user.
  
  **Acceptance Criteria:**
  
  - Middleware validates the access token.
  - Returns the user’s data (excluding sensitive information like password) on success.
  - Returns 401 for unauthorized requests.

  ---
</details>

<details>
  <summary>Task 7: Implement Token Refresh Endpoint</summary>

  ---

  **Description:**

  Create the `GET /token` endpoint to refresh the access token using a valid refresh token.
  
  **Acceptance Criteria:**
  
  - Validates the refresh token from the request.
  - Generates and returns a new access token upon successful validation.
  - Returns 401 for invalid or expired refresh tokens.

  ---
</details>

<details>
  <summary>Task 8: Implement Forgot Password Endpoint</summary>

  ---

  **Description:**

  Create the `POST /forgot-password` endpoint to initiate the password recovery process.
  
  **Acceptance Criteria:**
  
  - Validates the provided email.
  - Generates a secure password reset token and sends it via email.
  - Returns 200 status after sending the email.
  - Returns 404 if the email is not found in the database.
  - Include an expiration time for password reset tokens.
  
  **Best Practice Recommendations:**
  
  - Use `nodemailer` for sending emails securely.
  
  ---
</details>

<details>
  <summary>Task 9: Implement Restore Password Endpoint</summary>

  ---

  **Description:**
  
  Create the `POST /restore-password` endpoint to reset the user’s password.
  
  **Acceptance Criteria:**
  
  - Validates the password reset token.
  - Allows the user to set a new password.
  - Hashes and updates the password in the database.
  - Invalidates the used reset token.
  - Returns 200 status upon success.

  ---
</details>

