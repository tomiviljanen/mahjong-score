import styled from "styled-components";

const Rack = styled.div<{ gap?: string }>`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 1em;
    margin-top: 1em;
    column-gap: ${props => props.gap || "1em"};
`

export default Rack;