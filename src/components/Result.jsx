import React from 'react'

import emptyResultImage from '../assets/images/illustration-empty.svg'
import { useMortage } from './contexts/Context'

const Result = () => {
  const { monthlyRepayments, totalRepayments } = useMortage()

  const formattedMonthlyPayment = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2, // Keep 2 decimal places
    maximumFractionDigits: 2
  }).format(monthlyRepayments);


  const formattedTotalRepayment = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(totalRepayments);

  console.log(monthlyRepayments, formattedTotalRepayment)


  const renderResult = () => (
    <div className='w-full xl:w-1/2 slate-bg xl:rounded-bl-[100px] xl:p-10 px-6 py-10'>
      <h1 className='text-white text-2xl font-medium'>Your Results</h1>
      <p className='slate-500 mt-4'>Your results are shown below based on the information your provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      <div className='lime-shadow slate-bg-lighter rounded-md py-8 px-4 xl:px-10 mt-10'>
        <p className='slate-300'>Your monthly repayments</p>
        <h1 className='lime font-bold text-4xl xl:text-5xl my-5'>£{formattedMonthlyPayment}</h1>
        <hr className='border-slate-600 my-8'/>
        <p className='slate-300 mb-4'>Total you'll repay over the term</p>
        <h3 className='text-white text-3xl font-bold'>£{formattedTotalRepayment}</h3>
      </div>
    </div>
  )

  const renderEmptyResult = () => (
    <div className='w-full xl:w-1/2 slate-bg xl:rounded-bl-[100px] px-10 flex flex-col items-center justify-center gap-4'>
      <img src={emptyResultImage} alt="Empty Illust" />
      <h2 className='text-white text-2xl'>Results Shown Here</h2>
      <p className='text-center slate-500'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
    </div>
  )

  return monthlyRepayments > 0 ? renderResult() : renderEmptyResult()
}

export default Result
