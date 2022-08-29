import { IMAGE_FOLDER } from "../util/Constants"

type WindTileProp = {
    wind: string,
    onClick: () => void
}

export const WindTile = ({wind, onClick}: WindTileProp) => {
    return <input onClick={onClick} alt="wind-tile" className="wind-img" type="image" src={IMAGE_FOLDER + "/Hon/" + wind + ".svg"}></input>
}