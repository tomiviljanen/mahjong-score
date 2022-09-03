import { IMAGE_FOLDER } from "../util/Constants"
import TileButton from "./TileButton"

type WindTileProp = {
    wind: string,
    onClick: () => void
}

const WindTile = ({wind, onClick}: WindTileProp) => {
    return <TileButton onClick={onClick} alt="wind-tile" className="wind-img" type="image" src={IMAGE_FOLDER + "/Hon/" + wind + ".svg"}/>
}

export default WindTile;