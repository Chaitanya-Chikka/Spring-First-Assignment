# Spring-First-Assignment

SpringNasa Application

Overview:
This is a Spring Boot application that fetches Astronomy Picture of the Day (APOD) data from NASA's API. The application provides a RESTful API endpoint /springapod to retrieve APOD information based on specified parameters.
Getting Started

To run the application, make sure you have Java and Maven installed on your machine. You can run the application using any IDE.
The application will start on port 8080 by default.
API Endpoint
GET /springapod

Retrieve APOD information based on the specified parameters.

Parameters:
    date (optional): Specific date for APOD.
    StartDate (optional): Start date for a range of APOD entries.
    EndDate (optional): End date for a range of APOD entries.
    count (optional): Number of APOD entries to retrieve.
    thumbs (optional): Boolean flag to include thumbnails.

Example Request

http

GET http://localhost:8080/springapod?date=2022-01-01&count=5&thumbs=true

Example Response

json

[
  {
    "date": "2022-01-01",
    "explanation": "Lorem ipsum dolor sit amet...",
    "url": "https://example.com/apod1",
    "title": "APOD 1",
    "mediaType": "image",
    "thumbnailUrl": "https://example.com/thumbnail1.jpg"
  },
  {
    "date": "2022-01-02",
    "explanation": "Lorem ipsum dolor sit amet...",
    "url": "https://example.com/apod2",
    "title": "APOD 2",
    "mediaType": "video",
    "thumbnailUrl": "https://example.com/thumbnail2.jpg"
  },
  // Additional entries...
]

Configuration

The application uses an API key for NASA's APOD API, which should be provided in the application.properties file:

properties

nasa.api.key=YOUR_NASA_API_KEY
server.port=8080

Replace YOUR_NASA_API_KEY with your actual NASA API key.
Note

    The application fetches APOD data from NASA's API using the provided parameters.
    It handles both list and single object responses from the API.
    In case of an error, appropriate exceptions are thrown and can be handled accordingly.
