import './App.css';
import MoleContainer from './MoleContainer';
import {useState} from 'react';

function App() {
  let [score, updateScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++){
      hills.push(<MoleContainer key={i} setScore={updateScore} score={score}/>)
    }

    return hills
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      <div className='containers'>
        {createMoleHill()}
      </div>
    </div>
  );
}

export default App;
