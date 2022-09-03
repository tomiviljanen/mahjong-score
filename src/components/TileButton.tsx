import styled, { css } from "styled-components";

const TileButton = styled.input`
    background-color: #f5f0eb;
    border-radius: 15%;
    padding: 0.3em;
    box-shadow: 0px 0.3em #01a95b;
    width: ${props => props.width || "4em"};
`

export default TileButton;