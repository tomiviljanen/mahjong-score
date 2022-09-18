import { useEffect, useState } from "react";
import styled from "styled-components";
import { HAND_LENGTH, KOKUSHI } from "../util/Constants";
import { arrayContainsArray, isObjectEqual } from "../util/Util";
import { DoraChooser } from "./DoraChooser";
import Naki from "./Naki";
import { ScoreDisplay } from "./ScoreDisplay/ScoreDisplay";
import OptionButton from "./styled/OptionButton";
import OptionRack from "./styled/OptionRack";
import PointRack from "./styled/PointRack";
import Rack from "./styled/Rack";
import WindRack from "./styled/WindRack";
import { HonorTiles, Tiles, TileType } from "./Tile";
import TileButton from "./TileButton";
import TilesetSelector from "./TilesetSelector";

const StyledBoard = styled.div`
    background-color: #0e6023;
    max-width: 1024px;
    margin: auto;
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
    const [chosenTiles, setChosenTiles] = useState<TileType[]>([]);
    const [naki, setNaki] = useState("NONE");

    const clickSeatWind = () => seat === 3 ? setSeat(0) : setSeat(seat + 1);
    const clickRoundWind = () => round === 3 ? setRound(0) : setRound(round + 1);
    const clickNaki = (value: string) => value === naki ? setNaki("NONE") : setNaki(value);

    useEffect(() => {
        //console.log(chosenTiles);
        if (chosenTiles.length >= HAND_LENGTH) {
            //console.log(arrayContainsArray(KOKUSHI, chosenTiles));
        }
    }, [chosenTiles]);

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
                case "Chii":
                    addChii(tile);
                    break;
                default:
                    setChosenTiles([...chosenTiles, tile]);
            }
        }
    }

    const addChii = (tile: TileType) => {
        if (tile.tile !== "Hon" &&
            tile.num !== "5-Dora" &&
            chosenTiles.filter(t => isObjectEqual(t, tile)).length < 1 &&
            chosenTiles.filter(t => isObjectEqual(t, { tile: tile.tile, num: tile.num + 1 })).length < 1 &&
            chosenTiles.filter(t => isObjectEqual(t, { tile: tile.tile, num: tile.num + 2 })).length < 1) {
            if (tile.num === "8") {
                setChosenTiles([...chosenTiles, { tile: tile.tile, num: String(Number(tile.num) - 1) }, tile, { tile: tile.tile, num: String(Number(tile.num) + 1) }])
            } else if (tile.num === "9") {
                setChosenTiles([...chosenTiles, { tile: tile.tile, num: String(Number(tile.num) - 2) }, { tile: tile.tile, num: String(Number(tile.num) - 1) }, tile])
            } else {
                setChosenTiles([...chosenTiles, tile, { tile: tile.tile, num: String(Number(tile.num) + 1) }, { tile: tile.tile, num: String(Number(tile.num) + 2) }])
            }
        }
    }

    const addPon = (tile: TileType) => {
        if (chosenTiles.length < 12 && chosenTiles.filter(t => isObjectEqual(t, tile)).length < 1) {
            setChosenTiles([...chosenTiles, tile, tile, tile]);
        }
    }

    const addKan = (tile: TileType) => {
        if (chosenTiles.length < 11 && chosenTiles.filter(t => isObjectEqual(t, tile)).length === 0) {
            setChosenTiles([...chosenTiles, tile, tile, tile, tile]);
        }
    }

    const removeTile = (num: number) => {
        const newTiles = [...chosenTiles];
        newTiles.splice(num, 1);
        setChosenTiles(newTiles);
    }

    return (
        <StyledBoard>
            <WindRack className="winds">
                <div>
                    Seat wind<br />
                    <TileButton onClick={clickSeatWind} type="Hon" num={WINDS[seat]} />
                </div>
                <div>
                    Round wind<br />
                    <TileButton onClick={clickRoundWind} type="Hon" num={WINDS[round]} />
                </div>
            </WindRack>
            <Rack>
                <DoraChooser />
                <DoraChooser />
                <DoraChooser />
                <DoraChooser />
            </Rack>

            <PointRack>
                {Array.from({ length: chosenTiles.length }).map((_, x) => (
                    <TileButton onClick={() => removeTile(x)} alt="chosen-tile" type={chosenTiles[x].tile} num={chosenTiles[x].num} />
                ))}
            </PointRack>

            <OptionRack>
                <Naki type="Chii" active={naki === "Chii"} click={clickNaki} />
                <Naki type="Pon" active={naki === "Pon"} click={clickNaki} />
                <Naki type="Kan" active={naki === "Kan"} click={clickNaki} />
            </OptionRack>

            <OptionRack>
                <TilesetSelector defaultValue={tiles} update={e => clickTileOption(e)} />
                <OptionButton onClick={() => setChosenTiles([])}>Clear</OptionButton>
            </OptionRack>


            {showHonors ? <HonorTiles handleOnClick={addTile} /> : <Tiles handleOnClick={addTile} tile={tiles} />}

            <ScoreDisplay score={25000} />

        </StyledBoard>
    )
}