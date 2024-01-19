##React App Template with Create React App and Tailwind CSS
#Overview
This React app template is built using Create React App (CRA) and styled with Tailwind CSS. It features a well-structured architecture, leverages various dependencies and libraries, and incorporates custom hooks for enhanced functionality.

#Tech Stack
Create React App (CRA): Used for creating a React app with a pre-configured setup.
Tailwind CSS: Used for styling and creating a responsive design.

#Dependencies and Libraries
Tailwind CSS Plugins:
@heroicons/react: Icon library for UI components.
@radix-ui/react-avatar: Provides avatar components.
@radix-ui/react-switch: Offers switch components.
dotenv: Manages environment variables.
react-router-dom: Enables navigation within the app.
react-spinners: Implements spinners for loading states.
sonner: A library for toasts or notifications.

#React Hooks:
useEffect: Used for side effects like data fetching.
useState: Manages state in functional components.
useContext: Facilitates state management via context.

#Custom Hooks:
useUserDetails: Fetches user details.
useValidation: Custom hook for form validation.

#App Flow
Authentication
User lands on the login component ("/").
After successful authentication, the user is redirected to the dashboard.
Invalid credentials trigger a toast notification.
Routing
Unauthorized attempts to access "/dashboard" redirect to the login page.
Local Storage
Utilizes local storage for one-time login functionality.
Features
Logout button for user sessions.
Theme toggle switch for UI customization.
Guest Login
Implements a guest login feature without authentication.
Utilizes geolocation to display the current location and weather using a third-party API (freeweatherapi).
Handles error states and edge cases efficiently.
Available Scripts
In the project directory, you can run:

npm start: Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

npm test: Launches the test runner in the interactive watch mode.

npm run build: Builds the app for production to the build folder.

npm run eject: Ejects from Create React App configuration (one-way operation).

Learn More
Create React App Documentation
React Documentation
Additional Sections
Code Splitting
Analyzing the Bundle Size
Making a Progressive Web App
Advanced Configuration
Deployment
Troubleshooting
