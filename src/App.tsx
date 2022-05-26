import React, {useState } from "react";
import './App.css';
import { PinTile } from './PinTiles';

function App() {

  const [seatSource, setSeatSource] = useState("images/Ton.svg");
  const [seat, setSeat] = useState("EAST");
  const [roundSource, setRoundSource] = useState("images/Ton.svg");
  const [round, setRound] = useState("EAST");

  function clickSeatWind(){
      if(seat === "EAST"){
        setSeat("SOUTH");
        setSeatSource("images/Nan.svg");
      }else if(seat === "SOUTH"){
        setSeat("WEST");
        setSeatSource("images/Shaa.svg");
      }else if(seat === "WEST"){
        setSeat("NORTH");;
        setSeatSource("images/Pei.svg");
      }else if(seat === "NORTH"){
        setSeat("EAST");
        setSeatSource("images/Ton.svg");
      }
  }

  function clickRoundWind(){
    if(round === "EAST"){
      setRound("SOUTH");
      setRoundSource("images/Nan.svg");
    }else if(round === "SOUTH"){
      setRound("WEST");
      setRoundSource("images/Shaa.svg");
    }else if(round === "WEST"){
      setRound("NORTH");;
      setRoundSource("images/Pei.svg");
    }else if(round === "NORTH"){
      setRound("EAST");
      setRoundSource("images/Ton.svg");
    }
}

  return (
    <div className="App">
      <header className="App-header"> 
      <div className='wind'>
        <h3>Seat wind</h3>
        <input onClick={clickSeatWind} alt="seat-wind" className="wind-img" type="image" src={seatSource}></input>
      </div>
      <div className='wind'>
        <h3>Round wind</h3>
        <input onClick={clickRoundWind} alt="round-wind" className="wind-img" type="image" src={roundSource}></input>
      </div>

      <div className="point-rack">
        <div className="point-tile"></div>
        <div className="point-tile"></div>
        <div className="point-tile"></div>
      </div>

      <div className="rack">  
      {
        Array.from({length: 9}).map((_, count) => (
            <PinTile tile="man" num={count+1} />
        ))

    }
    </div>      
      </header>
    </div>
  );
}

export default App;
