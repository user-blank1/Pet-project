# Expense Tracker - Code Review Checklist
This checklist is designed to help students self-review their work and prepare for mentor feedback. It ensures adherence to best practices, coding standards, and solid design principles.

## Backend Checklist

#### Code Structure and Organization
- Files and directories are organized as per the project structure:
    - `app.ts`, `index.ts`, and appropriate subdirectories (`config`, `db`, `expenses`, `helpers`).
    - Separation of concerns (controllers, services, repositories, DTOs, entities, etc.).
- Code adheres to the Single Responsibility Principle (SRP): each file or class has a well-defined purpose.
- Controllers are lean and delegate business logic to services.
- Repositories are responsible only for database interactions.

#### API Functionality
- All API endpoints are implemented as per requirements:
    - CRUD operations for expenses.
    - Pagination and filtering.
- Input validation is implemented using DTOs.
- Error handling is consistent and user-friendly.
- Endpoints return appropriate HTTP status codes and error messages.

#### Database
- Database schema matches project requirements.

#### Code Quality
- Code is free of obvious bugs, typos, and unused variables or imports.
- Error messages and comments are meaningful and clear.
- TypeScript types are used effectively and consistently.
- Code is clean, readable, and follows the project's linting rules.

## Frontend Checklist
#### Code Structure and Organization
- Components are organized into reusable and specific components (e.g., Logo, Button, Input, Table).
- Reusable components are generalized and customizable through props.
- State management (if applicable) is centralized and easy to maintain.
- Files follow a logical directory structure.

#### UI Functionality
- UI correctly implements all the required features:
    - Display expenses in a table with pagination and filtering.
    - Add, edit, and delete expenses through the sidebar.
    - Handle loading states, empty states, and errors gracefully.
- Validation errors are displayed in a user-friendly manner using the FormField component.

#### Styling and Responsiveness
- Components are styled using CSS preprocessors (e.g., SCSS).
- The UI is responsive and works well on different screen sizes.
- Adheres to the design specification, including spacing, fonts, and colors.

#### Code Quality
- Code is clean, modular, and follows best practices for React.
- TypeScript types are used consistently for props and state.
