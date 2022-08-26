import { IMAGE_FOLDER } from "../Constants";

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
        <input onClick={e => handleClick(tile, (count + 1).toString())} alt="tile" className="tile-fg" type="image" src={IMAGE_FOLDER + tile + (count + 1) + ".svg"} />
      ))
    }
    <input alt="tile" className="tile-fg" type="image" src={IMAGE_FOLDER + tile + (5) + "-Dora.svg"} />
  </div>


}

export const HonorTiles = () => {

  return <div className="rack honor-rack">
    <input alt="tile" className="tile-fg" type="image" src="images/Ton.svg" />
    <input alt="tile" className="tile-fg" type="image" src="images/Nan.svg" />
    <input alt="tile" className="tile-fg" type="image" src="images/Shaa.svg" />
    <input alt="tile" className="tile-fg" type="image" src="images/Pei.svg" />
    <input alt="tile" className="tile-fg" type="image" src="images/Chun.svg" />
    <input alt="tile" className="tile-fg" type="image" src="images/Hatsu.svg" />
    <input alt="tile" className="tile-fg" type="image" src="images/Haku.svg" />
  </div>
}