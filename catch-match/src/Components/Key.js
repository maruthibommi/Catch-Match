import React, { useContext } from 'react'
import { AppContext } from '../App'



function Key({keyval,bigKey}) {
    const {onSelectLetter,onDelete,onEnter } = useContext(AppContext)
    
    const selectLetter = () => {
        if(keyval === "ENTER"){
            onEnter();
        }
        else if(keyval === "DELETE"){
            onDelete();
        }
        else{
          onSelectLetter(keyval);
        }

    }


  return (
<div className='key' id = {bigKey && "big"} onClick={selectLetter} >{keyval}</div>
  )
}

export default Key