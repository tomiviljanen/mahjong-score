import { useState } from "react";
import TileButton from "./TileButton";
import Modal from 'react-modal';
import { HonorTiles, Tiles, TileType } from "./Tile";
import Rack from "./styled/Rack";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

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
            <TileButton onClick={() => setShowModal(true)} dontShow={chosenDora.tile === "Other"} type={chosenDora.tile} num={chosenDora.num} />
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="test"
                style={customStyles}>
                <Tiles hideDora tile="Man" handleOnClick={selectDora} />
                <Tiles hideDora tile="Pin" handleOnClick={selectDora} />
                <Tiles hideDora tile="Sou" handleOnClick={selectDora} />
                <HonorTiles handleOnClick={selectDora} />
                <Rack>
                    <TileButton onClick={selectDora} dontShow type="Other" num="Back" />
                </Rack>
            </Modal>
        </>
    );
}