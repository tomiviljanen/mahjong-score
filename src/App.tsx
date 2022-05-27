import React, {useState } from "react";
import './App.css';
import { HonorTiles, Tiles } from './Tile';

function App() {

  const [seatSource, setSeatSource] = useState("images/Ton.svg");
  const [seat, setSeat] = useState("EAST");
  const [roundSource, setRoundSource] = useState("images/Ton.svg");
  const [round, setRound] = useState("EAST");
  const [tiles, setTiles] = useState("Man");
  const [showHonors, setShowHonors] = useState(false);
  const [chosenTiles, setChosenTiles] = useState<Array<{type: string, num: string}>>([]);
  const [naki, setNaki] = useState("NONE");

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

function clickTileOption(tile: string){
  if(tile !== "Hon"){
    setShowHonors(false);
    setTiles(tile);
  }else{
    setShowHonors(true);
  }
}

function clickNaki(value: string){
    value === naki ? setNaki("NONE") : setNaki(value);
}

function addTile(type: string, num: string){
  if(chosenTiles.length < 14 &&
    chosenTiles.filter(item => item.type === type && item.num === num).length <= 3){
      if(naki === "PON"){
        if(chosenTiles.filter(item => item.type === type && item.num === num).length < 1){
          setChosenTiles([...chosenTiles, {type, num}, {type, num}, {type, num}]);
        }
      }else if(naki === "KAN"){
        if(chosenTiles.filter(item => item.type === type && item.num === num).length === 0){
          setChosenTiles([...chosenTiles, {type, num}, {type, num}, {type, num}, {type, num}]);
        }
      }else{
        setChosenTiles([...chosenTiles, {type, num}]);
      }
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <div className="winds">
          <div className='wind'>
            Seat wind<br/>
            <input onClick={clickSeatWind} alt="seat-wind" className="wind-img" type="image" src={seatSource}></input>
          </div>
          <div className='wind'>
            Round wind<br/>
            <input onClick={clickRoundWind} alt="round-wind" className="wind-img" type="image" src={roundSource}></input>
          </div>
      </div>

      <div className="new-points">
        {Array.from({length: chosenTiles.length}).map((_, x) => (
            <img className="point-fg" alt="chosen-tile" src={"images/" + chosenTiles[x].type + chosenTiles[x].num + ".svg"}/>
        ))}

      </div>



      <div className="naki-chooser">
        <button id={naki === "CHII" ? "active" : "inactive"} onClick={e => clickNaki("CHII")} className="naki-option">Chii</button>
        <button id={naki === "PON" ? "active" : "inactive"} onClick={e => clickNaki("PON")} className="naki-option">Pon</button>
        <button id={naki === "KAN" ? "active" : "inactive"} onClick={e => clickNaki("KAN")} className="naki-option">Kan</button>
        <button id={naki === "CKAN" ? "active" : "inactive"} onClick={e => clickNaki("CKAN")} className="naki-option">Closed Kan</button>
      </div>

      <div className="tile-chooser">
        <button onClick={e => clickTileOption("Man")} className="tile-option">Manzu</button>
        <button onClick={e => clickTileOption("Pin")} className="tile-option">Pinzu</button>
        <button onClick={e => clickTileOption("Sou")} className="tile-option">Souzu</button>
        <button onClick={e => clickTileOption("Hon")} className="tile-option">Honor</button>
      </div>
      {showHonors ? <HonorTiles/> : <Tiles click={addTile} tile={tiles}/>}
      </header>
    </div>
  );
}

export default App;
