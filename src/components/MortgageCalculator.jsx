import Result from "./Result"
import Calculator from "./Calculator"

const MortgageCalculator = () => {
  return (
    <div className="flex gap-10 bg-white shadow-sm w-3/5 rounded-2xl border h-[70vh] overflow-hidden">
      <Calculator />
      <Result />
    </div>
  )
}

export default MortgageCalculator
