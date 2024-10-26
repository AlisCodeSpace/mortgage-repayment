import React from 'react'

const MortgageAmount = ({ focused, handleFocusState, handleBlurState, mortgageAmount, setMortgageAmount, error }) => {
  return (
    <div className="flex flex-col gap-3">
        <label className='slate-500' htmlFor="">Mortgage Amount</label>
        <div 
            className={`flex gap-2 border rounded-md overflow-hidden 
            ${error ? 'border-red-500' : (focused === 'mortgage-amount' ? 'border-[#a3e635]' : 'input-border hover:border-[#1a3f55]')}`}
            onFocus={() => handleFocusState('mortgage-amount')}
            onBlur={handleBlurState}
        >
            <div className={`py-2 px-4 font-bold 
            ${error ? 'bg-red-500 text-white' : (focused === 'mortgage-amount' ? 'bg-[#a3e635] slate-900 ' : 'slate-bg-light slate-900 ')}`}>
                £
            </div>
            <input 
              type="number" 
              className='font-bold slate-900 focus:outline-none w-5/6' 
              value={mortgageAmount} 
              onChange={(e) => setMortgageAmount(e.target.value)}
            />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

export default MortgageAmount
