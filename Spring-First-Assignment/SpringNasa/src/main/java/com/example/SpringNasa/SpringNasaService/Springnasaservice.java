package com.example.SpringNasa.SpringNasaService;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.SpringNasa.SpringNasaResponse.Springnasaresponse;


@Service
public class Springnasaservice {
	@Value("${nasa.api.key}")
    private String apiKey;

    private static final String NASA_APOD_URL = "https://api.nasa.gov/planetary/apod";

    public List<Springnasaresponse> getSpring(String date, String StartDate, String EndDate, Integer count, Boolean thumbs) {
        RestTemplate restTemplate = new RestTemplate();
        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(NASA_APOD_URL)
                .queryParam("api_key", apiKey)
                .queryParam("date", date)
                .queryParam("start_date", StartDate)
                .queryParam("end_date", EndDate)
                .queryParam("count", count)
                .queryParam("thumbs", thumbs);

        String url = uriBuilder.toUriString();

        // Attempt to fetch as a list first
        try {
            ResponseEntity<List<Springnasaresponse>> responseEntity = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Springnasaresponse>>() {}
            );
            return responseEntity.getBody();
        } catch (Exception e) {
            // Fallback for single object response
            try {
            	Springnasaresponse singleResponse = restTemplate.getForObject(url, Springnasaresponse.class);
                return Collections.singletonList(singleResponse);
            } catch (Exception ex) {
                // Handle the error appropriately
                throw new RuntimeException("Error fetching APOD data: " + ex.getMessage(), ex);
            }
        }
    }

}
