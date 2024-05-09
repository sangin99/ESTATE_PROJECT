import React, { useState } from 'react'
import './style.css'
import SelectBox from 'src/components/SelectBox';
import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

//                component                 //
export default function Local() {

  const saleOptions = {
    responsive: false,
    scales: {
      y: {
        min: 40,
        max: 400,
        ticks: {
          stepSize: 40
        }
      }
    }
  };

  const leaseOptions = {
    responsive: false,
    scales: {
      y: {
        min: 40,
        max: 400,
        ticks: {
          stepSize: 40
        }
      }
    }
  };

  const mouthRentOptions = {
    responsive: false,
    scales: {
      y: {
        min: 40,
        max: 400,
        ticks: {
          stepSize: 40
        }
      }
    }
  };
  
  //                state                 //
  const [selectLocal, setSelectLocal] = useState<string>('');

  //                event handler                 //
  const onLocalChangeHandler = (selectLocal: string) => {
    setSelectLocal(selectLocal);
  };

  const saleDate = {
      labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
      datasets: [{
          label: '매매 평균',
          data: [225,120,224,310,142,210,255,240,210,110,260,210,214,236,154,210,241,179],
          borderColor: 'rgba(58,87,232,1)',
          backgroundColor: 'rgba(58,87,232,1)'
      }]
    };

    const leaseDate = {
      labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
      datasets: [{
          label: '전세 평균',
          data: [100,224,175,224,200,210,87,240,210,272,300,210,154,123,243,195,242,281],
          borderColor: 'rgba(58,87,232,1)',
          backgroundColor: 'rgba(58,87,232,1)'
      }]
    };

    const mouthRentDate = {
      labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
      datasets: [{
          label: '월세 평균',
          data: [225,120,224,354,200,210,255,340,210,272,90,210,180,243,194,271,265,220],
          borderColor: 'rgba(58,87,232,1)',
          backgroundColor: 'rgba(58,87,232,1)'
      }]
    };

  //                render                 //
  return (
    <div id='local-wrapper'>
      <div className='local-top'>
        <div className='local-search-box'>
          <SelectBox value={selectLocal} onChange={onLocalChangeHandler} />
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
          <Line width={'1086px'} height={'238px'} options={saleOptions} data={saleDate} />
        </div>
      </div>

      <div className='local-card'>
        <div className='local-card-title-box'>
          <div className='local-card-title'>전세 평균</div>
          <div className='local-card-unit'>(단위: 백만원)</div>
        </div>
        <div className='local-card-chart-box'>
          <Line width={'1086px'} height={'238px'} options={leaseOptions} data={leaseDate} />          
        </div>
      </div>

      <div className='local-card'>
        <div className='local-card-title-box'>
          <div className='local-card-title'>월세 평균</div>
          <div className='local-card-unit'>(단위: 백만원)</div>
        </div>
        <div className='local-card-chart-box'>
          <Line width={'1086px'} height={'238px'} options={mouthRentOptions} data={mouthRentDate} />          
        </div>
      </div>
    </div>    
  );

}
