import React, { useState } from 'react';

import calculator from '../../assets/images/icon-calculator.svg';
import MortgageAmount from './MortgageAmount';
import TermAndInterest from './TermAndInterest';
import RadioButtons from './RadioButtons';
import { useMortage } from '../../contexts/Context';

const Calculator = () => {
  const [focused, setFocused] = useState(null);
  const [radioFocused, setRadioFocused] = useState(null);

  const { setMonthlyRepayments, setTotalRepayments } = useMortage();
  
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [termInput, setTermInput] = useState('');
  const [intRateInput, setIntRateInput] = useState('');
  const [radioOption, setRadioOption] = useState('');

  const [errors, setErrors] = useState({}); // Error state for each input

  const handleFocusState = (id) => {
    setFocused(id);
  };

  const handleBlurState = () => {
    setFocused(null);
  };

  const handleRadioFocused = (id) => {
    setRadioFocused(id);
  };

  const clearAll = () => {
    setMonthlyRepayments(0)
    setTotalRepayments(0)
    setMortgageAmount('');
    setTermInput('');
    setIntRateInput('');
    setRadioOption('');
    setRadioFocused('');
    setErrors({}); // Clear any error states
  };

  const validateFields = () => {
    const newErrors = {};

    if (!mortgageAmount) newErrors.mortgageAmount = 'Mortgage Amount is required';
    if (!termInput) newErrors.termInput = 'Mortgage Term is required';
    if (!intRateInput) newErrors.intRateInput = 'Interest Rate is required';
    if (!radioOption) newErrors.radioOption = 'Please select a mortgage type';

    return newErrors;
  };

  const calculateMonthlyRepayment = () => {
    // Parse the input values
    const principal = parseFloat(mortgageAmount); // mortgageAmount as a number
    const years = parseFloat(termInput); // mortgage term in years
    const annualInterestRate = parseFloat(intRateInput) / 100; // convert interest rate to decimal

    // Ensure all values are valid
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set error state if validation fails
      return;
    }

    // Convert the annual interest rate to a monthly interest rate
    const monthlyInterestRate = annualInterestRate / 12;

    // Calculate the total number of payments (months)
    const totalPayments = years * 12;

    let monthlyPayment;
    let totalRepayment;

    if (radioOption === 'Repayment') {
      // Calculate monthly repayment (interest + principal) for Repayment Mortgage
      monthlyPayment = 
        (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
      
      // Total repayment for Repayment Mortgage
      totalRepayment = monthlyPayment * totalPayments;

    } else if (radioOption === 'Interest Only') {
      // Calculate monthly repayment for Interest-Only Mortgage (only interest)
      monthlyPayment = principal * monthlyInterestRate;

      // Total repayment for Interest-Only Mortgage (interest paid over the term + original principal)
      totalRepayment = (monthlyPayment * totalPayments) + principal;
    }

    // Set the calculated monthly repayment and total repayment
    setMonthlyRepayments(monthlyPayment);
    setTotalRepayments(totalRepayment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateMonthlyRepayment();
  };

  return (
    <div className='w-full xl:w-1/2 p-10'>
      <div className='flex flex-col items-start gap-3 xl:flex-row justify-between'>
        <h1 className='slate-900 text-2xl font-bold'>Mortage Calculator</h1>
        <button onClick={clearAll} className='slate-500 underline hover:text-[#1a3f55]'>Clear All</button>
      </div>
      <div className='my-6 xl:my-10'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          {/* Mortgage Amount */}
          <MortgageAmount focused={focused} handleFocusState={handleFocusState} handleBlurState={handleBlurState} mortgageAmount={mortgageAmount} setMortgageAmount={setMortgageAmount} error={errors.mortgageAmount}/>

          {/* Mortgage Term and Interest Rate */}
          <div className="flex flex-col xl:flex-row gap-6">
            <TermAndInterest focused={focused} handleFocusState={handleFocusState} handleBlurState={handleBlurState} label="Mortage Term" id="mortgage-term" type="years" padding="px-8" inputValue={termInput} handleInput={setTermInput} error={errors.termInput}/>
            

            <TermAndInterest focused={focused} handleFocusState={handleFocusState} handleBlurState={handleBlurState} label="Interest Rate" id="interest-rate" type="%" padding="px-6" inputValue={intRateInput} handleInput={setIntRateInput} error={errors.intRateInput}/>
          </div>

          {/* Mortgage Type */}
          <div className='flex flex-col gap-3'>
            <h3 className='slate-500' htmlFor="">Mortgage Type</h3>
            <RadioButtons radioFocused={radioFocused} handleRadioFocused={handleRadioFocused} label="Repayment" id="repayment" radioValue={radioOption} setRadioValue={setRadioOption} />
            <RadioButtons radioFocused={radioFocused} handleRadioFocused={handleRadioFocused} label="Interest Only" id="interest" radioValue={radioOption} setRadioValue={setRadioOption} />
            {errors.radioOption && <p className="text-red-500 text-sm">{errors.radioOption}</p>}
          </div>

          {/* Submit Button */}
          <button type='submit' className='flex items-center justify-center w-full xl:w-3/4 gap-2 mt-4 rounded-full bg-[#a3e635] py-4 px-3 hover:bg-opacity-40 transition-all ease-in-out duration-200'>
            <img src={calculator} alt="Calculator Icon" />
            <span className='font-bold slate-900 text-lg'>Calculate Repayments</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
