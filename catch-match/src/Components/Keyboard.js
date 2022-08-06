import React from 'react'
import '../App.css'
import Key from './Key'

function Keyboard() {
  const keys = ["0","1","2","3","4","5","6","7","8","9"]


  return (
    <div className='keyboard'>
      
      <div className='line1'>
      <Key keyval = "ENTER" bigKey/>
      {keys.map((key) => {
          return <Key keyval ={key} />
        })}
        <Key keyval = "DELETE" bigKey />
      </div> 
      
    </div>
  )
}

export default Keyboard