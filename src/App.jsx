import './App.css'
import { MortgageProvider } from './contexts/Context'
import MortgageCalculator from './components/MortgageCalculator'

function App() {


  return (
    <MortgageProvider>
      <div className='flex justify-center items-center min-h-screen'>
        <MortgageCalculator />
      </div>
    </MortgageProvider>
  )
}

export default App
