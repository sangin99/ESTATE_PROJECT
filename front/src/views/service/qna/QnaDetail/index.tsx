import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './style.css'
import { useUserStore } from 'src/stores'
import { getBoardRequest, increaseViewCountRequest, postCommentRequest } from 'src/apis/board';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router';
import ResponseDto from 'src/apis/response.dto';
import { AUTH_ABSOLUTE_PATH, QNA_LIST_ABSOLUTE_PATH } from 'src/constant';
import { GetBoardResponseDto } from 'src/apis/board/dto/response';
import { PostCommentRequestDto } from 'src/apis/board/dto/request';

//                 component                 //
export default function QnaDetail() {

  //                 state                 //
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const { loginUserId, loginUserRole } = useUserStore();
  const { receptionNumber } = useParams();   

  const [cookies] = useCookies();
  const [title, setTitle] = useState<string>('');
  const [writerId, setWriterId] = useState<string>('');
  const [writeDate, setWriteDate] = useState<string>('');
  const [viewCount, setViewCount] = useState<number>(0);
  const [contents, setContents] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);
  const [comment, setComment] = useState<string | null>(null);
  
  //                 function                 //
  const navigator = useNavigate();

  const increaseViewCountResponse = (result: ResponseDto | null) => {
    const message =
      !result ? '서버에 문제가 있습니다.' :
      result.code === 'VF' ? '잘못된 접수번호입니다.' :
      result.code === 'AF' ? '인증에 실패했습니다.' :
      result.code === 'NB' ? '존재하지 않는 접수번호입니다.' :
      result.code === 'DBE' ? '서버에 문제가 있습니다.' :
      '';

    if(!result || result.code !== 'SU') {
      alert(message);
      if (result?.code === 'AF') {
        navigator(AUTH_ABSOLUTE_PATH);
        return;
      }
      navigator(QNA_LIST_ABSOLUTE_PATH);
      return;
    }
    if (!cookies.accessToken || !receptionNumber) return
    getBoardRequest(receptionNumber, cookies.accessToken).then(getBoardResponse);
  };

  const getBoardResponse = (result: GetBoardResponseDto | ResponseDto | null) => {
    const message =
      !result ? '서버에 문제가 있습니다.' :
      result.code === 'VF' ? '잘못된 접수번호입니다.' :
      result.code === 'AF' ? '인증에 실패했습니다.' :
      result.code === 'NB' ? '존재하지 않는 접수번호입니다.' :
      result.code === 'DBE' ? '서버에 문제가 있습니다.' :
      '';

    if(!result || result.code !== 'SU') {
      alert(message);
      if (result?.code === 'AF') {
        navigator(AUTH_ABSOLUTE_PATH);
        return;
      }
      navigator(QNA_LIST_ABSOLUTE_PATH);
      return;
    }

    const { title, writerId, writeDatetime, viewCount, contents, status, comment } = result as GetBoardResponseDto;
    setTitle(title);
    setWriterId(writerId);
    setWriteDate(writeDatetime);
    setViewCount(viewCount);
    setContents(contents);
    setStatus(status);
    setComment(comment);
  };

  const postCommentResponse = (result: ResponseDto | null) => {
      const message = 
        !result ? '서버에 문제가 있습니다.' :
        result.code === 'AF' ? '권한이 없습니다.' :
        result.code === 'VF' ? '입력 데이터가 올바르지 않습니다.' :
        result.code === 'NB' ? '존재하지 않는 게시물입니다.' :
        result.code === 'WC' ? '이미 답글이 작성된 게시물 입니다.' : 
        result.code === 'DBE' ? '서버에 문제가 있습니다.' : '';
      
      if (!result || result.code !== 'SU') {
        alert(message);
        return;
      }

      if (!receptionNumber || !cookies.accessToken) return;
      getBoardRequest(receptionNumber, cookies.accessToken).then(getBoardResponse);
  };

  //                 event handler                 //
  const onCommentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if(status || loginUserRole !== 'ROLE_ADMIN') return;
      const comment = event.target.value;
      setComment(comment);

      if (!commentRef.current) return;
      commentRef.current.style.height = 'auto';
      commentRef.current.style.height = `${commentRef.current.scrollHeight }px`;
  };

  const onCommentSubmitClickHandler = () => {
    if (!comment || comment.trim() || loginUserRole !== 'ROLE_ADMIN' || !cookies.accessToken)
    return;
    if (!receptionNumber) return;
    
    const requestBody: PostCommentRequestDto = { comment };
    postCommentRequest(receptionNumber, requestBody, cookies.accessToken).then(postCommentResponse);
  };

  //                 effect                 //  Increase, GetBoard : API 호출
  useEffect(() => {
    if (!cookies.accessToken || !receptionNumber) return
    increaseViewCountRequest(receptionNumber, cookies.accessToken).then(increaseViewCountResponse);
  }, []);

  //                 render                 //
  const covedWriterId = writerId !== '' && (writerId[0] + '*'.repeat(writerId.length - 1));    // k****** 처리 하기
  return (
    <div id='qna-detail-wrapper'>
      <div className='qna-detail-main-box'>
        <div className='qna-detail-top-box'>
          <div className='qna-detail-title-box'>{title}</div>
          <div className='qna-detail-info-box'>
            <div className='qna-detail-info'>작성자 {covedWriterId}</div>
            <div className='qna-detail-info-divider'>{'\|'}</div>
            <div className='qna-detail-info'>작성일 {writeDate}</div>
            <div className='qna-detail-info-divider'>{'\|'}</div>
            <div className='qna-detail-info'>조회수 {viewCount}</div>
          </div>
        </div>
        <div className='qna-detail-contents-box'>{contents}</div>
      </div>
      {loginUserRole === 'ROLE_ADMIN' && !status &&
      <div className='qna-detail-comment-write-box'>
        <div className='qna-detail-comment-textarea-box'>
          <textarea rows={1} className='qna-detail-comment-textarea' placeholder='답글을 작성해주세요.' value={comment == null ? '' : comment} onChange={onCommentChangeHandler} />
        </div>
        <div className='primary-button' onClick={onCommentSubmitClickHandler}>답글 달기</div>
      </div>
      }
      {status &&
      <div className='qna-detail-comment-box'>
        <div className='primary-badge'>답글</div>
        <div className='qna-detail-comment'>{comment}</div>
      </div>
      }
      <div className='qna-detail-button-box'>
        <div className='primary-button'>목록보기</div>
        {loginUserId === writerId &&
        <div className='qna-detail-owner-button-box'>
          <div className='second-button'>수정</div>
          <div className='error-button'>삭제</div>
        </div>
        }
      </div>
    </div>
  )

};
