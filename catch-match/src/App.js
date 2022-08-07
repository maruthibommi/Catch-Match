import './App.css'
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext ,useState} from 'react';
import { boardDefault } from './Components/numbers';

export const AppContext = createContext()

function App() {
  const [board,setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState( { attempt : 0 , letterPos : 0 });

  const correctNumber = "12345";

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
    if(currAttempt.letterPos !== 5 || currAttempt.attempt === 5) return;
    setCurrAttempt({attempt: currAttempt.attempt+1 ,letterPos: 0})
  }

  return (
    <div className='App'>
      <nav>
      <h1> Catch Match</h1>
      </nav>
      <AppContext.Provider value={ {board
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
