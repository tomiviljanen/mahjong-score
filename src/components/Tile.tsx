import Rack from "./styled/Rack";
import TileButton from "./TileButton";

interface TileProps {
  tile: string;
  hideDora?: boolean;
  handleOnClick: (value: TileType) => void;
}

export interface TileType {
  tile: string;
  num: string;
}

export const Tiles = ({ tile, handleOnClick, hideDora }: TileProps) => {
  return <Rack gap="1em">
    {
      Array.from({ length: 9 }).map((_, count) => (
        <TileButton onClick={handleOnClick} type={tile} num={String(count + 1)} />
      ))
    }
    {!hideDora && <TileButton onClick={handleOnClick} type={tile} num="5-Dora" />}
  </Rack>


}

type HonorProps = {
  handleOnClick: (value: TileType) => void
}

export const HonorTiles = ({ handleOnClick }: HonorProps) => {
  return <Rack gap="1.8em">
    <TileButton onClick={handleOnClick} type="Hon" num={"Ton"} />
    <TileButton onClick={handleOnClick} type="Hon" num={"Nan"} />
    <TileButton onClick={handleOnClick} type="Hon" num={"Shaa"} />
    <TileButton onClick={handleOnClick} type="Hon" num={"Pei"} />
    <TileButton onClick={handleOnClick} type="Hon" num={"Chun"} />
    <TileButton onClick={handleOnClick} type="Hon" num={"Hatsu"} />
    <TileButton onClick={handleOnClick} type="Hon" num={"Haku"} />
  </Rack>
}