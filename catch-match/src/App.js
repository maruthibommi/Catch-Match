import './App.css'
import React from 'react';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext ,useState} from 'react';
import { boardDefault } from './Components/numbers';

export const AppContext = createContext()
const randomNumber =Math.random().toString()
const correctNumber=randomNumber.slice(2,7)
function App() {
  const [board,setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState( { attempt : 0 , letterPos : 0 });

  const checkcorrect = (currNumber,correctNumber,currAttempt) =>{
    if(currNumber === correctNumber){
      alert("GameOver You win")
    }
    else if (currAttempt.attempt === 5 && currNumber !== correctNumber){
      alert("Sorry U lost the game :( "+
      "Coreect Sequence is "+correctNumber)
    }
  }

  const onSelectLetter = (keyval) =>{
    if(currAttempt.letterPos > 4 ) return ;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyval
    setBoard(newBoard)
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
  }
  const onDelete = () =>{
    if(currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos-1] = ""
    setBoard(newBoard)
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
  }
  const onEnter = () => {
    if(currAttempt.letterPos !== 5 || currAttempt.attempt === 6) return;
    let currNumber = "";
    for (let i=0; i< 5  ; i++ ){
        currNumber+=board[currAttempt.attempt][i]
    }
    setCurrAttempt({attempt: currAttempt.attempt+1 ,letterPos: 0})
    checkcorrect(currNumber,correctNumber,currAttempt)
    

  }

  return (
    <div className='App'>
      <nav>
      <h1> Numberly</h1>
      </nav>
      <AppContext.Provider value={{board
        ,correctNumber
        ,currAttempt
        ,setBoard
        ,setCurrAttempt
        ,onSelectLetter
        ,onDelete
        ,onEnter}}>
      <div className='game'>
        <Board />
        <Keyboard />
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
