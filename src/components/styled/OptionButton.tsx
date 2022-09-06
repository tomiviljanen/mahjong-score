import styled from "styled-components";

const OptionButton = styled.button<{active: boolean}>`
flex-grow: 1;
padding: 1em;
border-radius: 0%;
margin: 0px;
background-color: #f5f0eb;
color: black;
border: 0px;
background-color: ${props => props.active ?  "orange" : "white"};
`

export default OptionButton;