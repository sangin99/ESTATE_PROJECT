import React from 'react'
import './style.css'

//                    component                    //
export default function QnaList() {

  //                    render                    //
  return (
    <div>
      <div>
        <div>전체 <span>150건</span> | 페이지 <span>1/100</span></div>
        <div>
          <div>글쓰기</div>
          <div>
            <div></div>
            <div>미완료 보기</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>접수번호</div>
          <div>상태</div>
          <div>제목</div>
          <div>작성자</div>
          <div>작성일</div>
          <div>조회수</div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div>1</div>
          <div></div>
        </div>
        <div>
          <div>
            <input />
          </div>
          <div>검색</div>
        </div>
      </div>
    </div>
  );
}
