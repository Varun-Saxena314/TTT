import React from 'react';
import './TTT.css'
import { useState, useRef } from 'react';
import { useContext } from 'react';
import { ScoreContext} from './ScoreContext';
import { Link } from 'react-router-dom';
import O from 'C:/Users/varun/Projects/tictactoe/src/TTT_App/Assets/circle.png'
import X from 'C:/Users/varun/Projects/tictactoe/src/TTT_App/Assets/ex.png'
let squares = ["","","","","","","","","","","","","","","",""];




const TTT2 = () => {
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
    const { updateX, updateO } = useContext(ScoreContext);
    let boxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15];
    const win = () => {
        if (squares[0] === squares[1] && squares[1] === squares[2] && squares[2] === squares[3] && squares[3] !== ""){
            doneTrack(true);
            if (squares[3] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[6] === squares[7] && squares[7] !== ""){
            doneTrack(true);
            if (squares[7] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[8] === squares[9] && squares[9] === squares[10] && squares[10] === squares[11] && squares[11] !== ""){
            doneTrack(true);
            if (squares[11] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[12] === squares[13] && squares[13] === squares[14] && squares[14] === squares[15] && squares[15] !== ""){
            doneTrack(true);
            if (squares[15] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[0] === squares[4] && squares[4] === squares[8] && squares[8] === squares[12] && squares[12] !== ""){
            doneTrack(true);
            if (squares[12] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[9] === squares[13] && squares[13] !== ""){
            doneTrack(true);
            if (squares[13] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[2] === squares[6] && squares[6] === squares[10] && squares[10] === squares[14] && squares[14] !== ""){
            doneTrack(true);
            if (squares[14] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[3] === squares[7] && squares[7] === squares[11] && squares[11] === squares[15] && squares[15] !== ""){
            doneTrack(true);
            if (squares[15] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[0] === squares[5] && squares[5] === squares[10] && squares[10] === squares[15] && squares[15] !== ""){
            doneTrack(true);
            if (squares[15] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
       else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[9] === squares[12] && squares[12] !== ""){
            doneTrack(true);
            if (squares[12] === 'X'){
            winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
            diss.current.innerHTML = ``;
            updateX();
            }
            else{
            winner.current.innerHTML = `The Winner Is <img src= '${O}'>`;
            diss.current.innerHTML = ``;
            updateO();
            }
        }
        else if (turns === 16){
            doneTrack(true);
            winner.current.innerHTML = "It's a Tie!" ;
            diss.current.innerHTML = '';
        }
    }
    const press = (s, num) => {
        if (done){
            return 0;
        }
        if (turns %2 === 0){
            if (squares[num] === ""){
            s.target.innerHTML = `<img src= '${X}'>`;
            squares[num] = "X";
            turnTrack(++turns);
            }
        }
        else{
            if (squares[num] === ""){
            s.target.innerHTML = `<img src= '${O}'>`;
            squares[num] = "O";
            turnTrack(++turns);
            }
        }
        win();
    }
    const end = () => {
        doneTrack(false);
        turnTrack(turns = 0);
        winner.current.innerHTML = 'A game of 4x4 Tic Tac Toe by ';
        diss.current.innerHTML = 'Varun Saxena';
        squares = ["","","","","","","","","","","","","","","",""];
        boxes.map((box) => {
            box.current.innerHTML = '';
        })
    }


    return (
        <div className='TTT_Game'>
        <h1 className='Title' ref = {winner}>A game of 4x4 Tic Tac Toe by </h1>
        <h1 className='Me'ref = {diss}>Varun Saxena</h1>
            <div className='grid2'>
                <div className='row1'>
                        <div className='box' ref = {box0} onClick={(s) => press(s, 0)}></div>
                        <div className='box' ref = {box1} onClick={(s) => press(s, 1)}></div>
                        <div className='box' ref = {box2} onClick={(s) => press(s, 2)}></div>
                        <div className='box' ref = {box3} onClick={(s) => press(s, 3)}></div>
                </div>
                <div className='row2'>
                        <div className='box' ref = {box4} onClick={(s) => press(s, 4)}></div>
                        <div className='box' ref = {box5} onClick={(s) => press(s, 5)}></div>
                        <div className='box' ref = {box6} onClick={(s) => press(s, 6)}></div>
                        <div className='box' ref = {box7} onClick={(s) => press(s, 7)}></div>
                </div>
                <div className='row3'>
                        <div className='box' ref = {box8} onClick={(s) => press(s, 8)}></div>
                        <div className='box' ref = {box9} onClick={(s) => press(s, 9)}></div>
                        <div className='box' ref = {box10} onClick={(s) => press(s, 10)}></div>
                        <div className='box' ref = {box11} onClick={(s) => press(s, 11)}></div>
                </div>
                <div className='row4'>
                        <div className='box' ref = {box12} onClick={(s) => press(s, 12)}></div>
                        <div className='box' ref = {box13} onClick={(s) => press(s, 13)}></div>
                        <div className='box' ref = {box14} onClick={(s) => press(s, 14)}></div>
                        <div className='box' ref = {box15} onClick={(s) => press(s, 15)}></div>
                        </div>
            </div>
            <div className='buttons2'>
                <button className="newGame" onClick = {() => end()} style={{marginTop: .05}}>New Game</button>
                <Link to='/TTT3'className="nextGame">Next Game</Link>
                <Link to='/TTT' className='prevGame'>Previous Game</Link>
        </div>
        </div>
    )
}


export default TTT2;

