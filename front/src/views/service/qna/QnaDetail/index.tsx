import React from 'react'
import './style.css'
import { useUserStore } from 'src/stores'

//                 component                 //
export default function QnaDetail() {
  //                 state                 //
  const { loginUserId, loginUserRole } = useUserStore();
  
  //                 render                 //
  return (
    <div id='qna-detail-wrapper'>
      <div className='qna-detail-main-box'>
        <div className='qna-detail-top-box'>
          <div className='qna-detail-title-box'>제목입니다.</div>
          <div className='qna-detail-info-box'>
            <div className='qna-detail-info'>작성자 k*****</div>
            <div className='qna-detail-info-divider'>{'\|'}</div>
            <div className='qna-detail-info'>작성일 24.05.07</div>
            <div className='qna-detail-info-divider'>{'\|'}</div>
            <div className='qna-detail-info'>조회수 1</div>
          </div>
        </div>
        <div className='qna-detail-contents-box'>내용입니다.</div>
      </div>
      {loginUserRole === 'ROLE_ADMIN' &&
      <div className='qna-detail-comment-write-box'>
        <div className='qna-detail-comment-textarea-box'>
          <textarea className='qna-detail-comment-textarea' placeholder='답글을 작성해주세요.' />
        </div>
        <div className='primary-button'>답변 달기</div>
      </div>
      }
      <div className='qna-detail-comment-box'>
        <div className='primary-badge'>답변</div>
        <div className='qna-detail-comment'>답변입니다.</div>
      </div>
      <div className='qna-detail-button-box'>
        <div className='primary-button'>목록보기</div>
        {loginUserId === ''&&
        <div className='qna-detail-owner-button-box'>
          <div className='second-button'>수정</div>
          <div className='error-button'>삭제</div>
        </div>
        }
      </div>
    </div>
  )

};
