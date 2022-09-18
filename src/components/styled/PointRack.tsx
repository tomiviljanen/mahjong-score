import styled from "styled-components";

const PointRack = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 2rem;
    gap: 12px;
    margin-top: 0.5em;
    flex-flow: center;
    align-items: left;
    
    & :nth-child(3n+1) {
       margin-left: 24px;
    };
`

export default PointRack;