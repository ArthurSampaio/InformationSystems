package com.si.cinemao.exception;

/**
 * Created by sampaio on 17/07/17.
 */
public class RegisteredSeriesInUserException extends CinemaoRuntimeError {

    private static final String MESSAGE = "Series already registered in this specif user";


    public RegisteredSeriesInUserException() {
        super(MESSAGE);
    }


}
