package com.cred.exceptions.handler;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.cred.exceptions.ICustomException;
import com.cred.exceptions.customExceptions.BadCredentialsException;
import com.cred.exceptions.customExceptions.BadRequestException;
import com.cred.exceptions.customExceptions.NotFoundException;
import com.cred.exceptions.customExceptions.SuppressionImpossibleException;
import com.cred.exceptions.messages.general.MessageErrorGeneral;
import com.cred.exceptions.model.ErrorMessage;
import com.cred.exceptions.model.ErrorMessageValidationForm;

@ControllerAdvice 
public class AppHandlerException {
	
	
	@ExceptionHandler(value= {NotFoundException.class, BadCredentialsException.class, SuppressionImpossibleException.class, BadRequestException.class})
    public ResponseEntity<Object> HandlerNotFoundException (ICustomException customException){
        ErrorMessage errorMessage=new ErrorMessage(customException.getMessage(), customException.getDateNow());
        return new ResponseEntity<>(errorMessage, new HttpHeaders(), customException.getStatus());
    }
	
	
	@ExceptionHandler(value = {MethodArgumentNotValidException.class})
    public ResponseEntity<Object> handleNotValidException(MethodArgumentNotValidException exception) {
        Map<String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        ErrorMessageValidationForm errorMessage = new ErrorMessageValidationForm(MessageErrorGeneral.INFORMATIONS_SAISIES_INCORRECTES.getMessage(), LocalDateTime.now(), errors);
        
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }
	
	/*@ExceptionHandler(value = {MethodArgumentNotValidException.class})
    public ResponseEntity<Map<String, String>> handleNotValidException(MethodArgumentNotValidException exception) {
        Map<String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        //ErrorMessage errorMessage=new ErrorMessage(errors.toString(), LocalDateTime.now());
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }*/
}
