import React from 'react'

const Result = () => {
  return (
    <div className=' w-1/2 slate-bg rounded-bl-[100px] p-10'>
      <h1 className='text-white text-2xl font-medium'>Your Results</h1>
      <p className='slate-500 mt-4'>Your results are shown below based on the information your provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      <div className='lime-shadow z-10 slate-bg-lighter rounded-md py-8 px-10 mt-10'>
        <p className='slate-300'>Your monthly repayments</p>
        <h1 className='lime font-bold text-6xl my-5'>$1,754.54</h1>
        <hr className='border-slate-600 my-8'/>
        <p className='slate-300 mb-4'>Total you'll repay over the term</p>
        <h3 className='text-white text-3xl font-bold'>$534,754.54</h3>
      </div>
    </div>
  )
}

export default Result
