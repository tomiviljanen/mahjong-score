import TileButton from "./TileButton"

type WindTileProp = {
    wind: string,
    onClick: () => void
}

const WindTile = ({ wind, onClick }: WindTileProp) => {
    return <TileButton onClick={onClick} alt="wind-tile" type="Hon" num={wind} />
}

export default WindTile;