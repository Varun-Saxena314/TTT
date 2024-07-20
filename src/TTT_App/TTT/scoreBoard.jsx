import React from 'react';
import './TTT.css';
import { useContext } from 'react';
import { ScoreContext } from './ScoreContext';
const ScoreBoard = () => {
    const { scorex, scoreo, resetX, resetO } = useContext(ScoreContext);
    const resetScore = () => {
        resetX();
        resetO();
    }
    return(
        <div className='score'>
            <>
            <div style={{display: 'flex', justifyContent: 'center'}}>Score</div>
            <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div className='scorex' style={{marginTop: 30}}>X</div>
            <div className='scoreo' style={{marginTop: 30}}>O</div>
            </nav>
            <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div className='xtrack' style={{marginTop: 30}}>{scorex}</div>
            <div className='otrack' style={{marginTop: 30}}>{scoreo}</div>
            </nav>
            <button className="newScore" style={{marginTop: 40, marginLeft: 68}} onClick={()=>resetScore()}>Reset Score</button>
            </>
        </div>
    )
}
export default ScoreBoard;
