import React from 'react';
import './TTT.css';
import './media.css';
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
            <div className='scoreMarg' >X</div>
            <div className='scoreMarg' >O</div>
            </nav>
            <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div className='scoreMarg' >{scorex}</div>
            <div className='scoreMarg' >{scoreo}</div>
            </nav>
            <button className="newScore"  onClick={()=>resetScore()}>Reset Score</button>
            </>
        </div>
    )
}
export default ScoreBoard;
