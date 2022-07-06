package com.cred.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.cred.SpringApplicationContext;

@Configuration
public class Beans {

	@Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
	
	@Bean                             // this method will be executed every time we want to encrypt something
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public SpringApplicationContext springApplicationContext(){
		return new SpringApplicationContext();
	}
	
}
