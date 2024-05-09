import React from 'react'
import './style.css'
import SelectBox from 'src/components/SelectBox';



//                event handler                 //
export default function Local() {

  //                render                 //
  return (
    <div id='local-wrapper'>
      <div className='local-top'>
        <div className='local-search-box'>
          <SelectBox />
          <div className='primary-button'>검색</div>
        </div>
        <div className='local-origin-text'>데이터 출처: KOSIS</div>
      </div>

      <div className='local-card'>
        <div className='local-card-title-box'>
          <div className='local-card-title'>매매 평균</div>
          <div className='local-card-unit'>(단위: 백만원)</div>
        </div>
        <div className='local-card-chart-box'>
        </div>
      </div>

      <div className='local-card'>
        <div className='local-card-title-box'>
          <div className='local-card-title'>전세 평균</div>
          <div className='local-card-unit'>(단위: 백만원)</div>
        </div>
        <div className='local-card-chart-box'>          
        </div>
      </div>

      <div className='local-card'>
        <div className='local-card-title-box'>
          <div className='local-card-title'>월세 평균</div>
          <div className='local-card-unit'>(단위: 백만원)</div>
        </div>
        <div className='local-card-chart-box'>          
        </div>
      </div>
    </div>    
  );

}
