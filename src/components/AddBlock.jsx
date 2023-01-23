import React, { useState } from "react";
import StyledBox from "./StyledBox";

const AddBlock = () => {
    const colorField = React.createRef();

    const [state, setState] = useState({
        blocks: [],
        color: "",
    });

    const addBlockHandler = e => {
        e.preventDefault();
        setState({
            blocks: [...state.blocks, {
                color: state.color,
            }],
            color: "",
        });
        colorField.current.value = "";
    };
    const ColorHandler = (e) => {
        e.preventDefault();
        setState({
            ...state,
            color: e.target.value
        });
    };

    return (
        <div>
            <input
                ref={colorField}
                onChange={ColorHandler}
                placeholder="Color. Example: red, blue..."
            />
            <button onClick={addBlockHandler}>Submit</button>
            <div>
                {state.blocks.map((b, index) => (
                    <StyledBox
                        key={index}
                        bgColor={b.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default AddBlock;