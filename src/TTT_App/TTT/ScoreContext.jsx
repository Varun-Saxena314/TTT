import React from 'react';
import { createContext, useState } from 'react';


export const ScoreContext = createContext();


export const ScoreProvider = ({ children }) => {
  let [scorex, xincr] = useState(0);
  let [scoreo, oincr] = useState(0);


  const updateX = () => xincr(scorex + 1);
  const updateO = () => oincr(scoreo + 1);


  const resetX = () => xincr(scorex = 0);
  const resetO = () => oincr(scoreo = 0);
  return (
    <ScoreContext.Provider value={{ scorex, scoreo, updateX, updateO, resetX, resetO}}>
      {children}
    </ScoreContext.Provider>
  );
};
