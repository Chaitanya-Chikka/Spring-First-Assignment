package com.example.SpringNasa.SpringNasaController;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringNasa.SpringNasaResponse.Springnasaresponse;
import com.example.SpringNasa.SpringNasaService.Springnasaservice;


@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
public class Springnasacontroller {
	
private final Springnasaservice springnasaService;

    
    @Autowired
    public Springnasacontroller(Springnasaservice springnasaService) {
        this.springnasaService = springnasaService;
    }

    @GetMapping("/springapod")
    public List<Springnasaresponse> getSpring(
    		@RequestParam(value = "date", required = false) String date,
			@RequestParam(value = "start_date", required = false) String startDate,
			@RequestParam(value = "end_date", required = false) String endDate,
			@RequestParam(value = "count", required = false) Integer count,
			@RequestParam(value = "thumbs", required = false) Boolean thumbs) {

		return springnasaService.getSpring(date, startDate, endDate, count, thumbs);
    }
}
