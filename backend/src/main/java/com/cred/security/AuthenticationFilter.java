package com.cred.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.cred.SpringApplicationContext;
import com.cred.exceptions.customExceptions.BadCredentialsException;
import com.cred.services.IUserService;
import com.cred.services.dto.UserDto;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authenticationManager;
	private long expirationTime;
	private String secretToken;

	public AuthenticationFilter(AuthenticationManager authenticationManager, long expirationTime, String secretToken) {
		super(authenticationManager);
		this.authenticationManager = authenticationManager;
		this.expirationTime = expirationTime;
		this.secretToken = secretToken;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse resp)
			throws AuthenticationException {
		try {

			UserLoginRequest creds = new ObjectMapper().readValue(req.getInputStream(), UserLoginRequest.class);

			/*
			 * UsernamePasswordAuthenticationToken authentication = new
			 * UsernamePasswordAuthenticationToken(creds.getEmail(), creds.getPassword(),
			 * new ArrayList<>());
			 * 
			 * Authentication authenticated =
			 * authenticationManager.authenticate(authentication);
			 * 
			 * if(authenticated.isAuthenticated()) { return authenticated; }
			 * 
			 * 
			 * throw new BadCredentialsException("login incorrect");
			 */
			return authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(creds.getEmail(), creds.getPassword(), new ArrayList<>()));

		} catch (IOException e) {
			throw new RuntimeException("bad credentials");
		}
		/*
		 * } catch (IOException e) { throw new
		 * BadCredentialsException("my message 123"); }
		 */
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain,
			Authentication auth) throws IOException, ServletException {

		String userName = ((User) auth.getPrincipal()).getUsername();

		IUserService userService = (IUserService) SpringApplicationContext.getBean("userServiceImpl");
		UserDto userDto = userService.getUser(userName).get();

		String token = Jwts.builder() // builder method allows to generate the token
				.setSubject(userName).claim("id", userDto.getUserId())
				.claim("name", userDto.getNom() + " " + userDto.getPrenom())
				.setExpiration(new Date(System.currentTimeMillis() + expirationTime))
				.signWith(SignatureAlgorithm.HS512, secretToken).compact();

		Cookie jwtTokenCookie = new Cookie("JWT", token);

		jwtTokenCookie.setMaxAge(864000);
		jwtTokenCookie.setSecure(false);
		jwtTokenCookie.setHttpOnly(true);
		jwtTokenCookie.setPath("/");
		/* jwtTokenCookie.setDomain("example.com"); */

		res.addHeader(SecurityConstants.HEADER_STRING, SecurityConstants.TOKEN_PREFIX + token);
//		res.addHeader("user_id", userDto.getUserId());
		res.addCookie(jwtTokenCookie);

		// res.getWriter().write("{\"token\": \"" + token + "\" }");

		// res.getWriter().write("{\"token\": \"" + token + "\", \"id\" : \"" +
		// userDto.getUserId() + "\" }");

		res.getWriter().write("{\"token\": \"" + token + "\", \"user\" : { \"nom\": \"" + userDto.getNom() + "\","
				//+ "\"prenom\": \"" + userDto.getPrenom() + "\"," + "\"email\": \"" + userDto.getEmail() + "\",\"role\": " + userDto.getRole() +" }" +
				
				+ "\"prenom\": \"" + userDto.getPrenom() + "\"," + "\"email\": \"" + userDto.getEmail() + "\",\"role\": " + userDto.getRole() +" ,\"id\": " + userDto.getId() + " }" +

				"}");
	}

	@Override
	protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException failed) throws IOException, ServletException {

		/*
		 * System.out.println("failed" + failed.toString()); throw new
		 * BadCredentialsException("login incorrect");
		 */

		response.setStatus(401);
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Authentication Failed");
	}

	static class UserLoginRequest {

		private String email;
		private String password;

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

	}

}
