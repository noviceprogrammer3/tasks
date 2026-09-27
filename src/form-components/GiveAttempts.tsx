import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="How many attempts do you want to gain?"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequest(Number(event.target.value));
                    }}
                />
            </Form.Group>
            <button
                disabled={attempts < 1}
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
            >
                Use
            </button>
            <button
                onClick={() => {
                    setAttempts(attempts + request);
                }}
            >
                Gain
            </button>
            <div> You have {attempts} left</div>
        </div>
    );
}
