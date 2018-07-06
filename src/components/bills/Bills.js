import React from 'react';
import { bills } from '../../data/bills';
import './Bills.css';

export const Bills = () => {
    const sortedBills = bills.sort(function(a, b) {
        return a.day - b.day;
    });
    let billTotal = 0;
    bills.map(bill => { return billTotal += Number(bill.value)})
    return (
        <div className='table'>
            <h1>
                Bills Summary
            </h1>
            {sortedBills.map( (bill, key) => {
                const { day, type, value } = bill;
                const addEnding = {
                    1: 'st',
                    2: 'nd',
                    3: 'rd',
                    21: 'st',
                    22: 'nd',
                    23: 'rd',
                    31: 'st',
                };
                let dayStr = '';
                if (addEnding[day]) {
                    dayStr = `${day}${addEnding[day]}`;
                } else {
                    dayStr = `${day}th`;
                }

                const allCaps = ['rsl', 'cc', 'tv', 'macu'];
                const newType = type.split('-').map(word => {
                    if(allCaps.indexOf(word) >= 0) {
                        return word.toUpperCase();
                    }
                    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
                }).join(' ');

                const newValue = Number(value).toFixed(2)

                return (
                    <div key={key} className='tablerow'>
                        <div className='type'>
                            {newType}
                        </div>
                        <div className='day'>
                            {dayStr}
                        </div>
                        <div className='value'>
                            ${newValue}
                        </div>
                    </div>
                )
            })}
            <div className='totalsrow'>
                <div className='type'>
                    Monthly Total:
                </div>
                <div className='day'>
                </div>
                <div className='value'>
                    ${billTotal}
                </div>
            </div>
        </div>
    )
}

export default Bills