
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './assets/pages/Home'
import About from './assets/pages/About'
import GrievancePage from './assets/pages/GrievancePage'




function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/grivancepage' element={<GrievancePage/>}></Route>
     </Routes>
    
    </>
  )
}

export default App
