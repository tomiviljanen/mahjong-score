import { useState } from "react";
import TileButton from "./TileButton";
import Modal from 'react-modal';
import { HonorTiles, Tiles, TileType } from "./Tile";
import Rack from "./styled/Rack";
import styled from "styled-components";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#0b4d1c',
        maxHeight: '100vh',
        maxWidth: "700px",
    },
};

const CloseButton = styled.button`
    background-color: red;
    border: 0px;
    padding: 10px;
    color: white;
    font-weight: bold;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

interface DoraChooserProps {
    onSelect?: (tile: TileType) => void;
}

export const DoraChooser = ({ onSelect }: DoraChooserProps) => {
    const [showModal, setShowModal] = useState(false);
    const [chosenDora, setChosenDora] = useState({ tile: "Other", num: "Back" });

    const selectDora = (tile: TileType) => {
        setChosenDora(tile)
        setShowModal(false);
    }

    return (
        <>
            <ButtonWrapper>
                <TileButton onClick={() => setShowModal(true)} dontShow={chosenDora.tile === "Other"} type={chosenDora.tile} num={chosenDora.num} />
                <button onClick={() => setChosenDora({ tile: "Other", num: "Back" })}>Clear</button>
            </ButtonWrapper>
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="test"
                style={customStyles}
                ariaHideApp={false}
            >
                <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
                <Rack>
                    <Tiles hideDora tile="Man" handleOnClick={selectDora} />
                    <Tiles hideDora tile="Pin" handleOnClick={selectDora} />
                    <Tiles hideDora tile="Sou" handleOnClick={selectDora} />
                    <HonorTiles handleOnClick={selectDora} />
                    <TileButton onClick={selectDora} dontShow type="Other" num="Back" />
                </Rack>
            </Modal>
        </>
    );
}