import styled from "styled-components";

const PointRack = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 2rem;
    gap: 0.5em;
    margin-top: 1em;
    flex-flow: center;
    flex-wrap: wrap;
    align-items: left;
    
    & :nth-child(3n+1) {
       margin-left: 24px;
    };
`

export default PointRack;