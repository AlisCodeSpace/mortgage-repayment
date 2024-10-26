import { createContext, useContext, useState } from "react"

const MortgageContext = createContext()

export const MortgageProvider = ({ children }) => {
    const [monthlyRepayments, setMonthlyRepayments] = useState(0)
    const [totalRepayments, setTotalRepayments] = useState(0)

    return (
        <MortgageContext.Provider value={{ monthlyRepayments, setMonthlyRepayments, totalRepayments, setTotalRepayments }}>
            {children}
        </MortgageContext.Provider>
    )

}

export const useMortage = () => {
    return useContext(MortgageContext);
  };