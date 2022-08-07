import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

function Letter({letterPos,attemptVal}) {
    const { board , correctNumber ,currAttempt }  = useContext(AppContext)
    const letter = board[attemptVal][letterPos]

    const correct = letter === correctNumber[letterPos] 
    const almost = !correct && letter !== "" && correctNumber.includes(letter)

    const letterState = (currAttempt.attempt > attemptVal) ?   (correct ? "correct" : almost ? "almost" : "error" ) : "error"

  return (
    <div className='letter' id ={letterState}>{letter}</div>
  )
}


export default Letter
