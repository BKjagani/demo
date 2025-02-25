import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Nabbar from './components/Nabbar'
import Contact from './components/Contact'
import Form from './components/Form'
import Table from './components/Table'
import { useState } from 'react'
import Form2 from './components/Form2'

export default function App() {

  const [data, setData] = useState([]);

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
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/form' element={<Form setData={setData}/>}/>
              <Route path='/table' element={<Table data={data}/>}/>
              <Route path='/form2' element={<Form2/>}/>

          </Routes>
        </BrowserRouter>
    </div>
  )
}
