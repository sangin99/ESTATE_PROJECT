import React, { useState } from 'react'
import './style.css'
import SelectBox from 'src/components/SelectBox';
import { Bar, Line } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

//                component                 //
export default function Ratio() {

  const returnOptions = {
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

  const leaseRatioOptions = {
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

  const mouthRentRatioOptions = {
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

  const returnDate = {
    labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    datasets: [
      {
        label: '40 이하',
        data: [225,148,224,143,142,210,320,240,210,110,260,210,214,236,154,143,241,179],
        borderColor: 'rgba(58,87,232,1)',
        backgroundColor: 'rgba(58,87,232,1)'
      },
      {
      label: '40 초과 60이하',
      data: [100,300,45,310,140,96,255,194,199,134,260,210,214,264,186,210,67,199],
      borderColor: 'rgba(0,203,91,1)',
      backgroundColor: 'rgba(0,203,91,1)'
      },
      {
        label: '60초과 85이하',
        data: [180,150,224,310,134,210,255,240,143,110,260,210,154,287,144,187,241,140],
        borderColor: 'rgba(255,0,255,1)',
        backgroundColor: 'rgba(255,0,255,1)'
      },
      {
        label: '85 초과',
        data: [150,120,224,310,142,66,164,142,210,189,178,141,173,245,154,210,189,80],
        borderColor: 'rgba(150,50,55,1)',
        backgroundColor: 'rgba(150,50,55,1)'
      }
      ]
  };

  const leaseRatioDate = {
    labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    datasets: [
      {
        label: '40 이하',
        data: [225,120,224,310,145,210,177,143,79,110,94,210,214,236,154,210,241,179],
        borderColor: 'rgba(58,87,232,1)',
        backgroundColor: 'rgba(58,87,232,1)'
      },
      {
      label: '40 초과 60이하',
      data: [154,120,56,182,142,94,255,364,156,66,260,210,168,236,154,210,241,179],
      borderColor: 'rgba(0,203,91,1)',
      backgroundColor: 'rgba(0,203,91,1)'
      },
      {
        label: '60초과 85이하',
        data: [225,154,224,310,351,210,255,240,210,145,367,210,214,90,154,210,241,179],
        borderColor: 'rgba(255,0,255,1)',
        backgroundColor: 'rgba(255,0,255,1)'
      },
      {
        label: '85 초과',
        data: [143,154,224,65,142,210,188,240,187,110,260,84,214,236,154,68,84,179],
        borderColor: 'rgba(50,10,50,1)',
        backgroundColor: 'rgba(50,10,50,1)'
      }
      ]
  };

  const mouthRentRatioDate = {
    labels: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    datasets: [
      {
        label: '40 이하',
        data: [91,150,224,310,157,320,255,240,210,110,260,197,214,156,367,210,49,179],
        borderColor: 'rgba(58,87,232,1)',
        backgroundColor: 'rgba(58,87,232,1)'
      },
      {
      label: '40 초과 60이하',
      data: [255,120,224,195,142,210,255,99,164,110,184,210,45,236,154,210,241,179],
      borderColor: 'rgba(0,203,91,1)',
      backgroundColor: 'rgba(0,203,91,1)'
      },
      {
        label: '60초과 85이하',
        data: [110,364,224,310,142,164,255,240,164,110,260,210,167,154,345,210,241,179],
        borderColor: 'rgba(255,0,255,1)',
        backgroundColor: 'rgba(255,0,255,1)'
      },
      {
        label: '85 초과',
        data: [164,120,224,154,142,210,255,254,210,110,260,210,214,236,174,210,297,179],
        borderColor: 'rgba(150,50,55,1)',
        backgroundColor: 'rgba(150,50,55,1)'
      }
      ]
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
          <div className='local-card-title'>수익률 평균</div>
          <div className='local-card-unit'>(단위: 백만원)</div>
        </div>
        <div className='local-card-chart-box'>
          <Line width={'1086px'} height={'238px'} options={returnOptions} data={returnDate} />
        </div>
      </div>

      <div className='local-card'>
        <div className='local-card-title-box'>
          <div className='local-card-title'>매매가격 대비 전세 비율</div>
          <div className='local-card-unit'>(단위: 백만원)</div>
        </div>
        <div className='local-card-chart-box'>
          <Bar width={'1086px'} height={'238px'} options={leaseRatioOptions} data={leaseRatioDate} />          
        </div>
      </div>

      <div className='local-card'>
        <div className='local-card-title-box'>
          <div className='local-card-title'>전세가격 대비 월세 보증금 비율</div>
          <div className='local-card-unit'>(단위: 백만원)</div>
        </div>
        <div className='local-card-chart-box'>
          <Line width={'1086px'} height={'238px'} options={mouthRentRatioOptions} data={mouthRentRatioDate} />         
        </div>
      </div>
    </div>    
  );

}

