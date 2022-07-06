package com.cred.security;



import java.io.IOException;

import javax.naming.AuthenticationException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.cors.CorsConfiguration;

import org.springframework.security.authentication.BadCredentialsException;
import com.cred.services.IUserService;


@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter{

	
	@Autowired
    private CustomAuthenticationFailureHandler authenticationEntryPoint;
	
	@Value("${security.authentification.jwt.sign_up_url}")
	private String signUpURL;
	
	@Value("${security.authentification.jwt.expiration_time}")
	private long expirationTime;
	
	@Value("${security.authentification.jwt.secret}")
	private String secretToken;
	
	private final IUserService userDetailsService;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	
	public WebSecurity(IUserService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.userDetailsService = userDetailsService;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http
			.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues()).and() //cors()  for communicate with others system (angular, react, ...)
			.csrf().disable()
			.authorizeRequests()
				.antMatchers(HttpMethod.POST, signUpURL)
				.permitAll()
				.anyRequest().authenticated()   // others requests are forced to authenticate 
				.and()
				.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint).and()
				.addFilter(getAuthenticationFilter())
				.addFilter(new AuthorizationFilter(authenticationManager(),secretToken))
				.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS); // make session in mode STATELESS (type if thi application is the microservices)
	}
	
	protected AuthenticationFilter getAuthenticationFilter() throws Exception {
		final AuthenticationFilter filter = new AuthenticationFilter(authenticationManager(),expirationTime,secretToken);
		filter.setFilterProcessesUrl("/users/login");
		//filter.setAuthenticationFailureHandler(authenticationFailureHandler());
		return filter;
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	}
	
	/*@Bean
    public AuthenticationFailureHandler authenticationFailureHandler() {
        return new CustomAuthenticationFailureHandler();
		//return new CustomAuthenticationFailureHandler();
    }*/
	
	
}


