
**Spring NASA React Application:**

This project demonstrates the integration of a Spring Boot backend with a React frontend to interact with NASA's Astronomy Picture of the Day (APOD) API. The backend retrieves data from the NASA API and exposes it via RESTful endpoints, while the frontend presents the fetched data to the user in an interactive manner.


**Table of Contents:**

•	Prerequisites

•	Installation

•	Usage

•	Folder Structure

•	Backend Details

•	Frontend Details


**Prerequisites:**

Ensure you have the following software installed on your machine:

•	Java Development Kit (JDK) 8 or higher

•	Node.js and npm (Node Package Manager)

•	Maven

•	Git



**Installation:**

1.	Clone the repository to your local machine:

  	git clone <repository_url>
2.	Navigate to the backend directory:

  	cd SpringNasa
3.	Build the backend application using Maven:

  	mvn clean package
4.	Run the backend application:

  	java -jar target/SpringNasa-<version>.jar
5.	Open a new terminal window and navigate to the frontend directory:

  	cd reactapplication
6.	Install frontend dependencies:

  	npm install



**Usage:**

•	After completing the installation steps, you can access the application by navigating to http://localhost:3000 in your web browser.

•	Use the provided date selectors to fetch APOD images for a specific date or date range.

•	The application will display the APOD images along with their details such as date, title, and explanation.

Example request:

http://localhost:3000

Example response:

 ![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/d59250e9-50a0-46a8-ac55-c99f8a7935cc)

For a specific date to fetch NASA Astronomy Picture of the Day (APOD):

![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/079e3304-e963-4b78-93c3-35289458607d)

 
For a date range to fetch images between certain dates:

 ![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/db1d5a37-4e61-40d3-a4a8-3d0527263390)


Clicking the "Clear" button will reset the inputs and display today's information again.


**Folder Structure:**

The repository contains two main directories:

•	SpringNasaService: Contains the Spring Boot backend application.

•	SpringNasaComponent: Contains the React frontend application.

**Backend Details:**

•	The backend application fetches data from NASA's APOD API using the provided API key.

•	It exposes RESTful endpoints to retrieve APOD images based on various parameters such as date, date range, and count.

•	The Springnasaservice class handles communication with the NASA API using RestTemplate.

•	Configuration properties such as the NASA API key are stored in application.properties.

•	Logging is implemented using SLF4J for debugging purposes.

**Frontend Details:**

•	The front-end application is built using React.js.

•	It communicates with the backend REST API to fetch APOD images and data.

•	The SpringNasaComponent component serves as the main entry point for the front-end application.

•	It allows users to select dates, fetch APOD images, and displays them along with their details.

•	Styling is implemented using CSS modules to ensure a responsive and visually appealing user interface.


**SpringNasa Application:**

**Overview:** 
This is a Spring Boot application that fetches Astronomy Picture of the Day (APOD) data from NASA's API. The application provides a RESTful API endpoint /springapod to retrieve APOD information based on specified parameters. 

To run the application, make sure you have Java and Maven installed on your machine. You can run the application using any IDE. The application will start on port 8080 by default. API Endpoint GET /springapod

The Spring NASA Service provides several parameters that users can use to customize their requests when fetching data from NASA's Astronomy Picture of the Day (APOD) API. These parameters allow users to specify the date, start date, end date, count, and whether to include thumbnail URLs in their queries. Let's delve deeper into each parameter:

1.	**Date (date):**
   
    •	This parameter allows users to specify the date of the picture they want to retrieve from the APOD API.

    •	Format: YYYY-MM-DD.

    •	Example: date=2024-03-14.

2.	**Start Date (startDate):**
   
    •	Users can use this parameter to specify the start date for fetching multiple images within a range.

    •	Format: YYYY-MM-DD.

    •	Example: startDate=2024-03-01.

3.	**End Date (endDate):**
   
    •	Similar to the start date, this parameter specifies the end date for fetching multiple images within a range.

    •	Format: YYYY-MM-DD.

    •	Example: endDate=2024-03-14.

4.	**Count (count):**
    
    •	This parameter determines the number of images to fetch when querying within a date range.

    •	It works in conjunction with the start date and end date parameters.

    •	Example: count=5 will fetch the latest 5 images within the specified date range.

5.	**Thumbnails (thumbs):**
    
    •	A boolean parameter that controls whether to include thumbnail URLs in the response.

    •	If set to true, thumbnail URLs will be included.

    •	If set to false or not provided, thumbnail URLs will be excluded.

    •	Example: thumbs=true.


**Features:**

    •	Fetch images and related information from NASA's APOD API.

    •	Support for querying by date, start date, end date, count, and thumbs.

    •	Error handling for API requests and JSON parsing.

**Setup:**

1.	Clone the Repository:

   ![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/c43512a2-7c11-44a4-aaf9-ba358a8c4948)

 
2.	Build the Project:

  ![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/11509bac-9960-409b-a7fd-3a5aa730f691)


3.	Run the Application:

   ![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/fdcda495-fe29-48e5-86a1-c5646be94f64)

 
4.	Configuration:
   
    • Ensure you have a valid NASA API key. You can obtain one from NASA's API Portal.

    • Update the ‘application.properties’ file with your NASA API key.

**Dependencies:**

    •	Spring Boot

    •	Spring Web

    •	Jackson (for JSON processing)

    •	SLF4J (Simple Logging Facade for Java)

**Example request:**

http://localhost:8080/springapod


**Example response:**

![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/8a335d74-35b8-4770-8eb3-354e5be18fec)

 
For a specific date:

http://localhost:8080/springapod?date=2024-02-01

![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/e1f926eb-f711-42cb-89c9-696881477fa6)

 
For specific range of dates:

http://localhost:8080/springapod?start_date=2024-02-11&end_date=2024-02-13

![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/ae642302-daa8-4a37-9117-22bc2966a440)

 
For count:

http://localhost:8080/springapod?count=2

![image](https://github.com/Chaitanya-Chikka/Spring-First-Assignment/assets/158842901/da9d6b58-7918-433b-82ec-b5744dacf554)

 
 Ensure proper error handling for cases where API requests fail.
 Logging is implemented using SLF4J for debugging purposes. Adjust logging levels as needed in ‘application.properties’ file.

