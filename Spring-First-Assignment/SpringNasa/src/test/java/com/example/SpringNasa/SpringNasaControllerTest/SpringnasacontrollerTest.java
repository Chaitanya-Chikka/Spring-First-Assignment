package com.example.SpringNasa.SpringNasaControllerTest;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.example.SpringNasa.SpringNasaController.Springnasacontroller;
import com.example.SpringNasa.SpringNasaResponse.Springnasaresponse;
import com.example.SpringNasa.SpringNasaService.Springnasaservice;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyBoolean;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.Matchers.hasSize;


@RunWith(SpringRunner.class) // Add this annotation
@WebMvcTest(Springnasacontroller.class)
public class SpringnasacontrollerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private Springnasaservice springnasaService;

    @Test
    public void testGetSpringEndpoint() throws Exception {
        // Mock service response
        List<Springnasaresponse> mockResponse = Arrays.asList(new Springnasaresponse(), new Springnasaresponse());
        when(springnasaService.getSpring(anyString(), anyString(), anyString(), anyInt(), anyBoolean())).thenReturn(mockResponse);

        // Perform GET request to your endpoint
        mockMvc.perform(get("/springapod"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2))); // Assuming your mock response has 2 items
    }
}
