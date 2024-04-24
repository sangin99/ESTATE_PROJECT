package com.estate.back.service;

import org.springframework.http.ResponseEntity;

import com.estate.back.dto.reponse.ResponseDto;
import com.estate.back.dto.request.auth.EmailAuthCheckRequestDto;
import com.estate.back.dto.request.auth.EmailAuthRequestDto;
import com.estate.back.dto.request.auth.IdCheckRequestDto;
import com.estate.back.dto.request.auth.SignInRequestDto;
import com.estate.back.dto.request.auth.SignUpRequestDto;

public interface AuthService {
    
    ResponseEntity<? super SignInRequestDto> signIn (SignInRequestDto dto);

    ResponseEntity<ResponseDto> idCheck(IdCheckRequestDto dto);
    ResponseEntity<ResponseDto> emailAuth(EmailAuthRequestDto dto);
    ResponseEntity<ResponseDto> emailAuthCheck(EmailAuthCheckRequestDto dto);
    ResponseEntity<ResponseDto> signUp (SignUpRequestDto dto);
}
