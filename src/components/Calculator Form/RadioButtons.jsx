import React from 'react'

const RadioButtons = ({ radioFocused, handleRadioFocused, id, label, radioValue, setRadioValue }) => {
    return (
      <label onClick={() => handleRadioFocused(id)} htmlFor={id} className={`flex items-center gap-2 border rounded-md py-2 px-4 hover:border-[#a3e635] cursor-pointer transition-all ease-in-out duration-200 ${radioFocused === id ? 'bg-[#a3e635] bg-opacity-25 border-[#a3e635]' : 'input-border'}`}>
          <div className='radio-container'>
              <input 
                id={id} 
                name='option' 
                type="radio" 
                className='radio-input' 
                checked={radioValue === label} 
                value={label} 
                onChange={() => setRadioValue(label)}
              />
              <span className='custom-radio'></span>
          </div>
          <label className='font-bold text-lg slate-900 cursor-pointer' htmlFor={id} >{label}</label>
      </label>
    )
}

export default RadioButtons
