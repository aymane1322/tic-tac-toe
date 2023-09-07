import { Dispatch, SetStateAction } from "react";

type cellProp = {
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    turn: string;
    setTurn: Dispatch<SetStateAction<string>>;
    id: number;
    winMsg: string;
}
function Cell({cells,setCells,turn,setTurn,id,winMsg}:cellProp){
    function handleClick(e: React.MouseEvent<HTMLDivElement>): void {
        if (winMsg) {
            return;
        }
        if (!cells[id]) {
            if (turn === "circle") {
                e.currentTarget.innerHTML = "O";
                e.currentTarget.classList.add("circle");
                setTurn("cross");
                updateCells("circle");
            } else if (turn === 'cross') {
                e.currentTarget.classList.add("cross");
                e.currentTarget.innerHTML = "X";
                setTurn("circle");
                updateCells("cross");
            }
        }
    }
    function updateCells(value:string) {
        const newArray = [...cells];
        newArray[id] = value;
        setCells(newArray);
    }
    return <div onClick={handleClick} className="cell"></div>
}
export default Cell;