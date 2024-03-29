package com.example.SpringNasa.SpringNasaService;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
//import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import com.example.SpringNasa.SpringNasaResponse.Springnasaresponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
//import org.springframework.web.client.RestTemplate;
//import org.springframework.web.util.UriComponentsBuilder;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Arrays;
//import java.util.Collections;
//import java.util.List;
//import java.util.Optional;

@Service
public class Springnasaservice {
	private static final Logger logger = LoggerFactory.getLogger(Springnasaservice.class);

	@Autowired
	private ObjectMapper objectMapper;

	@Value("${nasa.api.key}")
	private String nasaApiKey;

	private final String NASA_APOD_URL = "https://api.nasa.gov/planetary/apod";

	public List<Springnasaresponse> getSpring(String date, String startDate, String endDate, Integer count, Boolean thumbs) {

		// Build the URL based on the parameters
		UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(NASA_APOD_URL)
				.queryParam("api_key", nasaApiKey).queryParam("date", date).queryParam("start_date", startDate)
				.queryParam("end_date", endDate).queryParam("count", count).queryParam("thumbs", thumbs);

		String apiUrl = builder.toUriString();

		RestTemplate restTemplate = new RestTemplate();

		try {
			// Log the API URL for debugging purposes
			logger.info("API URL: {}", apiUrl);

			ResponseEntity<String> responseEntity = restTemplate.exchange(apiUrl, HttpMethod.GET, null, String.class);

			String responseBody = responseEntity.getBody();

			// Log the raw response for debugging purposes
			logger.info("Raw Response: {}", responseBody);

			// Attempt to deserialize the response as an array
			try {
				Springnasaresponse[] responses = objectMapper.readValue(responseBody, Springnasaresponse[].class);

				// Log the array response for debugging purposes
				logger.info("Array Response: {}", Arrays.toString(responses));

				return Arrays.asList(responses);
			} catch (JsonProcessingException arrayException) {
				// If deserialization as array fails, try deserializing as a single object
				try {
					Springnasaresponse singleResponse = objectMapper.readValue(responseBody, Springnasaresponse.class);

					// Log the single response for debugging purposes
					logger.info("Single Response: {}", singleResponse);

					return Collections.singletonList(singleResponse);
				} catch (JsonProcessingException singleException) {
					// If deserialization as both array and single object fails, log the exception
					logger.error("Error parsing JSON response: {}", singleException.getMessage(), singleException);
					return Collections.emptyList();
				}
			}
		} catch (RestClientException e) {
			// Log the exception for debugging purposes
			logger.error("Error making API request: {}", e.getMessage(), e);

			return Collections.emptyList();
		}

	}
}