import { useEffect } from 'react';
import moleHill from './molehill.png';

function EmtpySlot(props){
    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, seconds)
        return () => clearTimeout(timer)
    })

    return(
        <img src={moleHill} alt='molehill' style={{width: '30vw'}}/>
    )
}

export default EmtpySlot