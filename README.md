Here’s a corrected and refined version of your README file, tailored to your GitHub repository and project:

---

# RBAC Admin Dashboard

## Overview

This project is a **Role-Based Access Control (RBAC) Admin Dashboard** built with **React.js** and **Node.js**. It provides a user-friendly interface for managing users, roles, and permissions. The dashboard includes features for adding, editing, and deleting users and roles, along with dynamic permission assignments. The backend API is simulated using Node.js and can be extended for real-world use.

## Features

1. **User Management**:
   - View, add, edit, and delete users.
   - Assign roles and manage user status (Active/Inactive).

2. **Role Management**:
   - Define and edit roles.
   - Assign permissions to roles dynamically.

3. **Dynamic Permissions**:
   - Clear and interactive UI for permission management.

4. **Responsive Design**:
   - Optimized for various devices and screen sizes.

5. **Backend API**:
   - Node.js-based backend for real API interactions.

6. **Mock API**:
   - Optional mock server for testing CRUD operations without a live backend.

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or later) and **npm** installed.

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/SK2004k/RBAC_using_react.git
    cd RBAC_using_react
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

---

## Running the Application

1. **Start the development server**:
    ```sh
    npm start
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

```plaintext
RBAC_using_react
├── public
├── src
│   ├── App.js               // Main application file
│   ├── App.css              // Global styles
│   ├── components
│   │   ├── Sidebar.js       // Sidebar navigation
│   │   ├── Sidebar.css      // Sidebar styles
│   │   ├── StyleSwitcher.js // Theme color switching
│   │   ├── StyleSwitcher.css// Styles for StyleSwitcher
│   │   ├── UserManagement.js// User management functionality
│   │   ├── UserManagement.css // User management styles
│   │   ├── RoleManagement.js // Role management functionality
│   │   ├── RoleManagement.css// Role management styles
├── server.js                // Backend server
├── package.json             // Project metadata
└── README.md                // Project documentation
```

---

## Mock API with JSON Server

### Steps to Set Up Mock API

1. **Install JSON Server**:
    ```sh
    npm install -g json-server
    ```

2. **Create a `db.json` file** in the root directory:
    ```json
    {
      "users": [
        { "id": 1, "name": "John Doe", "email": "john@example.com", "role": "Admin", "status": "Active" },
        { "id": 2, "name": "Jane Smith", "email": "jane@example.com", "role": "User", "status": "Inactive" }
      ],
      "roles": [
        { "id": 1, "name": "Admin", "permissions": ["Read", "Write", "Delete"] },
        { "id": 2, "name": "User", "permissions": ["Read"] }
      ]
    }
    ```

3. **Start the JSON Server**:
    ```sh
    json-server --watch db.json --port 5000
    ```

4. **Update API endpoints** in your components to point to the mock server:
   - Replace `/api/users` with `http://localhost:5000/users`.
   - Replace `/api/roles` with `http://localhost:5000/roles`.

---

## Backend API

The backend is implemented using **Node.js** with **MySQL**. You can start the server by running:

```sh
node server.js
```

Endpoints include:
- `/api/users` for user management.
- `/api/roles` for role management.

The database schema and queries can be customized in `server.js`.

---

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request. Feel free to open issues for bug reports or feature requests.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For any questions or feedback, feel free to reach out via email: [sk2004k@example.com](mailto:srishtikushwaha70@gmail.com).
