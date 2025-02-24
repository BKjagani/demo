import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Nabbar from './components/Nabbar'

export default function App() {

  const user = {
    name : "Hello",
    age : 21
  }

  return (
    <div>
        <BrowserRouter>
        <Nabbar/>
          <Routes>
              <Route path='/' element={<Home user={user}/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
