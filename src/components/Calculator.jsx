import React, { useState } from 'react'

const Calculator = () => {
  const [focused, setFocused] = useState(false)

  return (
    <div className='w-1/2 p-10'>
      <div className='flex justify-between'>
        <h1 className='slate-900 text-2xl font-bold'>Mortage Calculator</h1>
        <button className='slate-500 underline'>Clear All</button>
      </div>
      <div className='my-10'>
        <form>
          <div 
            className="flex flex-col gap-3"
            
            >
            <label className='slate-500' htmlFor="">Mortgage Amount</label>
            <div 
              className={`flex gap-2 border rounded-md input-border overflow-hidden ${focused ? 'input-border-focused' : 'input-border'}`}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              >
              <div className='slate-bg-light py-2 px-3 slate-900'>£</div>
              <input type="text" className='font-bold slate-900 focus:outline-none'/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Calculator
