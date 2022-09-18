import styled from "styled-components";


interface ScoreDisplayProps {
    score: number;
}


const ScoreWrapper = styled.div`
 width: 100%;
 background-color: rgba(0, 0, 0, 0.2);
 margin-top: 20px;
 border-radius: 15px 15px 0px 0px;
`;

export const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
    return (
        <ScoreWrapper>
            <h4>Score:</h4>
            {score}
        </ScoreWrapper>
    )
};