import { useState } from "react"

function About() {

  const [username, setUsername] = useState("Hiii")

  function handleClick(e){
    e.preventDefault()
    if(username == "Hiii"){
      setUsername("Hello")
    }else{
      setUsername("Hiii")
    }
  }

  return (
    <div>
      <h1>About</h1>
      <h1>{username}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default About
