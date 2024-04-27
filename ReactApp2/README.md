**Spring + React App**

This application combines a Spring Boot backend with a React frontend to fetch and display data from the NASA API. Below are the code updates and features implemented in this project:

**Code Updates and Features:**

State Storage Update: Implemented the usage of React store (Zustand) to manage state storage for the API responses. Data fetched from the API is stored in the React store and made available throughout the application.

React Router Integration: Utilized React Router to create multiple pages within the application. The main page displays data fetched from the NASA API, while a second page allows users to view the same data stored in the React store.

Webpack Configuration: Configured Webpack build for the React application instead of using create-react-app.

Zustand Integration: Integrated Zustand for state management in the React application. Zustand is used to maintain API information, ensuring it is available throughout the app. API calls are made directly from the store.

**Project Structure:
SpringNasa (Spring Boot API app)**

pom.xml: Maven configuration file for managing project dependencies and build settings.

SpringNasaApplication.java: Entry point of the Spring Boot application.

Springnasacontroller.java: Controller class responsible for handling API requests and responses.

Springnasaresponse.java: POJO class representing the response structure from the NASA API.

Springnasaservice.java: Service class responsible for making requests to the NASA API.
    
**ReactApp2 (Reactjs app)**

App.js: Main component handling routing between different pages of the React application.

Routes.jsx: Defines the routes for navigating between different pages using React Router.

store.js: Zustand store configuration for managing application state.

index.js: Entry point of the React application, renders the main component.

App.test.js: Unit test file for the main component.

SpringNasaComponent.jsx: Component responsible for fetching and displaying data from the NASA API.

SpringNasaComponent.css: CSS styles for the SpringNasaComponent.

SecondPage.jsx: Additional page component to display data stored in the React store.

SecondPage.css: CSS styles for the SecondPage component.

**Usage:**

To run the application:

Ensure you have Java and Maven installed for running the Spring Boot backend.

Navigate to the SpringNasa directory and run the Spring Boot application using the command:
    
./mvnw spring-boot:run

Ensure you have Node.js and npm installed for running the React frontend.

Navigate to the ReactApp2 directory and install dependencies using:

npm install

Start the React development server using:

npm start

Access the application in your web browser at http://localhost:3000.

**Contributors:**

Chaitanya Chikka

