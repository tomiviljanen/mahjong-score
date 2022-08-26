import { OptionButton } from './OptionButton';

type NakiProps = {
    type: string,
    active: boolean,
    click: (value: string) => void; 
}

export const Naki = (props: NakiProps) =>  {
    return (
    <>
        <OptionButton id={props.active ? "active" : "inactive"} onClick={() => props.click(props.type)}>{props.type}</OptionButton>
    </>)
}