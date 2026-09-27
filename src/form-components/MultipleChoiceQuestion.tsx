import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Pick an option</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((answer: string, index: number) => (
                        <option value={answer} key={index}>
                            {answer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === selected ? "✔️" : "❌"}
        </div>
    );
}
