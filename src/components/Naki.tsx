import OptionButton from './styled/OptionButton';

type NakiProps = {
    type: string,
    active: boolean,
    click: (value: string) => void;
}

const Naki = (props: NakiProps) => {
    return <OptionButton
        active={props.active}
        onClick={() => props.click(props.type)}>
        {props.type}
    </OptionButton>
}

export default Naki;