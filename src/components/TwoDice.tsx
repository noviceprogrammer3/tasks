import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, setdie1] = useState<number>(2);
    const [die2, setdie2] = useState<number>(6);

    return (
        <div>
            <div>
                {" "}
                Die one: <span data-testid="left-die">{die1}</span>
            </div>
            <div>
                {" "}
                Die two: <span data-testid="right-die">{die2}</span>
            </div>
            <Button
                onClick={() => {
                    setdie1(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setdie2(d6());
                }}
            >
                Roll Right
            </Button>
            {die1 === die2 && die1 === 1 && <div>You lose</div>}
            {die1 === die2 && die1 !== 1 && <div>You win</div>}
        </div>
    );
}
