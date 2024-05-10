package com.estate.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.estate.back.entity.EstateEntity;
import com.estate.back.repository.resultSet.GetLocalDataResultSet;

@Repository
public interface EstateRepository extends JpaRepository<EstateEntity, Integer> {
    
    // DBMS 식을 GetLocalData 형태로 만들기
    @Query (value =   
    "SELECT `year_mouth` as yearMonth, sale, lease, month_rent as monthRent " +
    "FROM estate " +
    "WHERE `year_month` BETWEEN '2023-01-01' AND '2023-12-01' " +
    "AND `local` = :local; ",
    nativeQuery = true 
    )
    List<GetLocalDataResultSet> getLocalData(@Param("local") String local);
}
