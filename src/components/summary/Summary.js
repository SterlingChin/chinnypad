import React from 'react';
import Bills from '../bills/Bills'
import Calculation from '../calculation/Calculation';
import './Summary.css';

export const Summary = () => {
    return (
        <div className='summary'>
            <Bills />
            <Calculation />
        </div>
    )
}

export default Summary;