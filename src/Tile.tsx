import * as React from 'react';

type TileProps = {
    tile: string,
    click: (type: string, num: string) => void
}

const folder = "images/";

export const Tiles = ({tile, click}: TileProps) => {
            return <div className='rack tile-rack'>
            {
            Array.from({length: 9}).map((_, count) => (
                <input onClick={e => click(tile, (count+1).toString())} alt="tile" className="tile-fg" type="image" src={folder + tile + (count+1) + ".svg"}/>
            ))
            }
            <input alt="tile" className="tile-fg" type="image" src={folder + tile + (5) + "-Dora.svg"}/>
        </div>
        
        
}

export const HonorTiles = () => {

    return <div className="rack honor-rack">
                <input alt="tile" className="tile-fg" type="image" src="images/Ton.svg"/>
                <input alt="tile" className="tile-fg" type="image" src="images/Nan.svg"/>
                <input alt="tile" className="tile-fg" type="image" src="images/Shaa.svg"/>
                <input alt="tile" className="tile-fg" type="image" src="images/Pei.svg"/>
                <input alt="tile" className="tile-fg" type="image" src="images/Chun.svg"/>
                <input alt="tile" className="tile-fg" type="image" src="images/Hatsu.svg"/>
                <input alt="tile" className="tile-fg" type="image" src="images/Haku.svg"/>
           </div>
}