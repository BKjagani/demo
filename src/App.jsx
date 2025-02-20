import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Nabbar from './components/Nabbar'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Nabbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
