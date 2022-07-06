package com.cred.utils;

import java.util.List;
import java.util.Set;

import org.springframework.data.domain.Page;

public interface IUtilsGeneric {

    <T,D> List<D> mapListToOther(List<T> sourceClassList, Class<D> targetClass);
    <T,D> Set<D> mapSetToOther(Set<T> sourceClassSet, Class<D> targetClass);
    <D> D map(Object source, Class<D> destinationType);
    <T,D> Page<D> mapPageToOther(Page<T> sourceClassPage, Class<D> targetClass);
    String generateStringId(int length);
    
}
