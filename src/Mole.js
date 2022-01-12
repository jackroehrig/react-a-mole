import { useEffect } from "react";
import moleImg from './mole.png';

function Mole(props){
    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, seconds)
        return () => clearTimeout(timer)
    })

    return(
        <div>
            <img src={moleImg} alt='mole' style={{width: '30vw'}} onClick={props.handleClick}/>
        </div>
    )
}

export default Mole