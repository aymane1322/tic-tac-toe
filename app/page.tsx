'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Cell from './component/Cell';
const winCombo:number[][] = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]
export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("circle");
  const [winMsg, setWinMsg] = useState("");
  console.log(cells)
  useEffect(() => {
    winCombo.forEach((combo) => {
      if (combo.every((cell) => cells[cell] === 'circle')) {
        setWinMsg("Circle Win");
      } else if (combo.every((cell) => cells[cell] === 'cross')) {
        setWinMsg("Cross Win");
      }
    })
  }, [cells,winMsg]);
  console.log(winMsg);
  useEffect(() => {
    if (cells.every((ele) => ele !== '') && !winMsg) {
      setWinMsg("Draw");
    }
  }, [cells, winMsg]);
  return (
    <main>
      <div className="gameContainer">
        {cells.map((cell, index) => (
          <Cell id={index} cells={cells} setCells={setCells} turn={turn} setTurn={setTurn} key={index} winMsg={winMsg} />
        ))}
      </div>
      {!winMsg&&<div className="text">{turn} turn</div>}
      {winMsg && <div className="text">{winMsg}</div>}
    </main>
  );
  
}
