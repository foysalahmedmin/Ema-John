import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {
  const [showProduct, setShowCount] = useState(12);
  const showCountUpdate = () => {
    const updateCount = showProduct + 6 ;
    setShowCount(updateCount);
    console.log(showProduct);
  }

  return (
    <div className="App">
      <Header></Header>
      <Shop 
        showProduct = {showProduct}
      ></Shop>
      <div className='text-center'><button className='text-center bg-[#FFE0B3] bottom-0 p-2  
      mb-12 hover:bg-orange-500' onClick={showCountUpdate}>Show More</button></div>
    </div>
  )
}

export default App
