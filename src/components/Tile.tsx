import { IMAGE_FOLDER } from "../util/Constants";
import Rack from "./styled/Rack";
import TileButton from "./TileButton";

type TileProps = {
  tile: string,
  handleOnClick: (value: TileType) => void
}

export type TileType = {
  tile: string,
  num: string
}

export const Tiles = ({ tile, handleOnClick }: TileProps) => {
  const handleClick = (tile: string, num: string) => {
    handleOnClick({ tile, num });
  };

  return <Rack gap="1em">
    {
      Array.from({ length: 9 }).map((_, count) => (
        <TileButton onClick={e => handleClick(tile, (count + 1).toString())} alt="tile" className="tile-fg" type="image" src={IMAGE_FOLDER + tile + "/" +  (count + 1) + ".svg"} />
      ))
    }
    <TileButton alt="tile" className="tile-fg" type="image" src={IMAGE_FOLDER + "/" + tile + "/5-Dora.svg"} />
  </Rack>


}

type HonorProps = {
  handleOnClick: (value: TileType) => void
}

export const HonorTiles = ({handleOnClick}: HonorProps) => {
  const handleClick = (num: string) => {
    const tile = "Hon"
    handleOnClick({ tile, num });
  };

return <Rack gap="1.8em">
    <TileButton onClick={e => handleClick("Ton")} alt="tile" className="tile-fg" type="image" src="images/Hon/Ton.svg" />
    <TileButton onClick={e => handleClick("Nan")} alt="tile" className="tile-fg" type="image" src="images/Hon/Nan.svg" />
    <TileButton onClick={e => handleClick("Shaa")} alt="tile" className="tile-fg" type="image" src="images/Hon/Shaa.svg" />
    <TileButton onClick={e => handleClick("Pei")} alt="tile" className="tile-fg" type="image" src="images/Hon/Pei.svg" />
    <TileButton onClick={e => handleClick("Chun")} alt="tile" className="tile-fg" type="image" src="images/Hon/Chun.svg" />
    <TileButton onClick={e => handleClick("Hatsu")} alt="tile" className="tile-fg" type="image" src="images/Hon/Hatsu.svg" />
    <TileButton onClick={e => handleClick("Haku")} alt="tile" className="tile-fg" type="image" src="images/Hon/Haku.svg" />
  </Rack>
}