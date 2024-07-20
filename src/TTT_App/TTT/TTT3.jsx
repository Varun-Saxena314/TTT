import React from 'react';
import './TTT.css'
import { useState, useRef, useEffect } from 'react';
import { useContext } from 'react';
import { ScoreContext} from './ScoreContext';
import { Link } from 'react-router-dom';
import O from 'C:/Users/varun/Projects/tictactoe/src/TTT_App/Assets/circle.png'
import X from 'C:/Users/varun/Projects/tictactoe/src/TTT_App/Assets/ex.png'
let squares = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
let rightD = [0, 1, 2, 3, 7, 8, 9, 10, 14, 15, 16, 17];
let leftD = [3, 4, 5, 6, 10, 11, 12, 13, 17, 18, 19, 20];
let tie = false;



const TTT3 = () => {
    let [turns, turnTrack] = useState(0);
    let [done, doneTrack] = useState(false);
    let winner = useRef(null);
    let diss = useRef(null);
    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let box10 = useRef(null);
    let box11 = useRef(null);
    let box12 = useRef(null);
    let box13 = useRef(null);
    let box14 = useRef(null);
    let box15 = useRef(null);
    let box16 = useRef(null);
    let box17 = useRef(null);
    let box18 = useRef(null);
    let box19 = useRef(null);
    let box20 = useRef(null);
    let box21 = useRef(null);
    let box22 = useRef(null);
    let box23 = useRef(null);
    let box24 = useRef(null);
    let box25 = useRef(null);
    let box26 = useRef(null);
    let box27 = useRef(null);
    let box28 = useRef(null);
    let box29 = useRef(null);
    let box30 = useRef(null);
    let box31 = useRef(null);
    let box32 = useRef(null);
    let box33 = useRef(null);
    let box34 = useRef(null);
    let box35 = useRef(null);
    let box36 = useRef(null);
    let box37 = useRef(null);
    let box38 = useRef(null);
    let box39 = useRef(null);
    let box40 = useRef(null);
    let box41 = useRef(null);
    
    const { updateX, updateO } = useContext(ScoreContext);
    let boxes = [
        box0, box1, box2, box3, box4, box5, box6, box7, box8, box9,
        box10, box11, box12, box13, box14, box15, box16, box17, box18, box19,
        box20, box21, box22, box23, box24, box25, box26, box27, box28, box29,
        box30, box31, box32, box33, box34, box35, box36, box37, box38, box39,
        box40, box41
    ];
    const win = (index) => {
    let stop = (index%7) + 15;
    let stop2 = (Math.trunc(index/7)*7) + 4;
       for (let i = (index % 7); i < stop; i+=7){
            if (squares[i] === squares[i+7] && squares[i+7] === squares[i+14] && squares[i+14] === squares[i+21] && squares[i+21] !== ""){
                doneTrack(true);
                if (squares[i+21] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
                diss.current.innerHTML = ``;
                updateX();
                tie = true;
                }
                else{
                winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
                diss.current.innerHTML = ``;
                updateO();
                tie = true;
                }
                break;
            }
       }
       for (let i = (Math.trunc(index/7)*7); i < stop2; i++){
        if (squares[i] === squares[i+1] && squares[i+1] === squares[i+2] && squares[i+2] === squares[i+3] && squares[i+3] !== ""){
            doneTrack(true);
            if (squares[i+3] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            tie = true;
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            tie = true;
            }
            break;
        }
   }
     for (let i = (Math.trunc(index/7)*7); i < stop2; i++){
        if (squares[i] === squares[i+1] && squares[i+1] === squares[i+2] && squares[i+2] === squares[i+3] && squares[i+3] !== ""){
            doneTrack(true);
            if (squares[i+3] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            tie = true;
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            tie = true;
            }
            break;
        }
    }
        for (let i = 0; i < 12; i++){
            let check = rightD[i];
            if (squares[check] === squares[check+8] && squares[check+8] === squares[check+16] && squares[check+16] === squares[check+24] && squares[check+24] !== ""){
                doneTrack(true);
                if (squares[check+24] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
                diss.current.innerHTML = ``;
                updateX();
                tie = true;
                }
                else{
                winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
                diss.current.innerHTML = ``;
                updateO();
                tie = true;
                }
                break;
            }
        }
        for (let i = 0; i < 12; i++){
            let check = leftD[i];
            if (squares[check] === squares[check+6] && squares[check+6] === squares[check+12] && squares[check+12] === squares[check+18] && squares[check+18] !== ""){
                doneTrack(true);
                if (squares[check+18] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
                diss.current.innerHTML = ``;
                updateX();
                tie = true;
                }
                else{
                winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
                diss.current.innerHTML = ``;
                updateO();
                tie = true;
                }
                break;
            }
        }
    }

  useEffect(() => {
    if (turns === 42 && !done) {
      winner.current.innerHTML = "It's a Tie!";
      diss.current.innerHTML = '';
    }
  }, [turns, done]);
  
    const press = (s, num) => {
        if (done){
            return 0;
        }
        if (turns %2 === 0){
            if (squares[num] === "" && (num <= 6 || squares[num-7] !== "")){
            s.target.innerHTML = `<img src= '${X}'>`;
            squares[num] = "X";
            turnTrack(++turns);
            }
        }
        else{
            if (squares[num] === "" && (num <= 6 || squares[num-7] !== "")){
            s.target.innerHTML = `<img src= '${O}'>`;
            squares[num] = "O";
            turnTrack(++turns);
            }
        }
        win(num);
    }
    const end = () => {
        doneTrack(false);
        turnTrack(turns = 0);
        winner.current.innerHTML = 'A game of Tic Tac Toe, but Connect Four! By ';
        diss.current.innerHTML = 'Varun Saxena';
        squares = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        boxes.map((box) => {
            box.current.innerHTML = '';
        })
    }


    return (
        <div className='TTT_Game'>
        <h1 className='Title' ref = {winner}>A game of Tic Tac Toe, but Connect Four! By </h1>
        <h1 className='Me'ref = {diss}>Varun Saxena</h1>
            <div className='grid3'>
                <div className='col1'>
                        <div className='box2' ref = {box35} onClick={(s) => press(s, 35)}></div>
                        <div className='box2' ref = {box28} onClick={(s) => press(s, 28)}></div>
                        <div className='box2' ref = {box21} onClick={(s) => press(s, 21)}></div>
                        <div className='box2' ref = {box14} onClick={(s) => press(s, 14)}></div>
                        <div className='box2' ref = {box7} onClick={(s) => press(s, 7)}></div>
                        <div className='box2' ref = {box0} onClick={(s) => press(s, 0)}></div>
                </div>
                <div className='col2'>
                        <div className='box2' ref = {box36} onClick={(s) => press(s, 36)}></div>
                        <div className='box2' ref = {box29} onClick={(s) => press(s, 29)}></div>
                        <div className='box2' ref = {box22} onClick={(s) => press(s, 22)}></div>
                        <div className='box2' ref = {box15} onClick={(s) => press(s, 15)}></div>
                        <div className='box2' ref = {box8} onClick={(s) => press(s, 8)}></div>
                        <div className='box2' ref = {box1} onClick={(s) => press(s, 1)}></div>
                </div>
                <div className='col3'>
                        <div className='box2' ref = {box37} onClick={(s) => press(s, 37)}></div>
                        <div className='box2' ref = {box30} onClick={(s) => press(s, 30)}></div>
                        <div className='box2' ref = {box23} onClick={(s) => press(s, 23)}></div>
                        <div className='box2' ref = {box16} onClick={(s) => press(s, 16)}></div>
                        <div className='box2' ref = {box9} onClick={(s) => press(s, 9)}></div>
                        <div className='box2' ref = {box2} onClick={(s) => press(s, 2)}></div>
                </div>
                <div className='col4'>
                        <div className='box2' ref = {box38} onClick={(s) => press(s, 38)}></div>
                        <div className='box2' ref = {box31} onClick={(s) => press(s, 31)}></div>
                        <div className='box2' ref = {box24} onClick={(s) => press(s, 24)}></div>
                        <div className='box2' ref = {box17} onClick={(s) => press(s, 17)}></div>
                        <div className='box2' ref = {box10} onClick={(s) => press(s, 10)}></div>
                        <div className='box2' ref ={box3}   onClick={(s) => press(s, 3)}></div>
                </div>
                <div className='col5'>
                        <div className='box2' ref = {box39} onClick={(s) => press(s, 39)}></div>
                        <div className='box2' ref = {box32} onClick={(s) => press(s, 32)}></div>
                        <div className='box2' ref = {box25} onClick={(s) => press(s, 25)}></div>
                        <div className='box2' ref = {box18} onClick={(s) => press(s, 18)}></div>
                        <div className='box2' ref = {box11} onClick={(s) => press(s, 11)}></div>
                        <div className='box2' ref = {box4} onClick={(s) => press(s, 4)}></div>
                </div>
                <div className='col6'>
                        <div className='box2' ref = {box40} onClick={(s) => press(s, 40)}></div>
                        <div className='box2' ref = {box33} onClick={(s) => press(s, 33)}></div>
                        <div className='box2' ref = {box26} onClick={(s) => press(s, 26)}></div>
                        <div className='box2' ref = {box19} onClick={(s) => press(s, 19)}></div>
                        <div className='box2' ref = {box12} onClick={(s) => press(s, 12)}></div>
                        <div className='box2' ref = {box5} onClick={(s) => press(s, 5)}></div>
                </div>
                <div className='col7'>
                        <div className='box2' ref = {box41} onClick={(s) => press(s, 41)}></div>
                        <div className='box2' ref = {box34} onClick={(s) => press(s, 34)}></div>
                        <div className='box2' ref = {box27} onClick={(s) => press(s, 27)}></div>
                        <div className='box2' ref = {box20} onClick={(s) => press(s, 20)}></div>
                        <div className='box2' ref = {box13} onClick={(s) => press(s, 13)}></div>
                        <div className='box2' ref = {box6}  onClick={(s) => press(s, 6)}></div>
                </div>
            </div>
            <div className='buttons2'>
                <button className="newGame" onClick = {() => end()} style={{marginTop: .05}}>New Game</button>
                <Link to='/TTT2' className='prevGame'>Previous Game</Link>
            </div>
        </div>
    )
}


export default TTT3;

