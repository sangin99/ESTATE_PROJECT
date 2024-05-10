package com.estate.back.repository.resultSet;

public interface GetLocalDataResultSet {
    // 조회 결과를 받을 수 있는
    String getYearMonth();
    Integer getSale();
    Integer getLease();
    Integer getMonthRent();
}
