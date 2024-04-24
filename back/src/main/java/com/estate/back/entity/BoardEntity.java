package com.estate.back.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Estate 데이터베이스의 board 테이블과 매핑되는 Entity 클래스
@Entity(name="board")
@Table(name="board")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reception_number;
    private Boolean status;
    private String title;
    private String contents;
    private String writer_id;
    private String writer_datetime;
    private Integer view_count;
    private String comment;
}
