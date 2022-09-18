import styled from "styled-components";

const StyledSelector = styled.select`
    background-color: white;
    color: black;
    border: none;
    border-radius: 0px;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 8px;
    cursor: pointer;
`

interface Props {
    update: (tileSet: string) => void;
    defaultValue?: string;
}

export const TilesetSelector = ({ update, defaultValue }: Props) => {

    return (
        <StyledSelector defaultValue={defaultValue} onChange={e => update(e.target.value)}>
            <option value="Man">Man</option>
            <option value="Pin">Pin</option>
            <option value="Sou">Sou</option>
            <option value="Hon">Hon</option>
        </StyledSelector>
    )
}

export default TilesetSelector