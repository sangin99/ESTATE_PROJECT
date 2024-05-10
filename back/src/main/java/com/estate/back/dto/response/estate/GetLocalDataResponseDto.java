package com.estate.back.dto.response.estate;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

import com.estate.back.dto.response.ResponseCode;
import com.estate.back.dto.response.ResponseDto;
import com.estate.back.dto.response.ResponseMessage;
import com.estate.back.repository.resultSet.GetLocalDataResultSet;

import lombok.Getter;

@Getter
public class GetLocalDataResponseDto extends ResponseDto {
    private List<String> yearMonth;
    private List<Integer> sale;
    private List<Integer> lease;
    private List<Integer> monthRent;

    private GetLocalDataResponseDto (List<GetLocalDataResultSet> resultSets) throws Exception {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.yearMonth = null;
        this.sale = null;
        this.lease = null;
        this.monthRent = null;
    }
    
    public static ResponseEntity<GetLocalDataResponseDto> success(List<GetLocalDataResultSet> resultSets) throws Exception {
        GetLocalDataResponseDto responseBody = new GetLocalDataResponseDto(resultSets);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    private List<String> copyYearMonth(List<String> yearMonth) throws Exception {

    }

    private List<Integer> copySale(List<Integer> sale) {

    }

    private List<Integer> copyLease(List<Integer> lease) {

    }

    private List<Integer> copyMonthRent(List<Integer> monthRent) {

    }

}
