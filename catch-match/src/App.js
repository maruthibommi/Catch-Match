import './App.css'
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext ,useState} from 'react';
import { boardDefault } from './Components/numbers';

export const AppContext = createContext()

function App() {
  const [board,setBoard] = useState(boardDefault)
  const [currAttempt,setAttempt] = useState({Attempt : 0 , letterPos : 0 })
  return (
    <div className='App'>
      <nav>
      <h1> Catch Match</h1>
      </nav>
      <AppContext.Provider value={ {board, setBoard}}>
      <div className='game'>
        <Board />
        <Keyboard />
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
