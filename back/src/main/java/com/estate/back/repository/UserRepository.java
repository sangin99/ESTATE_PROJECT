package com.estate.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estate.back.entity.UserEntity;

// Estate 데이터베이스의 User 테이블의 작업을 위한 리포지토리

public interface UserRepository extends JpaRepository<UserEntity, String> {
}
