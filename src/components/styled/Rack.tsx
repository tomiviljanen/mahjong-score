import styled from "styled-components";

const Rack = styled.div < { gap?: string, justifyContent?: string, toBottom?: boolean }> `
    width: 100%;
    display: flex;
    justify-content: ${props => props.justifyContent || "space-evenly"};
    flex-wrap: wrap;
    row-gap: 1em;
    padding-top: 1em;
    column-gap: ${props => props.gap || "1em"};
    margin-top: ${props => props.toBottom ? "auto" : "0px"}
`

export default Rack;