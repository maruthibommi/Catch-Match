import React, { useContext } from 'react'
import { AppContext } from '../App'



function Key({keyval,bigKey}) {
    const { board,setBoard } = useContext(AppContext)

    const selectLetter = () => {
        const newBoard = [...board]
        newBoard[0][0] = keyval
        setBoard(newBoard)
    }


  return (
<div className='key' id = {bigKey && "big"} onClick={selectLetter}>{keyval}</div>
  )
}

export default Key