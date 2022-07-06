package com.cred.security;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import com.cred.exceptions.messages.users.MessageErrorUser;

@Component
public class CustomAuthenticationFailureHandler implements AuthenticationEntryPoint {
 
  

	@Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException {

		//System.out.println("here : " + response.getOutputStream().toString());
		response.setContentType("application/json");
		if(response.getStatus() == 401) {
			String message = "{\"message\": " +  "\"" + MessageErrorUser.BAD_CREDENTIALS.getMessage() + "\"}";
			response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			response.getOutputStream().println(message);
		} else {
			String message = "{\"message\": " +  "\"" + MessageErrorUser.NOT_AUTHORIZED.getMessage() + "\"}";
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			response.getOutputStream().println(message);
		}
    }
}