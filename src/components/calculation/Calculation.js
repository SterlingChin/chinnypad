import React from 'react';
import moment from 'moment';
import bills from '../../data/bills';
import './Calculation.css';

const Calculation = () => {
    // console.log(bills);
    const startingBalance = 2200;
    const payday = new Date('2018-6-28');
    const nextPayDay = moment(payday).add(14, 'days').format('MMMM Do');
    const startDay = Number(moment(payday).format('D'));
    const startMonth = Number(moment(payday).format('M'));
    const twoWeekDay = Number(moment(payday).add(14, 'days').format('D'));
    const twoWeekMonth = Number(moment(payday).add(14, 'days').format('M'));
    const fourWeekDay = Number(moment(payday).add(28, 'days').format('D'));
    const fourWeekMonth = Number(moment(payday).add(28, 'days').format('M'));
    const today = Number(moment(new Date()).format('D'))

    let twoWeekBudget = 0;
    let twoWeekBudgetArr = [];
    if(startMonth !== twoWeekMonth) {
        bills.map(bill => {
            if(bill['day'] >= startDay || bill['day'] <= twoWeekDay) {
                twoWeekBudget += Number(bill['value']);
                twoWeekBudgetArr.push(bill);
            }
        })
    } else {
        bills.map(bill => {
            if(bill['day'] >= startDay && bill['day'] <= twoWeekDay) {
                twoWeekBudget += Number(bill['value']);
                twoWeekBudgetArr.push(bill);
            }
        })
    }

    let billsPaid = 0
    if(startMonth !== twoWeekMonth) {
        bills.map(bill => {
            if(bill['day'] >= startDay || bill['day'] <= today) {
                billsPaid += Number(bill['value']);
            }
        })
    } else {
        bills.map(bill => {
            if(bill['day'] >= startDay && bill['day'] <= today) {
                billsPaid += Number(bill['value']);
            }
        })
    }

    let fourWeekBudget = 0;
    let fourWeekBudgetArr = []
    if(twoWeekMonth === fourWeekMonth) {
        bills.map(bill => {
            if(bill['day'] > twoWeekDay && bill['day'] <= fourWeekDay) {
                fourWeekBudget += Number(bill['value']);
                fourWeekBudgetArr.push(bill);
            }
        })
    } else {
        bills.map(bill=> {
            if(bill['day'] > twoWeekDay || bill['day'] <= fourWeekDay) {
                fourWeekBudget += Number(bill['value']);
                fourWeekBudgetArr.push(bill);
            }
        })
    }
    const twoWeekRemaining = startingBalance - twoWeekBudget;
    const billsRemaining = twoWeekBudget - billsPaid;

    return (
        <div className='table'>
            <h3>
                Next Two Weeks
            </h3>
            <div>
                Total Bills: ${twoWeekBudget.toFixed(2)}
            </div>
            <div>
                Remaining Bills: ${billsRemaining.toFixed(2)}
            </div>
            <div>
                Total Remaining: ${twoWeekRemaining.toFixed(2)}
            </div>
            {twoWeekBudgetArr.map(bill => {
                const value = Number(bill['value']).toFixed(2)
                return(
                    <div className='tablerow'>
                        <div className='name'>
                            {bill['name']}
                        </div>
                        <div className='value'>
                            ${value}
                        </div>
                    </div>
                )
            })}
            <h3>
                Following Two Weeks
            </h3>
            <div>
                Next Payday {nextPayDay}
            </div>
            <div>
                Total Bills: ${fourWeekBudget}
            </div>
            {fourWeekBudgetArr.map(bill => {
                const value = Number(bill['value']).toFixed(2)
                return(
                    <div className='tablerow'>
                        <div className='name'>
                            {bill['name']}
                        </div>
                        <div className='value'>
                            ${value}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Calculation;