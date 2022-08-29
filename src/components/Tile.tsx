import { IMAGE_FOLDER } from "../util/Constants";

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

  return <div className='rack tile-rack'>
    {
      Array.from({ length: 9 }).map((_, count) => (
        <input onClick={e => handleClick(tile, (count + 1).toString())} alt="tile" className="tile-fg" type="image" src={IMAGE_FOLDER + tile + "/" +  (count + 1) + ".svg"} />
      ))
    }
    <input alt="tile" className="tile-fg" type="image" src={IMAGE_FOLDER + "/" + tile + "/5-Dora.svg"} />
  </div>


}

type HonorProps = {
  handleOnClick: (value: TileType) => void
}

export const HonorTiles = ({handleOnClick}: HonorProps) => {
  const handleClick = (num: string) => {
    const tile = "Hon"
    handleOnClick({ tile, num });
  };

  return <div className="rack honor-rack">
    <input onClick={e => handleClick("Ton")} alt="tile" className="tile-fg" type="image" src="images/Hon/Ton.svg" />
    <input onClick={e => handleClick("Nan")} alt="tile" className="tile-fg" type="image" src="images/Hon/Nan.svg" />
    <input onClick={e => handleClick("Shaa")} alt="tile" className="tile-fg" type="image" src="images/Hon/Shaa.svg" />
    <input onClick={e => handleClick("Pei")} alt="tile" className="tile-fg" type="image" src="images/Hon/Pei.svg" />
    <input onClick={e => handleClick("Chun")} alt="tile" className="tile-fg" type="image" src="images/Hon/Chun.svg" />
    <input onClick={e => handleClick("Hatsu")} alt="tile" className="tile-fg" type="image" src="images/Hon/Hatsu.svg" />
    <input onClick={e => handleClick("Haku")} alt="tile" className="tile-fg" type="image" src="images/Hon/Haku.svg" />
  </div>
}