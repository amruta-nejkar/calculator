import { MainDiv, Button } from "./styled";

const Keypad = (props) => {
    const {HandleClick,Backspace,Reset,Calculate}=props;

    return(
        <>
        <MainDiv>
        <Button value="(" type="Button" onClick={HandleClick}>(</Button>
        <Button value=")"  type="Button" onClick={HandleClick}>)</Button>
        <Button value="CE" type="Button" onClick={Backspace}>CE</Button>
        <Button value="C" type="Button" onClick={Reset}>C</Button>
        <Button value="1" type="Button" onClick={HandleClick}>1</Button>
        <Button value="2" type="Button" onClick={HandleClick}>2</Button>
        <Button value="3" type="Button" onClick={HandleClick}>3</Button>
        <Button value="+" type="Button" onClick={HandleClick}>+</Button>
        <Button value="4" type="Button" onClick={HandleClick}>4</Button>
        <Button value="5" type="Button" onClick={HandleClick}>5</Button>
        <Button value="6" type="Button" onClick={HandleClick}>6</Button>
        <Button value="-" type="Button" onClick={HandleClick}>-</Button>
        <Button value="7" type="Button" onClick={HandleClick}>7</Button>
        <Button value="8" type="Button" onClick={HandleClick}>8</Button>
        <Button value="9" type="Button" onClick={HandleClick}>9</Button>
        <Button value="*" type="Button" onClick={HandleClick}>*</Button>
        <Button value="." type="Button" onClick={HandleClick}>.</Button>
        <Button value="0" type="Button" onClick={HandleClick}>0</Button>
        <Button value="=" type="Button" onClick={Calculate}>=</Button>
        <Button value="/" type="Button" onClick={HandleClick}>/</Button>
        </MainDiv>
        </>
    )
}

export default Keypad;