import {useState} from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer(props){
    let [displayMole, changeMole] = useState(false)

    const handleClick = () => {
        props.setScore(props.score + 1)
        changeMole(false)
    }

    return (
        <div>
            {displayMole ? <Mole setDisplayMole={changeMole} handleClick={handleClick}/> : <EmptySlot setDisplayMole={changeMole}/>}
        </div>
    )
}

export default MoleContainer