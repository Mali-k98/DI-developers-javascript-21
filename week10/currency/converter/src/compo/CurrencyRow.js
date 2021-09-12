import React from 'react'

function CurrencyRow(props) {
    const{
        CurrencyOptions,
        selectedC,
        onChangec,
        onChangeAmount,
        amount
    }=props
    return (
        <div>
            <input type='number' className='input' value={amount} onChange={onChangeAmount}/>
            <select value={selectedC} onChange={onChangec}>
                {CurrencyOptions.map(option=>(
                    <option key={option} value={option}>{option}</option>
                ))}
                
            </select>
        </div>
    )
}

export default CurrencyRow
