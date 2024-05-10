package com.estate.back.service.implementation;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.estate.back.dto.response.ResponseDto;
import com.estate.back.dto.response.estate.GetLocalDataResponseDto;
import com.estate.back.repository.EstateRepository;
import com.estate.back.repository.resultSet.GetLocalDataResultSet;
import com.estate.back.service.EstateService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EstateServiceImplementation implements EstateService {
    
    private final EstateRepository estateRepository;

    @Override
    public ResponseEntity<? super GetLocalDataResponseDto> getLocalData(String local) {
        try {
            
            List<GetLocalDataResultSet> resultSets = estateRepository.getLocalData(local);
            return GetLocalDataResponseDto.success(resultSets);    // 차후, throw 를 위해
            

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

    }
}
