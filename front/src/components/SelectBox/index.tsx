import React from 'react'
import './style.css';

//                component                 //
export default function SelectBox() {
    
    //                render                 //
    return (
    <div className='select-box'>
            <div className='select-none'>지역</div>
            {/* <div className='select-item'>서울</div> */}
            <div className='select-close-button'></div>
    </div>
    );
}
