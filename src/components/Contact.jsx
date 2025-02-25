import { useState } from 'react'
import '../App.css'

function Contact() {

    const [bgcolor, setBgcolor] = useState('black')

  return (
    <div>
        <button onClick={() => {setBgcolor('red')}}>Red</button>
        <button onClick={() => {setBgcolor('blue')}}>Blue</button>
        <button onClick={() => {setBgcolor('aqua')}}>Aqua</button>
        <button onClick={() => {setBgcolor('yellow')}}>Yellow</button>
        <button onClick={() => {setBgcolor('tomato')}}>Tomato</button>
        
        <div className="box" style={{backgroundColor : bgcolor}}></div>
    </div>
  )
}

export default Contact
