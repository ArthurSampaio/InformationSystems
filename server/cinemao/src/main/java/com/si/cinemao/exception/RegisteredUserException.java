package com.si.cinemao.exception;

/**
 * Created by sampaio on 14/07/17.
 */
public class RegisteredUserException extends CinemaoRuntimeError {

    private static final String MESSAGE = "User already registered";

    public RegisteredUserException(String message) {
        super(message);
    }

    public RegisteredUserException() {
        super(MESSAGE);
    }




}
