import { useState } from "react";
import styled from "styled-components";
import { HAND_LENGTH, IMAGE_FOLDER } from "../util/Constants";
import { isObjectEqual } from "../util/Util";
import Naki from "./Naki";
import OptionButton from "./styled/OptionButton";
import OptionRack from "./styled/OptionRack";
import { HonorTiles, Tiles, TileType } from "./Tile";
import WindTile from "./WindTile";

const StyledBoard = styled.div`
    background-color: #0e6023;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    font-size: calc(10px + 2vmin);
    color: white;
`

export const Board = () => {
    const WINDS = ["Ton", "Nan", "Shaa", "Pei"];
    const [seat, setSeat] = useState(0);
    const [round, setRound] = useState(0);
    const [tiles, setTiles] = useState("Man");
    const [showHonors, setShowHonors] = useState(false);
    const [chosenTiles, setChosenTiles] = useState<Array<TileType>>([]);
    const [naki, setNaki] = useState("NONE");

    const clickSeatWind = () => seat === 3 ? setSeat(0) : setSeat(seat + 1);
    const clickRoundWind = () => round === 3 ? setRound(0) : setRound(round + 1);
    const clickNaki = (value: string) => value === naki ? setNaki("NONE") : setNaki(value);

    const clickTileOption = (tile: string) => {
        if (tile !== "Hon") {
            setShowHonors(false);
            setTiles(tile);
        } else {
            setShowHonors(true);
        }
    }

    const addTile = (tile: TileType) => {
        if (chosenTiles.length < HAND_LENGTH &&
            chosenTiles.filter(t => isObjectEqual(t, tile)).length <= 3) {
            switch (naki) {
                case "Pon":
                    addPon(tile);
                    break;
                case "Kan":
                    addKan(tile);
                    break;
                default:
                    setChosenTiles([...chosenTiles, tile]);
            }
        }
    }

    const addPon = (tile: TileType) => {
        if (chosenTiles.filter(t => isObjectEqual(t, tile)).length < 1) {
            setChosenTiles([...chosenTiles, tile, tile, tile]);
        }
    }

    const addKan = (tile: TileType) => {
        if (chosenTiles.filter(t => isObjectEqual(t, tile)).length === 0) {
            setChosenTiles([...chosenTiles, tile, tile, tile, tile]);
        }
    }

    return (
        <StyledBoard>
            <div className="winds">
                <div className='wind'>
                    Seat wind<br />
                    <WindTile onClick={clickSeatWind} wind={WINDS[seat]} />
                </div>
                <div className='wind'>
                    Round wind<br />
                    <WindTile onClick={clickRoundWind} wind={WINDS[round]} />
                </div>
            </div>

            <div className="new-points">
                {Array.from({ length: chosenTiles.length }).map((_, x) => (
                    <img className="point-fg" alt="chosen-tile" src={IMAGE_FOLDER + "/" + chosenTiles[x].tile + "/" + chosenTiles[x].num + ".svg"} />
                ))}
            </div>

            <OptionRack>
                <Naki type="Chii" active={naki === "Chii"} click={clickNaki} />
                <Naki type="Pon" active={naki === "Pon"} click={clickNaki} />
                <Naki type="Kan" active={naki === "Kan"} click={clickNaki} />
                <Naki type="Closed Kan" active={naki === "Closed Kan"} click={clickNaki} />
            </OptionRack>

            <OptionRack>
                <OptionButton id={!showHonors && tiles === "Man" ? "active" : "inactive"} onClick={e => clickTileOption("Man")} >Manzu</OptionButton>
                <OptionButton id={!showHonors && tiles === "Pin" ? "active" : "inactive"} onClick={e => clickTileOption("Pin")} >Pinzu</OptionButton>
                <OptionButton id={!showHonors && tiles === "Sou" ? "active" : "inactive"} onClick={e => clickTileOption("Sou")} >Souzu</OptionButton>
                <OptionButton id={showHonors ? "active" : "inactive"} onClick={e => clickTileOption("Hon")} >Honor</OptionButton>
            </OptionRack>

            {showHonors ? <HonorTiles handleOnClick={addTile} /> : <Tiles handleOnClick={addTile} tile={tiles} />}

        </StyledBoard>
    )
}