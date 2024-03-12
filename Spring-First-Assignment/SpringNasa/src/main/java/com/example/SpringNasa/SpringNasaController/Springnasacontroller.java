package com.example.SpringNasa.SpringNasaController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringNasa.SpringNasaResponse.Springnasaresponse;
import com.example.SpringNasa.SpringNasaService.Springnasaservice;



@RestController
public class Springnasacontroller {
	
private final Springnasaservice springnasaService;

    
    @Autowired
    public Springnasacontroller(Springnasaservice springnasaService) {
        this.springnasaService = springnasaService;
    }

    @GetMapping("/springapod")
    public List<Springnasaresponse> getSpring(@RequestParam(required = false) String date,
                                @RequestParam(required = false) String StartDate,
                                @RequestParam(required = false) String EndDate,
                                @RequestParam(required = false) Integer count,
                                @RequestParam(required = false) Boolean thumbs) {
        return springnasaService.getSpring(date, StartDate, EndDate, count, thumbs);
    }

}
