import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((currentColor: string, index: number) => (
                <Form.Check
                    inline
                    type="radio"
                    label={
                        <span style={{ backgroundColor: currentColor }}>
                            {currentColor}
                        </span>
                    }
                    key={index}
                    value={currentColor}
                    checked={color === currentColor}
                    onChange={() => {
                        setColor(currentColor);
                    }}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
