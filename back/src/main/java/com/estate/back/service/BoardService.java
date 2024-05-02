package com.estate.back.service;

import org.springframework.http.ResponseEntity;

import com.estate.back.dto.reponse.ResponseDto;
import com.estate.back.dto.request.board.PostBoardRequestDto;

public interface BoardService {
    
    ResponseEntity<ResponseDto> postBoard(PostBoardRequestDto dto, String userId);
}
