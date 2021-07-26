import React, {useState} from 'react'
import DataCompose from './dataCompose.jsx'

const Compose = (prop) => {

  const [show, setShow] = useState(false)

  const handleComposeClick = () => {
    setShow('true')
    // console.log(show)
  }

  if(show){
    return (
      <DataCompose submit={prop.handleComposeClick}/>
    )
  }
  else {
    return (
      <button onClick={handleComposeClick}>Compose Email</button>
    )
 }
}

export default Compose
