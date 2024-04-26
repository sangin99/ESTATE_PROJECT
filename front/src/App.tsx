import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { AUTH_PATH, LOCAL_PATH,  RATIO_PATH, SERVICE_PATH,
QNA_UPDATE_PATH, QNA_WRITE_PATH, QNA_DEATIL_PATH, QNA_PATH } from './constant';
        
function App() {
  return (        //todo/ 컴포넌트 return 시, () 가 바로 뒤에 붙어와야함
    <Routes>
      <Route path={AUTH_PATH} element={<></>} />
      <Route path={SERVICE_PATH} element={<></>} >
        <Route path={LOCAL_PATH} element={<></>} />
        <Route path={RATIO_PATH} element={<></>} />
        {/* <Route path={QNA_PATH} element={<></>} > */}
        <Route path={QNA_PATH} >
          <Route index element={<></>} />
          <Route path={QNA_WRITE_PATH} element={<></>} />
          <Route path={QNA_DEATIL_PATH} element={<></>} />
          <Route path={QNA_UPDATE_PATH} element={<></>} />
        </Route>
      </Route>
      <Route path='*' element={<></>} />   
    </Routes>
  ); 
}

export default App;

// - authentication (로그인, 회원가입)
// - service
//   - local (지역평균)
//   - ratio (비율계산)
//   - qna (QnA 리스트)
//     - :boardNumber (QnA 상세보기)
//     - write (QnA 작성)
//     - update/:boardNumber (QnA 수정)