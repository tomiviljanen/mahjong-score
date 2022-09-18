import styled from "styled-components";
import { IMAGE_FOLDER } from "../util/Constants";
import { TileType } from "./Tile";

const StyledButton = styled.input<{ dontShow?: boolean }>`
    background-color: ${props => props.dontShow ? "#01a95b" : "#f5f0eb"};
    border-radius: 15%;
    padding: 0.3em;
    box-shadow: 0px 0.3em  ${props => props.dontShow ? "#f5f0eb" : "#01a95b"};
    width: ${props => props.width || "4em"};
`

interface TileButtonProps {
    onClick: (tile: TileType) => void;
    alt?: string;
    type: string;
    num: string;
    dontShow?: boolean;
}

const TileButton = ({ onClick, alt, type, num, dontShow }: TileButtonProps) => {
    return (<StyledButton
        type="image"
        alt={alt} onClick={() => onClick({ tile: type, num: num })}
        src={IMAGE_FOLDER + "/" + type + "/" + num + ".svg"}
        dontShow={dontShow}
    />)
}

export default TileButton;