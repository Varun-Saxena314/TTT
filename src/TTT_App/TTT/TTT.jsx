import React from 'react';
import './TTT.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { ScoreContext } from './ScoreContext';
import { Link } from 'react-router-dom';
import O from 'C:/Users/varun/Projects/TTT/TTT/src/TTT_App/Assets/circle.png'
import X from 'C:/Users/varun/Projects/TTT/TTT/src/TTT_App/Assets/ex.png'
let squares = ["","","","","","","","",""];


const TTT = () => {
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


    let boxes = [box0,box1,box2,box3,box4,box5,box6,box7,box8];

    const { updateX, updateO } = useContext(ScoreContext);



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
        winner.current.innerHTML = 'A game of Tic Tac Toe by ';
        diss.current.innerHTML = 'Varun Saxena';
        squares = ["","","","","","","","",""];
        turnTrack(turns = 0);
        boxes.map((box) => {
            box.current.innerHTML = "";   
              
        })
    }


    const win = () => {
        if (squares[0] === squares[1] && squares[1] === squares[2] && squares[2] !== ""){
            doneTrack(true);
            if (squares[2] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= '${X}'>`;
                diss.current.innerHTML = ``;
                updateX();
            }
            else{
                winner.current.innerHTML = `The Winner Is <img src= ${O}>`;
                diss.current.innerHTML = ``;
                updateO();
            }
        }
        else if (squares[3] === squares[4] && squares[4] === squares[5] && squares[5] !== ""){
            doneTrack(true);
            if (squares[5] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= ${X}>`;
                diss.current.innerHTML = ``;
                updateX();
            }
            else{
                winner.current.innerHTML = `The Winner Is <img src= ${O}>`;
                diss.current.innerHTML = ``;
                updateO();
            }
        }
        else if (squares[6] === squares[7] && squares[7] === squares[8] && squares[8] !== ""){
            doneTrack(true);
            if (squares[8] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= ${X}>`;
                diss.current.innerHTML = ``;
                updateX();
            }
            else{
                winner.current.innerHTML = `The Winner Is <img src= ${O}>`;
                diss.current.innerHTML = ``;
                updateO();
            }
        }
        else if (squares[0] === squares[3] && squares[3] === squares[6] && squares[6] !== ""){
            doneTrack(true);
            if (squares[6] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= ${X}>`;
                diss.current.innerHTML = ``;
                updateX();
            }
            else{
                winner.current.innerHTML = `The Winner Is <img src= ${O}>`;
                diss.current.innerHTML = ``;
                updateO();
            }
        }
        else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[7] !== ""){
            doneTrack(true);
            if (squares[7] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= ${X}>`;
                diss.current.innerHTML = ``;
                updateX();
            }
            else{
                winner.current.innerHTML = `The Winner Is <img src= ${O}>`;
                diss.current.innerHTML = ``;
                updateO();
            }
        }
        else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[8] !== ""){
            doneTrack(true);
            if (squares[8] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= ${X}>`;
                diss.current.innerHTML = ``;
                updateX();
            }
            else{
                winner.current.innerHTML = `The Winner Is <img src= ${O}>`;
                diss.current.innerHTML = ``;
                updateO();
            }
        }
        else if (squares[0] === squares[4] && squares[4] === squares[8] && squares[8] !== ""){
            doneTrack(true);
            if (squares[8] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= ${X}>`;
                diss.current.innerHTML = ``;
                updateX();
            }
            else{
                winner.current.innerHTML = `The Winner Is <img src= ${O}>`;
                diss.current.innerHTML = ``;
                updateO();
            }
        }
        else if (squares[2] === squares[4] && squares[4] === squares[6] && squares[6] !== ""){
            doneTrack(true);
            if (squares[6] === 'X'){
                winner.current.innerHTML = `The Winner Is <img src= ${X}>`;
                diss.current.innerHTML = ``;
                updateX();
            }
            else{
                winner.current.innerHTML = `The Winner Is <img src= ${O}>`;
                diss.current.innerHTML = ``;
                updateO();
            }
        }
        else if (turns === 9){
            doneTrack(true);
            winner.current.innerHTML = "It's a Tie!" ;
            diss.current.innerHTML = '';
        }
    }
return (
    <div className='TTT_Game'>
        <h1 className='Title' ref={winner}>A game of Tic Tac Toe by </h1>
        <h1 className='Me' ref={diss}>Varun Saxena</h1>
        <div className="grid">
            <div className="row1">
                <div className="box" ref = {box0} onClick ={(s) => press(s, 0)}></div>
                <div className="box" ref = {box1} onClick ={(s) => press(s, 1)}></div>
                <div className="box" ref = {box2} onClick ={(s) => press(s, 2)}></div>
            </div>
            <div className="row2">
                <div className="box" ref = {box3} onClick ={(s) => press(s, 3)}></div>
                <div className="box" ref = {box4} onClick ={(s) => press(s, 4)}></div>
                <div className="box" ref = {box5} onClick ={(s) => press(s, 5)}></div>
            </div>
            <div className="row3">
                <div className="box" ref = {box6} onClick ={(s) => press(s, 6)}></div>
                <div className="box" ref = {box7} onClick ={(s) => press(s, 7)}></div>
                <div className="box" ref = {box8} onClick ={(s) => press(s, 8)}></div>
            </div>
        </div>
        <div className='buttons'>
                <button className="newGame" onClick = {() => end()} style={{marginTop: .05}}>New Game</button>
                <Link to='/TTT2' className='nextGame'>Next Game</Link>
        </div>
    </div>
)


}


export default TTT
