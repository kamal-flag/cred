package com.cred.utils;

import java.security.SecureRandom;
import java.sql.Timestamp;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Page;

@Configuration
public class UtilsGenericImpl implements IUtilsGeneric{

	private final Random RANDOM = new SecureRandom();
	private final String ALPHANUM = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	private final ModelMapper modelMapper;
	
	
	public UtilsGenericImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }
	
	@Override
	public <T , D> List<D> mapListToOther(List<T> sourceClassList, Class<D> targetClass) {
        return sourceClassList.stream().map(i -> modelMapper.map(i, targetClass)).collect(Collectors.toList());
	}

	@Override
	public <T, D> Set<D> mapSetToOther(Set<T> sourceClassSet, Class<D> targetClass) {
		return sourceClassSet.stream().map(i -> modelMapper.map(i, targetClass)).collect(Collectors.toSet());
	}

	@Override
	public <D> D map(Object source, Class<D> destinationType) {
        return modelMapper.map(source, destinationType);
	}

	@Override
	public <T, D> Page<D> mapPageToOther(Page<T> sourceClassPage, Class<D> targetClass) {
        return  sourceClassPage.map(i -> modelMapper.map(i, targetClass));
	}
	
	
	@Override
	public String generateStringId(int length) {
		
		StringBuilder returnValue = new StringBuilder(length);
		for (int i = 0; i < length; i++) {
			returnValue.append(ALPHANUM.charAt(RANDOM.nextInt(ALPHANUM.length())));
		}
		
		returnValue.append( new Timestamp(System.currentTimeMillis()).getTime());
		return returnValue.toString();
	}

}
