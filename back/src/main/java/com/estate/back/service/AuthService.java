package com.estate.back.service;

import org.springframework.http.ResponseEntity;

import com.estate.back.dto.reponse.ResponseDto;
import com.estate.back.dto.request.auth.IdCheckRequestDto;

public interface AuthService {
    ResponseEntity<ResponseDto> idCheck(IdCheckRequestDto dto);
}
