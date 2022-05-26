type TileProps = {
    num: number,
    tile: string,
}



export const PinTile = ({num, tile}: TileProps) => {
    var source;
        if (tile === "man") {
            source = "images/Man" + num + ".svg"
        }else if(tile === "sou"){
            source = "images/Sou" + num + ".svg"
        }else{
            source = "images/Pin" + num + ".svg"
        }

        return <input alt="tile" className="tile-fg" type="image" src={source}></input>
}