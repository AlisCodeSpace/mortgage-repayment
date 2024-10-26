import React from 'react'

const TermAndInterest = ({ padding, focused, handleFocusState, handleBlurState, label, id, type, inputValue, handleInput, error }) => {
    return (
      <div className='flex flex-col gap-3 w-full xl:w-1/2'>
          <label className='slate-500' htmlFor="mortgage-term">{label}</label>
          <div 
          className={`flex gap-2 border rounded-md overflow-hidden ${error ? 'border-red-500' : (focused === id ? 'border-[#a3e635]' : 'input-border hover:border-[#1a3f55]')}`}
          onFocus={() => handleFocusState(id)}
          onBlur={handleBlurState}
          >
            <input id={id} type="number" className='font-bold slate-900 w-5/6 focus:outline-none pl-2' value={inputValue} onChange={(e) => handleInput(e.target.value)}/>
            <div className={`py-2 ${padding} w-1/6 flex items-center justify-center font-bold ${error ? 'bg-red-500 text-white' : (focused === id ? 'bg-[#a3e635]' : 'slate-bg-light slate-900')}`}>{type}</div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    )
}

export default TermAndInterest
