import React, { useCallback, useContext , useEffect } from 'react'
import { AppContext } from '../App'
import '../App.css'
import Key from './Key'



function Keyboard() {
  const keys = ["0","1","2","3","4","5","6","7","8","9"]

  

  const {onSelectLetter,onDelete,onEnter,} = useContext(AppContext)
  // eslint-disable-next-line 
  const handleKeyBoard = useCallback((event) => {
      if(event.key === "Enter"){
        onEnter()
        
      }else if (event.key === "Backspace"){
        onDelete()
      }else{
        //console.log('coming here')
        keys.forEach((key) => {
          if(key === event.key){
            onSelectLetter(key)
            
          }
        })
      }
  })

  useEffect(() => {
    document.addEventListener("keydown",handleKeyBoard)

    return(() => {
      document.removeEventListener("keydown",handleKeyBoard)
    })
  },[handleKeyBoard])

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