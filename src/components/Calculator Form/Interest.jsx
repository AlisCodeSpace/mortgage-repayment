import React from 'react'

const Interest = ({ radioFocused, handleRadioFocused }) => {
  return (
    <label onClick={() => handleRadioFocused('interest')} htmlFor='interest' className={`flex items-center gap-2 border rounded-md py-2 px-4 hover:border-[#a3e635] cursor-pointer transition-all ease-in-out duration-200 ${radioFocused === 'interest' ? 'bg-[#a3e635] bg-opacity-25 border-[#a3e635]' : 'input-border'}`}>
        <div className='radio-container'>
            <input id='interest' name='option' type="radio" className='radio-input'/>
            <span className='custom-radio'></span>
        </div>
        <label className='font-bold text-lg slate-900 cursor-pointer' htmlFor="interest">Interest Only</label>
    </label>
  )
}

export default Interest
