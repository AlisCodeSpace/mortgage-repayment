import Result from "./Result"
import Calculator from "./Calculator Form/Calculator"

const MortgageCalculator = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full gap-10 bg-white xl:bg-white xl:shadow-sm xl:w-4/5 2xl:w-3/5 xl:rounded-2xl xl:border xl:overflow-hidden">
      <Calculator />
      <Result />
    </div>
  )
}

export default MortgageCalculator
