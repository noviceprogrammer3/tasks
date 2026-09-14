import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function increase(): void {
        setAttempts(attempts + 1);
    }
    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    return (
        <div>
            Attempts Left: <span>{attempts}</span>
            <Button onClick={startQuiz} disabled={progress || attempts < 1}>
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
            <Button onClick={increase} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
