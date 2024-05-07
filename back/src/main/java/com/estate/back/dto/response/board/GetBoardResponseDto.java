package com.estate.back.dto.response.board;

import com.estate.back.dto.response.ResponseCode;
import com.estate.back.dto.response.ResponseDto;
import com.estate.back.dto.response.ResponseMessage;
import com.estate.back.entity.BoardEntity;

import lombok.Getter;

@Getter
public class GetBoardResponseDto extends ResponseDto {
    private Integer receptionNumber;
    private boolean status;
    private String title;
    private String writerId;
    private String writeDateTime;
    private Integer viewCount;
    private String contents;
    private String comment;

    private GetBoardResponseDto(BoardEntity boardEntity) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.receptionNumber = boardEntity.getReceptionNumber();
        this.status = boardEntity.getStatus();
        this.title = boardEntity.getTitle();
        this.writerId = boardEntity.getWriterId();

        this.viewCount = boardEntity.getViewCount();
        this.contents = boardEntity.getContents();
        this.comment = boardEntity.getComment();
    }
}
