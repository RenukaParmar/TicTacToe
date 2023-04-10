
import './App.css';
import './appp.css';
import { useState } from 'react';
function Square({ value, onSquareClick }) {
    return (
    <> 
       <button className='square game' onClick={onSquareClick}>
      {value}
    </button>
    </> 

  );
  //   const[value,setvalue]=useState(null);
  //   // console.log(value);
  //   // console.log(setvalue);   
  //   function handleclick(){
  //     setvalue('X')
  //     console.log("clicked");
  //   } 
  // return (
  // <button
  // className="square"
  // onClick={handleclick} 
  // >{value}
  // </button>
  // );
}

function Board() {
  const [xIsNext, setxIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  function handleClick(i) {
    if ( calculateWinner(squares)||squares[i] ) {
      return;
    }
    const nextSquares = squares.slice();
    // console.log(nextSquares)
    if (xIsNext) {
      nextSquares[i] = 'X';
    }
    else {
      nextSquares[i] = 'O';
    }
    // nextSquares[i]='X';
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
  } 
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
       status = 'Winner is: ' + winner;
    }
    else {
       status = 'Turn for:' + (xIsNext ? 'X' : 'O');
    }
   
  return (
    <>
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      {/* <button onClick={Reset}>Reset </button> */}
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null; 
}
// function Reset(){
// console.log("hbcdh")
//  const[squares,setSquares]=useState("");
// }

export default Board;
