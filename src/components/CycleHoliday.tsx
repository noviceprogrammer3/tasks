import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🐰" | "🌮" | "🎆" | "🍗" | "🎅";

// Easter March
// Cinco de mayo in May
// Fourth of July
// thanksgiving November
// Christmas December
// year : "🐰" ->  "🌮" -> "🎆" -> "🍗" -> "🎅"
//Alphabetic: 🎅 -> 🌮 -> 🐰 -> 🎆 -> 🍗
export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🍗");

    const yearTransition: Record<Holiday, Holiday> = {
        "🐰": "🌮",
        "🌮": "🎆",
        "🎆": "🍗",
        "🍗": "🎅",
        "🎅": "🐰",
    };
    const alphabeticTransition: Record<Holiday, Holiday> = {
        "🎅": "🌮",
        "🌮": "🐰",
        "🐰": "🎆",
        "🎆": "🍗",
        "🍗": "🎅",
    };

    function changeHolidayByYear(): void {
        const newHoliday = yearTransition[holiday];
        setHoliday(newHoliday);
    }
    function changeHolidayByAlphabet(): void {
        const newHoliday = alphabeticTransition[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={changeHolidayByYear}>Advance By Alphabet</Button>
            <Button onClick={changeHolidayByAlphabet}>Advance by Year</Button>
        </div>
    );
}
