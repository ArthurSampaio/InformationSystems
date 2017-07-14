package com.si.cinemao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by sampaio on 14/07/17.
 */

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class CinemaoRuntimeError extends RuntimeException {

    public CinemaoRuntimeError(String message){
        super("Error in CinemaoAPI: " + message);
    }


}
