package com.si.cinemao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by sampaio on 18/07/17.
 */
@ResponseStatus(value = HttpStatus.BAD_REQUEST)

public class SeriesNotFoundException extends CinemaoRuntimeError {

    private static final String MESSAGE = "SERIES NOT FOUND";
    public SeriesNotFoundException(String message) {
        super(message);
    }

    public SeriesNotFoundException() {
        super(MESSAGE);
    }



}
